import Rest from 'grommet/utils/Rest';

export function addTask (task) {
  return new Promise ((resolve, reject) => {
    Rest.post('/api/task/', task).end((error) =>{
      if(error){
      	reject ('An unexpected error has occurred!!');
      } else{
      	resolve ();
      }
    })
  });
}

export function getTasks () {
  return new Promise ((resolve, reject) => {
    Rest.get('/api/task/').end((error, response) =>{
      if(error){
      	reject ('An unexpected error has occurred!!');
      } else{
      	resolve (response.body);
      }
    })
   });
}
