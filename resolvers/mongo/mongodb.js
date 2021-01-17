const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcrypt');
//const pswbcrypt=require('./psw');
async function mongodbRequest(nameColl, nameDb, inputInsert, findAll, deleteOne) {
    console.log('weee')
    const uri = "mongodb+srv://pigos4:DanielPiga123@mflix.hjuju.mongodb.net/mflix?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    try {
        const clients = await client.connect();
        const db = clients.db(nameDb);
        const col = await db.collection(nameColl);


        if (findAll === undefined) {
            console.log(inputInsert.args, "inputargs")
            let psw = inputInsert.args.password;

            console.log(psw, "psw")
            const rounds = 11
            let salt = await bcrypt.genSalt(rounds)
            console.log(`Salt: ${salt}`);
            const hash = await bcrypt.hash(psw, salt);
            console.log(`Hash: ${hash}`);
            const results = await col.insertOne({
                name: inputInsert.args.name,
                username: inputInsert.args.username,
                password: hash
            })

            console.log(results.acknowledged,"results")
            return(results.ops[0]._id?"addedd":"error")
            
           

        } else if (findAll === "yes") {
            const results = await col.find({}).toArray()
            //console.log(results, "results find all")
            return results


        } else if (deleteOne != undefined) {
            //console.log(deleteOne,"deleteone")
            const results = await col.deleteOne({
                _id: ObjectID(deleteOne)
            });
            //console.log(results)
            return "Deleted"

        }
    } catch (err) {
        if (err) {
            return err
        } else {}
        console.log(err, "err");
    }
}
module.exports = mongodbRequest;













// const uri = "mongodb+srv://pigos4:DanielPiga123@mflix.hjuju.mongodb.net/mflix?retryWrites=true&w=majority";
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