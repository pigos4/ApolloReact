"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["type Query{\n    ciao: [Ciao]\n}\ntype User {\nid: ID\nname: String\nusername: String\npassword: String\n}\ntype Ciao{\n    id:ID\n    nome:String,\n    cognome:String\n}\ntype Resp{\n    response:String\n}\n\ntype Mutation{addUser(name: String, username: String, password: String): Resp}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require('apollo-server'),
    gql = _require.gql;

var typeDefs = gql(_templateObject());
module.exports = typeDefs;