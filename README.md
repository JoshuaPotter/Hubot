# Hubot

## Requirements
- Node
- Docker (optional for local testing)

## Config
Rename `config-sample.json` to `config.json`. Both `token` and `clientId` come from the Discord application. `storage` is for database connection information.

## Database
Connects to MySQL database using Sequelize ORM. Models are stored in `models/`.
To initialize the database, run `node db-init.js` once. This will also need to be run whenever models are edited or new models are added to ensure tables are added.

To reinitialize the database from the models, run `node db-init.js -f` to force the changes. This will delete all content in the database as well.

## Commands
Commands are stored in `commands/` directory. Each file represents a slash command, loaded programmatically from `index.js`. To deploy commands when installing the bot, run `node deploy-commands.js`. This must also be run whenever new commands are added to the bot. This does NOT need to be run when editing the commands

## Events
Events are stored in `events/` directory. Each file represents a particular event execution, loaded programmatically  from `index.js`.