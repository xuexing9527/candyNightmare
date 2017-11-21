var bdb = require("berkeleydb");
var db = new bdb.Db(); // create a new Db object
dbenv.open("testOne.db");

var key = "foo";
var val = "bar";

// data access
db.put(key, val); // put
var out1 = db.get(key) // get
db.del(key); // del
var out2 = db.get(key); // get deleted key

assert(out1.toString() === val);
assert(out2.toString() === "");

// delete all keys
db.truncate();

db.close()
