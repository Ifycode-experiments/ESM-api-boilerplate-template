# node-mongo-starter-kit

This is the ***es6+ version*** of the [node-mongo-starter-kit](https://github.com/code-collabo/node-mongo-starter-kit). 

`import express from 'express';`



![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat) ![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg) ![GitHub issues](https://img.shields.io/github/issues/code-collabo/node-mongo-cli?color=red) ![GitHub pull requests](https://img.shields.io/github/issues-pr/code-collabo/node-mongo-starter-kit?color=goldenrod) 

<!--
![GitHub all releases](https://img.shields.io/github/downloads/code-collabo/node-mongo-starter-kit/total?color=green)
-->

The `node-mongo-starter-kit` helps to make mongoDB development in nodejs easier. Using the node-mongo-starter-kit has been made easier with the [node-mongo-cli](https://github.com/code-collabo/node-mongo-cli). While you can also choose to download/clone this starter kit directly from github, the cli let's you not only install the node-mongo-starter-kit, but also allows you to add new model & controller files with content using simple commands. Opt for the [cli](https://github.com/code-collabo/node-mongo-cli) for better experience.

## How to use node-mongo-starter-kit
Development environment has been set up already i.e. connection to server & db, eslint and babel transpiler. For use locally, you need to have `mongoDB` [installed](https://docs.mongodb.com/guides/server/install/) with database and collection created and mongoDB running. If you choose to use `mongoDB atlas` then you don't need to have mongoDB installed - just turn on wifi/data connection, [create database and connect to your cluster](https://docs.atlas.mongodb.com/getting-started/).

**Installation:**
* Install starter-kit through cli or download from github.
* Cd into the folder you installed it and run `npm install` to install dependencies.
* Run `npm start` or `npm start -s` to start the server and mongoDB connection.
* There are two options - `installed MongoDB` option and `MongoDB ATLAS` option. To setup successful connection for whichever option you wish to use for your project, follow the guide written in yellow, which comes up after `Server running at http://localhost:3000` and `Error in DB connection` message in the console.

**Customizing dev environment:**

Replace `insert-your-project-name` with your own project name in `srcServer > startMessage.js`.

## Contributing to the starter-kit
You can contribute as a `nodejs developer`, `mongoDB developer` and/or help with `documentation` & `research`. We are still working on documentation, but please go through these before you start contributing:
* Completing the [first task assignment](https://github.com/code-collabo/node-mongo-cli/issues/1#issuecomment-785559734) is compulsory, for issues with `cli-only` label or `starter-kit-only` label.
* Do not make changes directly in the `main` or `develop` branches. See [development environment & git workflow](https://github.com/code-collabo/node-mongo-docs/issues/2) on how to make changes to the code base and submit pull request.
* Do not submit a pull request for an issue you have not been assigned to. Leave a comment under the issue you wish to work on and wait for approval before you start working on the issue. See [contribution & community guidelines](https://github.com/code-collabo/node-mongo-docs/issues/3) for complete details.

Feel free to ask questions concerning anything not clear on this topic if you have any. Just [ask your question(s) in the comment here](https://github.com/code-collabo/node-mongo-cli/issues/29), or in the comment under the issue you wish to work on and you'll be attended to.

_Tag **@Ifycode** in the comment, otherwise she won't receive a notification and therefore may not know that you wrote._

[Report or find issues to work on here](https://github.com/code-collabo/node-mongo-cli/issues).

## Related repositories
List of all repos in the node-mongo-cli project by Code Collabo community:
* [node-mongo-cli](https://github.com/code-collabo/node-mongo-cli).
* [node-mongo-starter-kit](https://github.com/code-collabo/node-mongo-starter-kit).
* [node-mongo-starter-cjs](https://github.com/code-collabo/node-mongo-starter-cjs).
* [node-mongo-docs](https://github.com/code-collabo/node-mongo-docs).

## Project resources
A big thank you to the authors [@dkundel](https://github.com/dkundel) [@academind](https://github.com/academind) [@CodAffection](https://github.com/CodAffection) whose awesome YouTube videos and/or articles make up the **main** [resources](https://github.com/code-collabo/node-mongo-docs/issues/1) we're using to build this project. Also to [@coryhouse](https://github.com/coryhouse), author of building a javascript development environment course.

## Technologies

[<img alt="javascript" height="25px" src="https://www.freepnglogos.com/uploads/javascript/javascript-online-logo-for-website-0.png" />](https://github.com/code-collabo/node-mongo-cli)
[<img alt="node js" height="25px" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" />](https://github.com/code-collabo/node-mongo-cli)
[<img alt="mongoDB" height="25px" src="https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png" />](https://github.com/code-collabo/node-mongo-cli)

