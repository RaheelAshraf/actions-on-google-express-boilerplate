const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const { dialogflow } = require("actions-on-google");

const app = dialogflow({
    debug: false
});

const expressApp = express().use(bodyParser.json());

expressApp.post("/fulfillment", app);

app.intent("Default Welcome Intent", conv => {
    conv.ask(`Welcome Message from Webhook`);
});

app.intent("Default Fallback Intent", conv => {
    conv.ask(`I didn 't understand!`);
    conv.ask(`I'm sorry, can you say that again?`);
});

expressApp.listen(port, (req, res) => {
    console.log(`app started on port: ${port}`);
});