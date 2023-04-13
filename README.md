# What our backend can do

This is our backend, which is linked to Sky Fitness.
This backend is capable of CRUD operations.
See the endpoints below.

# Endpoints

For the users

```bash
# registration
http://localhost:3000/auth/register

# list the users
http://localhost:3000/user/list

# find one by id
http://localhost:3000/user/search/:id

# update users by id
http://localhost:3000/user/update/:id

# delete user by id
http://localhost:3000/user/delete/:id
```

For the training plans

```bash
# create training plans
http://localhost:3000/edzesterv/createEdzester

# list training plans
http://localhost:3000/edzesterv/list

# search one training plan by id
http://localhost:3000/edzesterv/search/:id

# update training plan by id
http://localhost:3000/edzesterv/update/:id

# delete training plan by id
http://localhost:3000/edzesterv/delete/:id
```

For the training days

```bash
# create training day
http://localhost:3000/edzesnapok/edzesnapcreate

# list training days
http://localhost:3000/edzesnapok/list

# search training day
http://localhost:3000/edzesnapok/search/:id

# update training day
http://localhost:3000/edzesnapok/update/:id

# delete training day
http://localhost:3000/edzesnapok/delete/:id
```

For the exercises
```bash
# create exercises
http://localhost:3000/gyakorlatok/create

# list exercises
http://localhost:3000/gyakorlatok/list

# find exercise
http://localhost:3000/gyakorlatok/search/:id

# update exercises
http://localhost:3000/gyakorlatok/update/:id

# delete exercises
http://localhost:3000/gyakorlatok/delete/:id
```

For the muscle groups
```bash

# create muscle groups
http://localhost:3000/izomcsoportok/create

# list muscle groups
http://localhost:3000/izomcsoportok/list

# find muscle group
http://localhost:3000/izomcsoportok/search/:id

# update muscle groups
http://localhost:3000/izomcsoportok/update/:id

# delete muscle groups
http://localhost:3000/izomcsoportok/delete/:id

```





<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
