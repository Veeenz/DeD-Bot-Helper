
# D&D Bot Helper

First bot wrote in Node.js and Typescript, just for fun and trying something new like Discord Bots.
The bot has, for the moment, only `!roll <dice>` which gives a random dice number to user.
Some commands will be implemented. 

`Available Dice: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20' | 'd100'`
### Running your own instance
First of all you need to get your App token from https://discordapp.com/developers/. Rename de file config.json.example to config.json and paste it.
After that, you can launch it with the following commands:
`npm install`
`npm run tsc`
And run the transpiled file, inside the `build/` directory with 
`node build/main.js`

Thanks to https://discord.js.org for the good work with the library!
 
