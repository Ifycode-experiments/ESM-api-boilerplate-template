# node-mongo-starter-kit
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
* For anyone who will be writing, mentoring and/or reviewing code, in any or both of these repos: [node-mongo-cli repo](https://github.com/code-collabo/node-mongo-cli) and [node-mongo-starter-kit repo](https://github.com/code-collabo/node-mongo-starter-kit), the [first task assignment](https://github.com/code-collabo/node-mongo-cli/issues/1#issuecomment-785559734) needs to be completed & submitted first.
* Also, please do not make changes directly in the `main` or `develop` branches. See [development environment & git workflow](https://github.com/code-collabo/node-mongo-docs/issues/2) on how to make changes to the code base and submit pull request.
* Please leave a comment under the issue you wish to work on and wait for approval before you send in a pull request. See [contribution & community guidelines](https://github.com/code-collabo/node-mongo-docs/issues/3) for complete details.

Feel free to ask questions concerning anything not clear on this topic if you have any. Just ask your question(s) in the comment under the issue you wish to work on and you'll be attended to. It is better to ask if you're not sure, than for your pull request to be discarded.

## Related repositories
This is the repository for the files and folders that the node-mongo-cli will set up for you, made by Code Collabo community. Other related repos to the cli project:
* [node-mongo-cli](https://github.com/code-collabo/node-mongo-cli).
* [node-mongo-docs](https://github.com/code-collabo/node-mongo-docs).


## Technologies

[<img alt="javascript" height="25px" src="https://www.freepnglogos.com/uploads/javascript/javascript-online-logo-for-website-0.png" />](https://github.com/code-collabo/node-mongo-cli)
[<img alt="node js" height="25px" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" />](https://github.com/code-collabo/node-mongo-cli)
[<img alt="mongoDB" height="25px" src="https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png" />](https://github.com/code-collabo/node-mongo-cli)

