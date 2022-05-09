# Workout Event Tracker Project

# Description

This purpose of this project is to properly map CRUD operations for logging workout events.

If a user has a workout and wants to properly document the workout information and their progress, they can use this application to do so. They can create, update, and remove their workout information. A user can also search for their workout information by the type of workout that was performed, and they can search by the date the workout occurred.

Here is a table that demonstrates all of the mapping that occurs in this project so far.

| HTTP Verb | URI                  | Request Body | Response Body | Purpose |
|-----------|----------------------|--------------|---------------|---------|
| GET       | `/api/workouts`      |              | Collection of representations of all _workout_ resources | **List** or **collection** endpoint |
| GET       | `/api/workouts/1`   |              | Representation of _workout_ `1` | **Retrieve** endpoint |
| POST      | `/api/workouts`      | Representation of a new _workout_ resource | Description of the result of the operation | **Create** endpoint |
| PUT       | `/api/workouts/1`   | Representation of a new version of _workout_ `1` | | **Replace** endpoint |
| DELETE    | `/api/workouts/1`   |              | | **Delete** route |
| GET       | `/api/workouts/search/date/2022-05-07`   |              | Collection of representations of all _workout_ resources by date '2022-05-07' | **Retrieve** endpoint |
| GET       | `/api/workouts/search/type/cardio`   |              | Collection of representations of all _workout_ resources by type 'Cardio' | **Retrieve** endpoint |

# Lessons Learned

# Technologies Used

# What was the most difficult part of this project?s
