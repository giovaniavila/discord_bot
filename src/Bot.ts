import { Client, ClientOptions } from "discord.js";
import ready from './listeners/ready'
import interactionCreate from "./listeners/interactionCreate";

const token = 'MTE0ODk3NjI5NTA3NDU5NDkwOA.GozUdJ.LB07rv5BbfFBqLZhsNTnJU8aV3skyzcxF7wDmE'

console.log('bot is starting...')

const client = new Client({
    intents: []
})

ready(client)
client.login(token)