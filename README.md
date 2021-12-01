# RepoProvas 

App built with Express and Typescript (using Jest and Supertest for integration tests and TypeORM for database managemente) to song recommendation system.


To run the project, after cloning the repository:

## Clone the .env.example and write your database vars
`cp .env.example .env`\

## Create the database repoprovas (you could also create it manually)
`./create-database`


## Create tables (Running migrations)
`npm run build`
`npm run typeorm migration:run`

## Testing

`npm run test`

## Starting the Server

`npm run start`