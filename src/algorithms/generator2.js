//refactor to use intensity instead of volume-load

const {
  OrmToReps,
  RepsORMtoWeight,
  volumeLoad,
  newWeight,
  scheme,
} = require('./algorithms');

function weekOneGen(orms, sets, reps) {
  const output = [];
  for (const [key, value] of Object.entries(orms)) {
    const weight = RepsORMtoWeight(reps, 0.95 * value);
    output.push({
      exercise: key,
      weight: weight,
      sets: sets,
      reps: reps,
    });
  }
  return output;
}

function macroCycle(orms) {
  const [reps, sets] = scheme.hypertrophy.week1;
  const weekOne = weekOneGen(orms, sets, reps);

  return {
    hypertrophy: mesoCycle(scheme.hypertrophy, weekOne, 0),
    strength: mesoCycle(scheme.strength, weekOne, 4),
  };
}

function mesoCycle(scheme, weekOne, start) {
  let week = start;
  const output = {};
  for (const [key, value] of Object.entries(scheme)) {
    output[key] = microCycle(value, week, weekOne);
    week++;
  }
  return output;
}

function microCycle(scheme, weekNumber, weekOne) {
  const output = [];
  const [reps, sets] = scheme;
  weekOne.forEach((obj) => {
    const load = volumeLoad(obj.weight, obj.sets, obj.reps);
    const newLoad = load + load * 0.025 * weekNumber;
    const exercise = exerciseGen(obj.exercise, newLoad, sets, reps);
    output.push(exercise);
  });
  return output;
}

function exerciseGen(exercise, load, sets, reps) {
  const weight = newWeight(load, reps, sets).toFixed(1);
  return {
    exercise,
    weight,
    sets,
    reps,
  };
}

module.exports.macroCycle = macroCycle;
