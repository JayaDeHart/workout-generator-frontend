//refactor to use intensity instead of volume-load

const {
  OrmToReps,
  repsORMtoWeight,
  volumeLoad,
  newWeight,
  scheme,
  caclORM,
} = require('./algorithms');

function weekOneGen(orms, sets, reps) {
  const output = [];
  for (const [key, value] of Object.entries(orms)) {
    const weight = repsORMtoWeight(reps, value);
    output.push({
      exercise: key,
      weight: weight,
      sets: sets,
      reps: reps,
      orm: value,
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
    const orm = obj.orm;
    const neworm = orm + orm * 0.025 * weekNumber;
    const exercise = exerciseGen(obj.exercise, neworm, sets, reps);
    output.push(exercise);
  });
  return output;
}

function exerciseGen(exercise, orm, sets, reps) {
  const weight = repsORMtoWeight(reps, orm).toFixed(1);
  return {
    exercise,
    weight,
    sets,
    reps,
    orm,
  };
}

module.exports.macroCycle = macroCycle;
