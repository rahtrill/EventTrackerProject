# Workout Event Tracker Project

# Description

The purpose of this project is to properly map CRUD operations for logging workout events.

If a user has a workout and wants to properly document the workout information and their progress, they can use this application to do so. They can create, update, and remove their workout information. A user can also search for their workout information by the type of workout that was performed, and they can search by the date the workout occurred.

When a user loads into the web page, they are first met with a list of their previous workouts, and options to view their statistics or adding another workout. These options are also included in the navigation bar.

If a user clicks on any of the workouts in the list, it will display that workout on a new unordered list item. There are two options in that list, update and remove. If a user clicks update, an auto-populated update form will appear and will update the workout when the user hits submit. If they click remove, it will remove that workout.

Every CRUD function performed on the front end of this application automatically refreshes the list of workouts and aggregated data so it is accurate to the user's recent CRUD functions without refreshing the page.

There is a statistics page that displays the user's overall statistics in relation to their previous workouts. This page displays:

- Their highest recorded body weight.
- Their lowest recorded body weight.
- Their highest recorded calories burned.
- Their lowest recorded calories burned.
- Their highest recorded reps performed in one workout (including sets).
- Their lowest recorded reps performed in one workout (including sets).

A user can calculate the amount of calories burned using the "Calorie Calculator" page. This page takes the duration of their workout, their body weight, and what kind of activity they were performing. It will then accurately calculate the amount of calories burned. If a user doesn't know how many calories they burned and want to log that in their workout, they can use this calculator.

Here is a table that demonstrates all of the mapping that occurs in this project so far.

| HTTP Verb | URI                  | Request Body | Response Body | Purpose |
|-----------|----------------------|--------------|---------------|---------|
| GET       | `/api/workouts`      |              | Collection of representations of all _workout_ resources | **List** or **collection** endpoint |
| GET       | `/api/workouts/1`   |              | Representation of _workout_ `1` | **Retrieve** endpoint |
| POST      | `/api/workouts`      | Representation of a new _workout_ resource | Description of the result of the operation | **Create** endpoint |
| PUT       | `/api/workouts/1`   | Representation of a new version of _workout_ `1` | | **Replace** endpoint |
| DELETE    | `/api/workouts/1`   |              | | **Delete** route |
| GET       | `/api/workouts/search/date/2022-05-07`   |              | Collection of representations of all _workout_ resources by date '2022-05-07' | **List** or **collection** endpoint |
| GET       | `/api/workouts/search/type/cardio`   |              | Collection of representations of all _workout_ resources by type 'Cardio' | **List** or **collection** endpoint |

# Lessons Learned

It was a bit challenging to come up with all of the possible URIs that could occur in the application once a front-end is implemented. However, after planning out and explaining the purpose of the mappings in English to myself, it became very clear that finding certain workouts should occur with different data to search with.

A user might want to see all of their workouts on a particular day, so they should be able to search by date. A user might want to see all of the workouts they performed of the same type, so they should be able to search by type.

Performing CRUD operations with JavaScript was a bit challenging using the event listeners. I learned that directly referring to a different function that is not an expression within an addEventListener is required for event listeners that are created within another event listener. Multiple times throughout the program, the event listeners would execute unprompted. The fix to this is to use an anonymous function and then refer to another function within that anonymous function.

The syntax for this:

```
form.submit.addEventListener("click", function(){
		updateWorkout(form,workout);
	});
```

# Technologies Used

These are all of the necessary technologies needed to make this program run:

- RESTful API
- Spring Boot
- Postman
- Gradle
- JUnit 5
- JavaScript
- Java
- HTML
- JSON
- XML
- Angular
- TypeScript
- Bootstrap
- HTTP

# What was the most difficult part of this project?

The most difficult part of this project was creating the specific mappings for each of the functions I needed for this project.

The use of services and repositories in this project were fairly easy to understand, the main REST Controller methods were hard to come up with at times, but I was able to come up with the needed mappings eventually.

I also found making CRUD functions change live to the user on their webpage pretty difficult at first. It quickly snowballed into needing to call functions during each CRUD operation, but it cleared up fairly quickly after making the functions independent of the functions that previously called them when the webpage loaded.
