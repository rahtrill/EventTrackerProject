window.addEventListener("load", function() {
	console.log("document loaded");
	init();
	document.createForm.submit.addEventListener("click", function(e){
		e.preventDefault();
		createForm(e);
	});
})

function init() {
	console.log("in init()");
	
	loadAll();
	aggregateData();
}

function loadAll() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/workouts");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let workouts = JSON.parse(xhr.responseText);
				console.log(workouts);
				displayWorkouts(workouts);
			} else {
				console.log("Workout list not found");
			}
		}
	}

	xhr.send();
}

function aggregateData() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/workouts");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let workouts = JSON.parse(xhr.responseText);
				minutesSpent(workouts);
				totalCalories(workouts);
				highestReps(workouts);
				highestWeight(workouts);
				lowestWeight(workouts);
			} else {
				console.log("Workout list not found");
			}
		}
	}

	xhr.send();
}

function minutesSpent(workouts) {
	let totalMinutes = 0;
	let display = document.getElementById("minutesSpent");
	
	for (let workout of workouts) {
		totalMinutes += workout.duration;
	}
	
	display.textContent = "Total minutes spent working out: " + totalMinutes + " minutes";
}

function totalCalories(workouts) {
	let totalCalories = 0;
	let display = document.getElementById("totalCalories");
	
	for (let workout of workouts) {
		totalCalories += workout.caloriesBurned;
	}
	
	display.textContent = "Total calories burned: " + totalCalories + " calories";
}

function highestReps(workouts) {
	let highestWorkout = workouts[0];
	let highestReps = 0;
	let display = document.getElementById("highestReps");
	
	if (highestWorkout.sets > 0) {
		highestReps = (highestWorkout.sets * highestWorkout.reps);
	} else {
		highestReps = highestWorkout.reps;
	}
	
	for (let workout of workouts) {
		let totalReps = 0;
		if (workout.sets > 0) {
			totalReps = (workout.sets * workout.reps);
		} else {
			totalReps = workout.reps;
		}
		
		if (totalReps > highestReps) {
			highestWorkout = workout;
			highestReps = totalReps;
		} else if (totalReps === highestReps) {
			highestWorkout = workout;
			highestReps = totalReps;
		}
	}
	
	display.textContent = "Highest amount of reps performed in one workout: " + highestReps + " reps from the " + highestWorkout.type + " workout on " + highestWorkout.date;
}

function highestWeight(workouts) {
	let highestWorkout = workouts[0];
	let highestWeight = workouts[0].bodyWeight;
	let display = document.getElementById("highestWeight");
	
	for (let workout of workouts) {
		let weight = workout.bodyWeight;
		
		if (weight > highestWeight && weight !== null) {
			highestWorkout = workout;
			highestWeight = weight;
		} else if (weight === highestWeight && weight !== null) {
			highestWorkout = workout;
			highestWeight = weight;
		}
	}
	
	display.textContent = "Your top weight: " + highestWeight + " lbs on " + highestWorkout.date;
}

function lowestWeight(workouts) {
	let lowestWorkout = workouts[0];
	let lowestWeight = workouts[0].bodyWeight;
	let display = document.getElementById("lowestWeight");
	
	for (let workout of workouts) {
		let weight = workout.bodyWeight;
		
		if (weight < lowestWeight && weight !== null) {
			lowestWorkout = workout;
			lowestWeight = weight;
		} else if (weight === lowestWeight && weight !== null) {
			lowestWorkout = workout;
			lowestWeight = weight;
		}
	}
	
	display.textContent = "Your lowest weight: " + lowestWeight + " lbs on " + lowestWorkout.date;
}

function createForm(e) {
	let form = e.target.parentElement;
	let workout = {};
	workout.date = form.date.value;
	workout.type = form.type.value;
	workout.duration = form.duration.value;
	workout.sets = form.sets.value;
	workout.reps = form.reps.value;
	workout.caloriesBurned = form.caloriesBurned.value;
	workout.bodyWeight = form.bodyWeight.value;
	workout.details = form.details.value;
	
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "api/workouts");
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201 || xhr.status === 200) {
				let newWorkout = JSON.parse(xhr.responseText);
				loadAll();
				aggregateData();
			} else {
				console.log("Workout not found");
			}
		}
	}

	xhr.send(JSON.stringify(workout));
	
}

