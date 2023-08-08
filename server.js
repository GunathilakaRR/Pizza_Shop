const express = require("express");
const app = express();
const db = require("./db");
const Pizza = require("./models/pizzaModel");
const router = require("./routes/pizzasRoute");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server working");
});

app.use("/api/pizzas", router);

// app.get('/getpizzas', async (req, res)=>{
//     let pizza
//     try {
//         pizza = await Pizza.find({})
//     } catch (error) {
//         console.log(error);
//     }

//     console.log(pizza);
//     if(pizza){
//         res.send({pizza})
//     }
//     else{
//         res.send("No pizza found")
//     }

//     // Pizza.find({}, (err, docs)=>{
//     //     if(err){
//     //         console.log("err");
//     //     }else{
//     //         res.send(docs);
//     //     };
//     // });
// });

app.post("/addPizza", async (req, res) => {
  const { name, varients, prices, category, image, description } = req.body;

  const newPizza = new Pizza({
    name,
    varients,
    prices,
    category,
    image,
    description,
  });

  try {
    await newPizza.save();
  } catch (error) {
    console.log(error);
  }

  res.send("successed!!!");
});
//add product controller end

const port = process.env.PORT || 8000;

app.listen(port, () => "Server running on port 8000");
