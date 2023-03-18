
const request = require("request");


export default (req, res) => {
 
  // not needed in NextJS v12+
  const body = req.body;

var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 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'
};

var json_input = {
  prompt: "Determine if the email is interested in a demo or not interested. \n\nemail:\nInterested to know what you can offer to an M&A brokerage.\n\nBest Regards,\nVlad Ilyusha\nFounder / Epoch Equity\n###\ninterested\n###\nHi Rohan –\n\n \n\nSure, I’d be happy to see a demo. I’m fairly open Mon, Tue, Wed. Let me know how to schedule some time.\n\n\nAngie North\n\nMarketing & Operations Manager\n\nTonka Bay Equity Partners LLC\n\n301 Carlson Parkway, Suite 325, Minnetonka, MN 55305\n\n(952) 345-2028 | anorth@tonkabayequity.com | tonkabayequity.com\n###\ninterested\n###\nHi Rohan,\n\nYou just reached out to one of my colleagues Alex Mason, and I’d be interested in seeing a demo.\n\nAlso, what is your website? I’m trying to go to http://trycheatlayer.com/ but it’s not working.\n\nThanks,\nShoma\n###\ninterested\n###\nHi Rohan- Thanks but not interested in these services right now\n###\nnot interested\n###\nHi Rohan,\n\n \n\nI don’t but thank you.\n\n \n\nWarm regards,\n\n \n\nRobert.\n###\nnot interested\n###\nHey Arun,\n\n \n\nI got your email from my colleague Carle. Would love to set up a time to learn more about how you’re automating deal sourcing. Copying Ali who can help us find a time.\n###\ninterested\n###\nHi Rohan,\n\n \n\nMy colleague Adam passed along your email. It would be great to connect and learn more about Cheat Layer – we would certainly like to take you up on your offer for free lead automations.\n\n \n\nLet me know if there’s a good time to connect.\n\n \n\nThanks,\n\nJohn\n###\ninterested\n###\nHi Rohan,\n\nI’d be interested in learning more. How is the week of the 21st?\n\n \n\nSincerely,\n\nDan\n###\ninterested\n###\nWe are not interested at this time, thank you.\n\n \n\nAdam\n###\n\nnot interested\n###\nHi Rohan,\n\n \n\nBrent forwarded me your message. Would you have some time to connect next week to discuss capabilities?\n\n \n\nBest,\n###\ninterested\n###\nHi Rohan,\n\n \n\nThanks for reaching out – I have cc’d my colleague James, who would be the right person for you to connect with. I’ll let you two coordinate directly to find time for a demo next week.\n\n \n\nBest,\n\n \n\nRachel\n###\ninterested\n###\nI’m not the right contact for this.\n\n \n\n-\n\nYan Yan\n###\n\nnot interested\n###\nUnsubscribe, please.\n\n \n\nKaylee\n###\n\nnot interested\n###\nno thx\n###\n" + body.input,
  temperature: 0,
  max_tokens: 230,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
  stop: ["###"],
};
var dataString = JSON.stringify(json_input);
  
var options = {
    url: 'https://api.openai.com/v1/engines/text-davinci-003/completions',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
res.send(body);
}

request(options, callback);

}
