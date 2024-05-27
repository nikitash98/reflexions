const express = require('express')

const app = express()
const fs = require("fs")

var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));


let jsonData = require("./data.json");
app.use(express.static('public'))

const newData = [
    {
        id: 123,
        name: "bowl"
    }
]



app.get("/api", (req, res) => {
    console.log("ACCESSED")
    jsonData["test"] = 1

    fs.writeFile("data.json", JSON.stringify(jsonData), (err) => {
        if(err) {
            console.log("ERROR")
        }
        console.log("DONE")
    })

    /*
    saveData()
    */
    res.json({message: "data added"})

})


app.post("/photo", (req, res)=> {
        const base64Data = req.body.image.replace(/^data:image\/png;base64,/, '');
        fs.writeFile('public/images/' + req.body.id + '.png', base64Data, 'base64', (err) => {
            res.status(200).send('image writed')

    });

})




app.get("/runid", (req, res) => {
    fs.readFile('data.json', (err, json) => {
        let obj = JSON.parse(json)
        res.json({runid: obj["runid"]})
        obj["runid"] += 1;
        fs.writeFile("data.json", JSON.stringify(obj), (err) => {

        });
    })
    console.log("OK")
})


app.get("/usersRun", (req, res) => {
    res.json(jsonData["usersRun"]);
}) 

app.post("/uvs", (req, res) => {
    const id = req.body.id

    fs.writeFile('assets/uvs/' + id + '.json', JSON.stringify(req.body), (err) => {
    })

    res.status(200).send("uvsaccepted")
    jsonData["usersRun"].push(id);
    fs.writeFile('data.json', JSON.stringify(jsonData), (err) => {
        if(err) {
            console.log("ERROR")
        }
        console.log("DONE")

    });

})

app.get("/uvs/:id", (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id)
    fs.readFile('assets/uvs/' + id + '.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });

})


app.listen(5000, ()=> {
    console.log("Server is running on port 5000")
})