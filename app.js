//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
var obj=new ObjectID();

MongoClient.connect('mongodb://localhost:27017/Auth',(err,db)=>{
    if(err)
    return console.log('Unable to connect');

    console.log('connected to server');
    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed:false
    // },(err,result)=>{
    //     if(err)
    //     return console.log("Unable to add");
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // db.collection('Users').insertOne({
    //     name:'Akash',
    //     age:22,
    //     location:'India'
    // }, (err,res)=>{
    //     if(err)
    //     return console.log('Unable to insert user',err);
    //     console.log(res.ops[0]._id.getTimeStamp());
    // });

    db.close();
});