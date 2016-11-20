## Starter template for NODEJS

Starter template with login and registration.  
Bases on mongodb

## Requirements
* node v6 (https://nodejs.org)
* mongoDB v3.2 (https://www.mongodb.com/)

## Configuration

Configuration files are located under `config` dir.  
See Guild https://github.com/lorenwest/node-config/wiki/Configuration-Files

|Name|Description|
|----|-----------|
|`PORT`| The port to listen|
|`MONGODB_URL`| The mongodb url|
|`VERBOSE_LOGGING`| The flag if enable debug information|
|`SMTP_PORT`| the smtp port|
|`SMTP_USERNAME`|  the smtp username|
|`EMAIL_SENDER_ADDRESS`| the email sender|
|`RESET_PASSWORD_EXPIRATION`| the expiration for emails, use values like `1d`, `10h`|


## Install dependencies
`npm i`

## Running

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves the app in prod mode.|
|`dev`|Same as `npm start`, but enables nodemon for the server as well.|
|`oauth`| run app on port 5000 to get social access tokens|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|
