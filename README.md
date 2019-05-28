# Welcome to HomeBase
Created By: Reed Turgeon <br>
Lambda WebPT4

# WHY
- Project Goals: <br>
    - Demonstrate my capabilities as a full stack developer <br>
    - Learn good documentation methods / techniques <br>
    - Document the evolution of the project from end to end <br>

<br>

# Development Progress
Current Master Version = **V2** <br>
*Click The Version Title To See More Details*


Version | [V0](readMe_files/docs/V0.md) | [V1](readMe_files/docs/V1.md) | [V1.1](readMe_files/docs/V1_1.md) | V2 | [V2.1](readMe_files/docs/V2_1.md) | [V2.2](readMe_files/docs/V2_2.md)
--- | --- | --- | --- | --- | --- | ---
Date Started  | 5/26/19 | 5/26/19 | 5/26/19 | - - | 5/27/19 | 5/27/19
Date Completed  | 5/26/19 | 5/26/19 | 5/27/19 | - - | 5/27/19 | N.A.

# FRONT END
- Main <br>
[React](https://reactjs.org/) - UI Framework <br>
[Redux](https://redux.js.org/) - UI Data Storage <br>

- Styling <br>
[Styled Components](https://www.styled-components.com/) - React Component Styling 

### FE Design Links
[Current DESKTOP WireFrame - https://www.figma.com](https://www.figma.com/file/VzYaSTnsQxXCjXJ0VlFm14Kl/Home-Plate?node-id=0%3A1) <br>

 - [FE Design_0](readMe_files/imgs/HomeBase_Desktop_Design0.png)
 - [FE Design_1](readMe_files/imgs/HomeBase_Desktop_Design1.png)

 - [*Current* -> FE Design_V2.2](readMe_files/imgs/HomeBase_Desktop_V2.2_5-27-19.png)


# BACK END
- Main <br>
[SQLite](https://www.sqlite.org/index.html) - Database Engine <br>
[Knex](https://knexjs.org/) - SQL Query Builder <br>
[Express](https://knexjs.org/) - Node.js Web Application Framework <br>
[Helmet](https://helmetjs.github.io/) - Protects HTTP Headers <br>

- Dev Dependencies <br>
[Nodemon](https://nodemon.io/) - Server Restart onSave() <br>

### BE Design Links
[Current WireFrame - https://dbdiagram.io](https://dbdiagram.io/d/5ceb10e51f6a891a6a65767e) <br>
- [BE Design_0](readMe_files/imgs/HomeBase_DB_Design0.png)
- [BE Design_1](readMe_files/imgs/homeBase_DB_V1.1_Design_1.png)

### BE CRUD
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


















