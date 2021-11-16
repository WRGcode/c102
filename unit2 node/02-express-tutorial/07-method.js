const { urlencoded } = require("express");
const express = require("express");
const app = express();
const { people } = require("./data");


app
  .use(express.static("./public"))

  //required for posting data
    .use(express.urlencoded({extended: false}))
    .use(express.json())

  .get("/api/people", (req, res) => {
    res.status(200).json({ success: true, data: people });
  })
  .post('/api/people', (req, res) => {
      const {name} = req.body
      if (name) {
          people.push({id: new Date().getTime(), name})
    res.status(201).json({ person: name })
}
res.status(404).json({ success: false, msg: "please provide a name" });
  })

  .post("/login", (req, res) => {
      console.log(req.body);
    const { name } = req.body;
    if (name) {
      return res.status(201).send(`wecome ${name}`);
    }
    res.status(404).json({ success: false, msg: "please provide a name" });
  })

  .put('/api/people/id', (res, req) => {
      const {id} = res.params
      const {name} = req.body

      const person = people.find((each)=>{
          return each.id === id
      })

      if(!person) {
          return res.status(400).json({success: false, msg: `no person with id ${id}`})
      }
      const newPeople = people.map((person) =>{
          if (person.id === id) person.name = name
          return person
      })
      people = newPeople
      res.status(202).json({success: true, data: people })

      .detete('/api/people/:id', (res,req)=>{
          const {id} = req.params
          const person = people.find((each) => each.id === Number(id))
          if(!person){
              return res
              .status(400)
              .json({success: false, msg: `no person with id ${id}`})
          }
          return person.id !== Number(id)
      })
      people = newpeople
      res.status(203).json({success: ture, data: newpeople})

  })

  .listen(3000, () => console.log("server is listening"));
