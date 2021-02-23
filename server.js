const express = require('express');
const connectDB = require("./config/connectDB");
const Person = require("./models/person");

const app = express();

// step 1 : run server

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is running on http://localhost:${port}`);
});

// step 2 : connect to the database 
connectDB();
// step 3 : parsing data

app.use(express.json());

            //saving a record

// const Person1 = new Person({name:"Rchid", age:23})
// Person1.favouriteFoods.push("Apple");
// Person1.save()
// .then(res=>
//   {console.log(res)}
//   )
// .catch(err=>{
//   console.log(err)
// })


                // creating multiple users 

// const community =  Person.create([
//   {name:"Slim", age:26,favouriteFoods:["pasta","honey"]},
//   {name:"Hedi",age:59,favouriteFoods:["tomatoes","potatoes"]},
//   {name:"Rchid",age:27,favouriteFoods:["broccoli","lasagna"]},
//   {name:"Mary",age:28,favouriteFoods:["cake","bananas"]},
//   {name :"nadhir",age:20}
// ])

                //finding people with the name Rchid


// Person.find({name:"Rchid"},function(err,res){
//   if(res){
//     console.log(res)
//   }else
//   {
//     console.log(err)
//   }
// })

                // finding people who love lasagna

// Person.findOne({ favouriteFoods: "lasagna" }, function (err, res) {
//   if(res){
//     console.log(res)
//   }else
//   console.log(err)
// });

                  // finding people by id 

// Person.findById("6034d4829e175a102815ac0b", function (err, res) {
//   res ? console.log(res):console.log(err)
// });

                    //updating by id

  // Person.findByIdAndUpdate("6034d4829e175a102815ac0b",function(){favouriteFoods.push("Hamburger")},function (err, res) {
  //   res ? console.log(res):console.log(err)
  // }) 

                      //updating age by name 

    // Person.findOneAndUpdate({name:"Hedi"},{age:20},{new:true},function(err,res){
    //       res ? console.log(res):console.log(err)
    // })


                    //deleting a person by id 


    // Person.findByIdAndRemove("6034d4829e175a102815ac0b",function(err,res){
    //   res ? console.log(res):console.log(err)
    // })

                  // removing people named Mary

      // Person.remove({name:"Mary"},function(err,res){
      //   res ? console.log(res):console.log(err)
      // })


                  // Chain Search Query Helpers to Narrow Search Results

        // Person.find(
        //   {favouriteFoods:"burrito"}).
        //   sort({name:1}).
        //   limit(2).
        //   select({age:0}).
        //   exec(function(err,data){
        //            data ? console.log(data):console.log(err)
        //   });
