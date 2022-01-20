//calculate #of reps given percent one rep maximum
function OrmToReps(percent) {
  return 30 / percent - 29.5;
}

//calculate weight given reps and one rep maximum
function RepsORMtoWeight(reps, orm) {
  return (30 / (reps + 29.5)) * orm;
}

//calculate 'volume-load' given weight, sets, reps
function volumeLoad(weight, sets, reps) {
  return weight * sets * reps;
}

//calculate new weight given load and reps
function newWeight(load, reps, sets) {
  return load / (reps * sets);
}

//[reps,sets] for each week
const scheme = {
  hypertrophy: {
    week1: [12, 3],
    week2: [12, 3],
    week3: [10, 3],
    week4: [10, 3],
  },
  strength: {
    week1: [6, 4],
    week2: [6, 4],
    week3: [5, 5],
    week4: [5, 5],
  },
};

module.exports.OrmToReps = OrmToReps;
module.exports.RepsORMtoWeight = RepsORMtoWeight;
module.exports.volumeLoad = volumeLoad;
module.exports.newWeight = newWeight;
module.exports.scheme = scheme;

//seems like the algorithm overestimates how large of an impact set count has on lifting ability. EX week2-week3 RxS goes down from 24->20. So, the algorithm compensates by massively increasing weight.

//the weights look a little saner when I change the rep scheme to 5x5
