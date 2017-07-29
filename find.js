const {MongoClient}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Auth',(err,db)=>{
    if(err)
    return console.log('Unable to connect');

    console.log('connected to server');
     db.collection('Users').find({name:'Ash'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
     },(err)=>{
         console.log(err);
     });
    db.close();
});