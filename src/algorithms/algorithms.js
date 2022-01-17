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

const reps = {
  hypertrophy: {
    one: 12,
    two: 12,
    three: 10,
    four: 8,
  },
  strength: {
    one: 6,
    two: 6,
    three: 4,
    four: 4,
  },
};

module.exports.OrmToReps = OrmToReps;
module.exports.RepsORMtoWeight = RepsORMtoWeight;
module.exports.volumeLoad = volumeLoad;
module.exports.newWeight = newWeight;
module.exports.reps = reps;

//at some point we need to subtract 5% from initial one rep maximum. Best to do it early and only in one place
