const tasks=[];

export function addTask (task){
	return new Promise ((resolve, reject) => {
		tasks.push(task);
		resolve();
	});
}

export function getTasks (){
	return new Promise ((resolve, reject) => {
		resolve (tasks);
	});
}
