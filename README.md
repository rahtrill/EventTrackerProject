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
| GET       | `/api/workouts/search/date/2022-05-07`   |              | Collection of representations of all _workout_ resources by date '2022-05-07' | **List** or **collection** endpoint |
| GET       | `/api/workouts/search/type/cardio`   |              | Collection of representations of all _workout_ resources by type 'Cardio' | **List** or **collection** endpoint |

# Lessons Learned

It was a bit challenging to come up with all of the possible URIs that could occur in the application once a front-end is implemented. However, after planning out and explaining the purpose of the mappings in English to myself, it became very clear that finding certain workouts should occur with different data to search with.

A user might want to see all of their workouts on a particular day, so they should be able to search by date. A user might want to see all of the workouts they performed of the same type, so they should be able to search by type.

# Technologies Used

These are all of the necessary technologies needed to make this program run:

- RESTful API
- Spring Boot
- Postman
- Gradle
- JUnit 5

# What was the most difficult part of this project?s
