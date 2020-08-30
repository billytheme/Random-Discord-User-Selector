import * as discord from "discord.js"
import * as dotenv from "dotenv";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

//Generic command to initialise the dotenv library
dotenv.config();

//Initialise the client
export let client: discord.Client = new discord.Client();

//Connect the application to discord
client.login(process.env.CLIENT_SECRET_KEY);

client.on("message", function (message) {
    if (message.content.split(' ')[0] === '!random') {
        let channelMembers = (<discord.TextChannel>(message.channel)).members
        let randomlyChosenUsers = channelMembers.random(Number(message.content.split(' ')[1]))
        
        for(let user of randomlyChosenUsers){
            message.channel.send("<@" + user.id + ">")
        }
    }
})