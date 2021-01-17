"use strict";

var mongo = require('./mongo/mongodb');

module.exports = {
  Mutation: {
    addUser: function addUser(root, args, context, info) {
      var res;
      return regeneratorRuntime.async(function addUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              res = mongo("Apollo", "Users", {
                args: args
              });
              _context.next = 3;
              return regeneratorRuntime.awrap(res.then(function (x) {
                return {
                  response: x
                };
              }));

            case 3:
              return _context.abrupt("return", _context.sent);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  },
  Query: {
    ciao: function ciao() {
      return [{
        "id": 1,
        "nome": "Daniel",
        "cognome": "piga"
      }, {
        "id": 2,
        "nome": "jack",
        "cognome": "boo"
      }];
    }
  }
};