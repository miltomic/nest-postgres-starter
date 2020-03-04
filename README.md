## Description

Dockerized NEST - TypeORM REST API service using postgres.

## Installation

```bash
$ npm install
```

## Before running the app

**Start the development environment:**
```bash
$ docker-compose -f docker/docker-compose.yml up
```
that includes Postgres database.

NOTE: *This is for development purposes only.*

**Run database migrations**
```bash
$ npm run migration:run
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

Sample [Dockerfile](docker/Dockerfile) is provided. If you want to build and run it just execute:
```bash
$ docker-compose -f docker/docker-compose.yml -f docker/docker-compose.nestjs.yml up
```
Above command will start up the required environment, run the migration command, and spin up the app.

NOTE: *This approach is not suitable for microservices* which require migration to be handled independently.

## Stay in touch

- Author - [Milan Tomić](https://www.linkedin.com/in/milantomic/)

## License

  This project is licensed under the GNU General Public License - see the [LICENSE.md](LICENSE.md) file for details

