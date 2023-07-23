# VaccApp

## Welcome to the VaccApp institutional API

Esta API hace las veces de servidor institucional para recuperar los datos oficiales sobre vacunación y centros de salud.

This API acts as an institutional server to retrieve official vaccination and health center data.

## app access

[Try VaccApp!](https://vaccapp.netlify.app/)

## Description

VaccApp es una herramienta online que permite sustituir la clásica cartilla de vacunación por una moderna app que permite llevar un registro de las vacunas que se han aplicado a cada persona y las citas de vacunación, además de poder consultar información sobre las vacunas y sus enfermedades asociadas. Está principalmente enfocada para que los padres puedan llevar un control de las vacunas que se les han aplicado a sus hijos, así como de las citas de vacunación, pero también puede ser utilizado por cualquier persona que quiera llevar un registro de sus vacunas.

VaccApp is an online tool that allows you to replace the classic vaccination card with a modern app that allows you to keep a record of the vaccines that have been applied to each person and vaccination appointments, as well as being able to consult information about vaccines and their associated diseases. It is mainly designed for parents who want to keep track of the vaccines that have been applied to their children, as well as vaccination appointments, but it can also be used by anyone who wants to keep a record of their vaccines.

## Built With

- Javascript

- npm / MongoDB / Express / Node.js

- axios

## API routes

|     **Route**    | **HTTP Verb** |                     **Description**                    | **Request - body** |
|------------------|---------------|--------------------------------------------------------|--------------------|
| /centers         | GET           | Get all the health centers                             |                    |
| /vaccines        | GET           | Get all the vaccines information                       |                    |
| /vaccines/:vaccineId | GET           | Get a single vaccine information                       | req.params.vaccineId |
| /vaccines        | POST          | Create a new vaccine                                   | {vaccineName, description, vaccinationAge} |
| /citizen        | GET           | Get all the citizens                                   |                    |
| /citizen       | POST          | Create a new citizen                                   | {childName, vaccines, healthcard} |
| /citizen/:childId       | GET           | Get a single citizen information                       | req.params.childId |
| /:healthcard       | GET           | Get a single citizen information                       | req.params.healthcard |

## Models

### Vaccine model

```javascript
{
    vaccineName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    vaccinationAge: {
        type: Number,
        required: true
    }
}
```

### Citizen model

```javascript
{
    childName: {
        type: String,
        required: true,
    },
    vaccines: {
        type: Array,
    },
    healthcard: {
        type: String,
        required: true,
    }
}
```

### Calendar model

```javascript
{
    calendar: {
        type: Array,
        required: true,
    }
}
```

## Backlog

- Any

## Links

### Trello

[Link to your trello board](https://trello.com/b/s2kDxZgh/vaccapp-backlog)

### Git

[Server repository Link](https://github.com/VaccApp/Server)

[Client repository Link](https://github.com/VaccApp/Client)

[Deploy Link](https://api-madrid.fly.dev/)

### Slides

[Slides Link](https://docs.google.com)
