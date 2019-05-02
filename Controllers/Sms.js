const db = require("../models");
const accountSid = 'ACf5595963252391685c0244f196d6ce66';
const authToken = 'cb12aee87beb38589c3a18c971d81b0c';
const client = require("twilio")(accountSid, authToken);
module.exports = {
  sendText: function(req, res) {
    if (req.body) {
      let firstname = req.body.firstname;
      let lastname = req.body.lastname;
      let phone = req.body.phone;
      let agentid = req.body.agentid;
      let message = req.body.message;
      console.log(firstname, lastname, `+1${phone}`, agentid, message);
      client.messages.create({
        body: message,
        from: "+14803515517",
        to: `+1${phone}`
      }),
        (err, message) => {
          console.log(message.sid);
        };
    }
  },
  autoSend: function(req, res) {
    const twiml = new MessagingResponse();

    twiml.message("The Robots are coming! Head for the hills!");

    res.writeHead(200, { "Content-Type": "text/xml" });
    res.end(twiml.toString());
  }
};
