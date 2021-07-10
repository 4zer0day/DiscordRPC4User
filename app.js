//LuneChain x ikmxleo x icyurei
//Hiding API Keys
require('dotenv').config();

//RPC for User
const DiscordRPC = require('discord-rpc'); // Requiring the discord-rpc package.
const xo = new DiscordRPC.Client({ transport: 'ipc' }); // Creating a client variable with is our rpc client.


(async () => {
    xo.on('ready', async () => { // Calling the ready event.
        await xo.setActivity({ // Setting the Rich Presence Activity based on what is passed in here.
            buttons: [{ label: "LuneChain", url: "https://lunechain.com/" }],
            details: "Working on LCN ecosystem",
            largeImageKey: "rpcimage",
            largeImageText: "Hiro" //Image can be inserted at https://discord.com/developers/
        }).catch(err => console.log(err)); 

        console.log("Discord Rich Presence Activated");
    });

    await xo.login({ clientId: process.env.applicationID}).catch(console.error); // Logging into our application.
})();
