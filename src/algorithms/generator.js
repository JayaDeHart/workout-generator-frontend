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
    hypertrophy: mesoCycle(reps.hypertrophy),
    strength: mesoCycle(reps.strength),
  };
}

function mesoCycle(reps) {
  //use the reps object here to assign reps to each week
}

function microCycle(prevWeek) {
  const output = [];
  prevWeek.forEach((obj) => {
    //generate load
    //pass exercise name and load to eGen
    //pass
  });
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
