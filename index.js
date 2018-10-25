const express = require('express')
const app = express()
const port = 3000
var expressWs = require('express-ws')(app);
const funs = require('./funs.js');
require('./template.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.db')
global.db = low(adapter)

db.defaults({ pcs: []})
  .write()

app.use(express.static('public'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var aWss = expressWs.getWss('/websocket');

app.ws('/websocket', function(ws, req) {
  console.log('Socket Connected');

  ws.onmessage = function(msg) {
    aWss.clients.forEach(function (client) {
      var parts = msg.data.split('_')
      var fn = parts.shift()
      client.send(JSON.stringify(funs[fn](parts)));
    });
  };
});
