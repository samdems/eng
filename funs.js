const pc = require('./obj/pc.js');
module.exports = {
  pcLoad:function (parts) {
    var name = parts[0]
    console.log(pc.get(name));
    return [{
            	"action": "replace",
            	"container": "pc_bob",
            	"content":template(pc.get(name))
            }];
  }
};