function displayWorkout(workout) {
	let displayDiv = document.getElementById("displayDiv");
	let existing = document.getElementById("display");
	
	if (existing !== null) {
		existing.remove();
	}
	
	let ul = document.createElement("ul");
	ul.id = "display";
	
	for (let att in workout) {
		let li = document.createElement("li");
		li.textContent = att + ": " + workout[att];
		ul.appendChild(li);
	}
	let li = document.createElement("li");
	let update = document.createElement("button");
	update.name = "update";
	update.textContent = "Update";
	let li2 = document.createElement("li");
	let remove = document.createElement("button");
	remove.name = "remove";
	remove.textContent = "Remove";
	li.appendChild(update);
	update.addEventListener("click", function(){
		updateWorkoutForm(workout)
	});
	li2.appendChild(remove);
	remove.addEventListener("click", function(){
		removeWorkout(workout.id);
	});
	ul.appendChild(li);
	ul.appendChild(li2);
	displayDiv.appendChild(ul);
}

function displayWorkouts(workouts) {
	let existing = document.getElementById("workoutTable");
	if (existing !== null) {
		existing.remove();
	}
	
	let table = document.createElement("table");
	table.id = "workoutTable";
	let thead = document.createElement("thead");
	let trow = document.createElement("tr");
	let tbody = document.createElement("tbody");
	let first = workouts[0];
	
	for (let i in first) {
		let th = document.createElement("th");
		th.textContent = i;
		trow.appendChild(th);
	}
	
	for (let data of workouts) {
		let tr = document.createElement("tr");
		for (let i in data) {
			let td = document.createElement("td");
			td.textContent = data[i];
			tr.appendChild(td);
		}
		tr.addEventListener("click", function() {
			console.log("Clicked");
			displayWorkout(data);
		})
		tbody.appendChild(tr);
	}
	
	thead.appendChild(trow);
	table.appendChild(thead);
	table.appendChild(tbody);
	document.body.appendChild(table);
}

function updateWorkoutForm(workout) {
	let updateDiv = document.getElementById("updateDiv");
	let form = document.createForm.cloneNode(true);
	form.id = "update";
	form.date.value = workout.date;
	form.type.value = workout.type;
	form.duration.value = workout.duration;
	form.sets.value = workout.sets;
	form.reps.value = workout.reps;
	form.caloriesBurned.value = workout.caloriesBurned;
	form.bodyWeight.value = workout.bodyWeight;
	form.details.value = workout.details;
	updateDiv.appendChild(form);
	form.submit.addEventListener("click", function(){
		updateWorkout(form,workout);
	});
}

function updateWorkout(form, workout) {
	workout.date = form.date.value;
	workout.type = form.type.value;
	workout.duration = form.duration.value;
	workout.sets = form.sets.value;
	workout.reps = form.reps.value;
	workout.caloriesBurned = form.caloriesBurned.value;
	workout.bodyWeight = form.bodyWeight.value;
	workout.details = form.details.value;
	let xhr = new XMLHttpRequest();
	xhr.open("PUT", "api/workouts/"+workout.id);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201 || xhr.status === 200) {
				let newWorkout = JSON.parse(xhr.responseText);
				displayWorkout(newWorkout);
			} else {
				console.log("Workout not found");
			}
		}
	}

	xhr.send(JSON.stringify(workout));
}

function removeWorkout(id) {
	let xhr = new XMLHttpRequest();
	xhr.open("DELETE", "api/workouts/"+id);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201 || xhr.status === 200) {
				let display = document.getElementById("display");
				display.remove();
				let update = document.getElementById("update");
				if (update !== null) {
					update.remove();
				}
				loadAll();
				aggregateData();
			} else {
				console.log("Workout not deleted");
			}
		}
	}

	xhr.send();
	
}