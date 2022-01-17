const {
  OrmToReps,
  RepsORMtoWeight,
  volumeLoad,
  newWeight,
  reps,
} = require('./algorithms');

let hypertrophy = {};
let strength = {};

const orms = {
    bench:10,
    squat:11,
    rows:12,
    deadlifts:13
}
function mesoCycle(cycle, orms){
  //generate initial load, use it to calculate 5% increase
  const [one,load]=weekOne(orms, 3, 12)
  if(cycle==="hypertrophy")
  return {
    weekOne: one,
    weekTwo: weekGenerator(load,1)
  }
}

function weekOne(orms, sets, reps){
    const output=[]
    const scheme=[];
    const weight = RepsORMtoWeight(reps, (0.95*orm))
    const load = volumeLoad(weight,sets,reps)
    for (const [key, value] of Object.entries(orms)) {  
        scheme.push({
            exercise:key,
            sets:sets,
            reps:reps
        })
      }
      output.push(scheme)
      output.push(load)
      return output
}


function weekGenerator()

const hypertrophy = {
  weekOne: [
    {
    exercise:"Bench",
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
