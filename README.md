<h1 align="center">
    <!-- Logo da Aplicação -->
    <p>Crawler Node.js</p>
</h1>

<h3 align="center">
    <!-- Descrição do projeto  -->
    Crawler to search for a list of products in the Mercado Livre.
</h3>

</br>

<div align="center">

[![](https://img.shields.io/badge/made%20by-ThiagoGualberto-%237159C1)](https://www.linkedin.com/in/thiagogualberto84/)
[![](https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS)](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.14.1)
![](https://img.shields.io/github/repo-size/thiagogualberto/crawler-nodejs.svg)
[![](https://img.shields.io/github/last-commit/thiagogualberto/crawler-nodejs.svg?color=red)](https://github.com/thiagogualberto/crawler-nodejs/commits/master)
[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/thiagogualberto/crawler-nodejs/blob/master/LICENSE.md)
</br></br>

<p id="insomniaButton" align="center">
    <a href="" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

<p align="center">
  <a href="#man_technologist-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#clipboard-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#thinking-contribution">Contribution</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pushpin-support">Support</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licence">Licence</a>
</p>
</div>
</br>

# :man_technologist: Project

This application is a practical exercise in creating a crawler with Node.js + Typescript. For this, Express (Node.js web application framework) was used. In implementing the crawler, one of the most fundamental principles of software development was used: SoC (Separation of Concerns).</br></br>

# :rocket: Getting Started

## :gear: Back-end

To clone and run this api, you'll need Git, Node.js v12.14 or higher + Yarn v1.21 or higher installed on your computer. </br>

From your command line:

```bash
# Clone this repo to your local machine using
$ git clone https://github.com/thiagogualberto/crawler-nodejs.git

# From the project root, enter the backend (gobarber-api) folder
$ cd crawler-nodejs

# Install the dependencies
$ yarn

# Everything ready to start the server
$ yarn dev:server
```

You can test this API in two ways:</br>
* Import the `Insomnia_GoBarber.json` file into Insomnia or,
* Click the button [Run in Insomnia](#insomniaButton)
</br></br>

# :clipboard: Features

## Funcionalities
* User authentication with JWT
* User registration (Create, Read, Update and Delete)
* Sending files (User avatar)
* Schedules
  * List of service providers
  * Service scheduling
  * Validation of appointments
  * Listing user schedules
  * Pagination
  * Listing provider's agenda
* Sending notifications
  * Notifying new appointments
  * Listing user notifications
  * Mark notifications as read
* Cancellation and sending email
  * Cancellation of scheduling
  * Listing available times

## Build with (Technologies)

This project was developed with the following technologies:
* [Bcrypt](https://www.npmjs.com/package/bcrypt) - Generation of User Password Hash
* [Bee Queue](https://github.com/bee-queue/bee-queue) - Redis-backed job queue for Node.js.
* [date-fns](https://date-fns.org/) - JavaScript date utility library
* [Docker](https://www.docker.com/docker-community) - Container
* [DotEnv](https://www.npmjs.com/package/dotenv) - Loads environment variables
* [EditorConfig](https://editorconfig.org/) - Setting up the development environment
* [ESLint](https://eslint.org/) - JS Linter and code style
* [Express](https://expressjs.com/pt-br/) - Router of the Application
* [JWT](https://jwt.io/) - Authentication Json Web Token
* [MongoDB](https://www.mongodb.com/) - Database
* [Mongoose](https://mongoosejs.com/) - Object Modeling + DB Connector
* [Multer](https://github.com/expressjs/multer) - File Upload
* [Nodemailer](https://nodemailer.com/about/) - Used to send emails
* [Nodemon](https://nodemon.io/) - Process Manager used in the development
* [Node.js](https://nodejs.org/en/) - Build the server
* [PostgreSQL](https://www.postgresql.org/) - Database
* [Prettier](https://prettier.io/) - Code Formatter
* [Redis](https://redis.io/) - Database
* [Sequelize](https://sequelize.org/) - Promise-based Node.js ORM for Postgres
* [Sucrase](https://github.com/alangpierce/sucrase) - Setting up the development environment
* [VS Code](https://code.visualstudio.com/) with [Sucrase](https://github.com/alangpierce/sucrase) + [Nodemon](https://nodemon.io/) + [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) + [EditorConfig](https://editorconfig.org/) + [Sequelize](https://sequelize.org/)
* [Youch](https://www.npmjs.com/package/youch) - Pretty error reporting for Node.js
* [Yup](https://www.npmjs.com/package/yup) - Validate the application's JSON fields.
</br></br>

# :thinking: Contribution

I'll be happy if you could provide me any feedback about the project, code, structure or anything that you can report that could make me a better developer!

```bash
#Fork this repo!
$ gh repo fork thiagogualberto/NOME_DO_REPO

#Clone this repo to your local machine using
$ git clone https://github.com/thiagogualberto/crawler-nodejs.git

# Create your feature branch using
$ git checkout -b my-feature

# Commit your changes using
$ git commit -m 'feat: My new feature'

# Push to the branch using
$ git push origin my-feature

# Create a new pull request

After your Pull Request is merged, can you delete your feature branch.
```

You can send how many PR's do you want, I'll be glad to analyse and accept them! And if you have any question about the project contact me by email or linkedin below and let's have a good chat.
</br></br>

# :pushpin: Support
My name is Thiago de Medeiros Gualberto and my contacts are:

* Email: <thiago.gou@gmail.com>
* Linkedin at [Thiago Medeiros](https://www.linkedin.com/in/thiagogualberto84/)

Connect with me at LinkedIn.

Thank you!
</br></br>

# :memo: Licence

[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/thiagogualberto/crawler-nodejs/blob/master/LICENSE.md)

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details
</br></br>

---
Made with ♥ Enjoy it!
