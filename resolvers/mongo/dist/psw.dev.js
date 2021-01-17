"use strict";

var bcrypt = require('bcrypt');

var rounds = 9; // module.exports =  bcrypt.hash(psw, rounds, async (err, hash) => {
//         if (err) {
//             console.error(err)
//             return "error"
//         }
//         psw.password = hash
//         console.log(psw, "hash")
//         return psw
//     })