# CRUD ENDPOINTS
EXPRESS ROUTES:
- /api/users
    - GET / 
    - GET /:id 
    - POST /
        ```
        Accepted Shape
        {
            "firstName": "string", 
            "lastName": "string",
            "type": "string",
            "phone": "string",
            "address": "string"
        }
        ```
    - PUT /:id 
        ```
        Accepted SHape
        {
            "firstName": "string",
            "lastName": "string",
            "type": "string",
            "phone": "string",
            "address": "string"
        }
        ```
    - Delete /:id 
- /api/projects
    - GET / 
    - GET /:id 
    - GET /user/:id 
    - POST /
        ```
        Accepted Shape
        {
            "projectDescription": "string",
            "projectTitle": "string",
            "dueDate": "string",
            "userID": integer
        }
        ```
    - PUT /:id 
        ```
        Accepted Shape
        {
            "projectDescription": "string",
            "projectTitle": "string",
            "dueDate": "string",
            "userID": integer
        }
        ```
    - Delete /:id 
- /api/objectives
    - GET / 
    - GET /:id 
    - GET /user/:id 
    - POST /
        ```
        Accepted Shape
        {
            "objectiveStatus": "string",
            "objectiveTitle": "string",
            "userID": integer
        }
        ```
    - PUT /:id 
        ```
        Accepted Shape
        {
            "objectiveID": integer,
            "objectiveStatus": "string",
            "objectiveTitle": "string",
            "userID": integer
        }
        ```
    - Delete /:id 
- /api/todos
    - GET / 
    - GET /:id 
    - GET /user/:id 
    - POST /
        ```
        Accepted Shape
        {
            "todoDescription": "NEW DESCRIPTION",
            "todoTitle": "NEWLY ADDED",
            "date": "5/19/28",
            "userID": 1
        }
        ```
    - PUT /:id 
        ```
        Accepted Shape
        {
            "todoDescription": "EDIT",
            "todoTitle": "EDITED",
            "date": "5/19/28",
            "userID": 1
        }
        ```
    - Delete /:id 
- /api/tasks
    - GET / 
    - GET /:id 
    - GET /user/:id 
    - POST /
        ```
        Accepted Shape
        {
            "startTime": "string",
            "endTime": "string",
            "type": "string",
            "todoID": integer,
            "objectiveID": integer
        }
        ```
    - PUT /:id 
        ```
        Accepted Shape
        {
            "startTime": "string",
            "endTime": "string",
            "type": "string",
            "todoID": integer,
            "objectiveID": integer
        }
        ```
    - Delete /:id 