const bcrypt = require('bcrypt');


bcrypt.compare(password, hash, (err, res) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(res) //true or false
  })