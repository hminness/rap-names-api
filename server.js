//require express
const { request } = require('express');
const express = require('express');
//allows you to easily use express methods
const app = express();
const PORT = 8000;

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.get('/api', (req,res)=>{
    res.json(rappers)
})

app.get('/api/:name', (req,res)=>{
    const rapperName = req.params.name.toLowerCase()
    if (rappers[rapperName]){
        res.json(rappers[rapperName])  
        console.log(rappers[rapperName].birthName)  
    } else {
        console.log(`Unknown rapper ${rapperName}`)
        res.json(rappers['unknown'])
    }
})


app.listen(PORT,()=>{
    console.log(`runaway server!!!`)
})