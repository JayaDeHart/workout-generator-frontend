const {
  OrmToReps,
  RepsORMtoWeight,
  volumeLoad,
  newWeight,
  scheme,
} = require('./algorithms');

//sample data for testing
const orms = {
  bench: 10,
  squat: 11,
  rows: 12,
  deadlifts: 13,
};

function weekOne(orms, sets, reps) {
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

function macroCycle() {
  //use the reps object here to generate mesocycles ie. reps.hypertrophy and reps.strength
  return {
    hypertrophy: mesoCycle(scheme.hypertrophy),
    strength: mesoCycle(scheme.strength),
  };
}

function mesoCycle(scheme) {
  //generate an object with 4 weeks of lift arrays in it
  //how to pass prevWeek to microCycle??
  //iteratively generate the week numbers and pass them to microCycle
  //0th week??
  const output = {};
  for (const [key, value] of Object.entries(scheme)) {
    output[key] = microCycle(prevWeek, value);
  }
}

function microCycle(weekOne, scheme, weekNumber) {
  const output = [];
  const [reps, sets] = scheme;
  weekOne.forEach((obj) => {
    const load = volumeLoad(obj.weight, obj.sets, obj.reps);
    const newLoad = load + load * 0.05 * weekNumber;
    const exercise = exerciseGen(obj.exercise, newLoad, sets, reps);
    output.push(exercise);
  });
  return output;
}

function exerciseGen(exercise, load, sets, reps) {
  //exercise and load
  const weight = newWeight(load, reps, sets);
  return {
    exercise,
    weight,
    sets,
    reps,
  };
}

const hypertrophy = {
  weekOne: [
    {
      exercise: 'Bench',
      sets: 3,
      reps: 12,
      weight: 50,
    },
    {
      sets: 3,
      reps: 12,
      weight: 50,
    },
    {
      sets: 3,
      reps: 12,
      weight: 50,
    },
    {
      sets: 3,
      reps: 12,
      weight: 50,
    },
  ],
  weekTwo: {
    bench: {
      sets: 3,
      reps: 12,
      weight: 50,
    },
    rows: {
      sets: 3,
      reps: 12,
      weight: 50,
    },
    squat: {
      sets: 3,
      reps: 12,
      weight: 50,
    },
    deadlift: {
      sets: 3,
      reps: 12,
      weight: 50,
    },
  },
};
