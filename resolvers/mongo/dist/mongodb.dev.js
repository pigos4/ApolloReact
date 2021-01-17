"use strict";

var MongoClient = require('mongodb').MongoClient;

var bcrypt = require('bcrypt'); //const pswbcrypt=require('./psw');


function mongodbRequest(nameColl, nameDb, inputInsert, findAll, deleteOne) {
  var uri, client, clients, db, col, psw, rounds, salt, hash, results, _results, _results2;

  return regeneratorRuntime.async(function mongodbRequest$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('weee');
          uri = "mongodb+srv://pigos4:DanielPiga123@mflix.hjuju.mongodb.net/mflix?retryWrites=true&w=majority";
          client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(client.connect());

        case 6:
          clients = _context.sent;
          db = clients.db(nameDb);
          _context.next = 10;
          return regeneratorRuntime.awrap(db.collection(nameColl));

        case 10:
          col = _context.sent;

          if (!(findAll === undefined)) {
            _context.next = 31;
            break;
          }

          console.log(inputInsert.args, "inputargs");
          psw = inputInsert.args.password;
          console.log(psw, "psw");
          rounds = 11;
          _context.next = 18;
          return regeneratorRuntime.awrap(bcrypt.genSalt(rounds));

        case 18:
          salt = _context.sent;
          console.log("Salt: ".concat(salt));
          _context.next = 22;
          return regeneratorRuntime.awrap(bcrypt.hash(psw, salt));

        case 22:
          hash = _context.sent;
          console.log("Hash: ".concat(hash));
          _context.next = 26;
          return regeneratorRuntime.awrap(col.insertOne({
            name: inputInsert.args.name,
            username: inputInsert.args.username,
            password: hash
          }));

        case 26:
          results = _context.sent;
          console.log(results.acknowledged, "results");
          return _context.abrupt("return", results.ops[0]._id ? "addedd" : "error");

        case 31:
          if (!(findAll === "yes")) {
            _context.next = 38;
            break;
          }

          _context.next = 34;
          return regeneratorRuntime.awrap(col.find({}).toArray());

        case 34:
          _results = _context.sent;
          return _context.abrupt("return", _results);

        case 38:
          if (!(deleteOne != undefined)) {
            _context.next = 43;
            break;
          }

          _context.next = 41;
          return regeneratorRuntime.awrap(col.deleteOne({
            _id: ObjectID(deleteOne)
          }));

        case 41:
          _results2 = _context.sent;
          return _context.abrupt("return", "Deleted");

        case 43:
          _context.next = 52;
          break;

        case 45:
          _context.prev = 45;
          _context.t0 = _context["catch"](3);

          if (!_context.t0) {
            _context.next = 51;
            break;
          }

          return _context.abrupt("return", _context.t0);

        case 51:
          console.log(_context.t0, "err");

        case 52:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 45]]);
}

module.exports = mongodbRequest; // const uri = "mongodb+srv://pigos4:DanielPiga123@mflix.hjuju.mongodb.net/mflix?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// module.exports= async function mongo(database, collect, insert, insertUser) {
//         client.connect(async (err) => {
//         const collection = await client.db(database).collection(collect);
//         if (insert === "yes") {
//             let res = await collection.insertOne({
//                 insertUser
//             });
//             console.log(res.ops)
// return"ciao"
//         };
//     });
// };
//mongo("a","b","yes",{"nome":"ciao"})