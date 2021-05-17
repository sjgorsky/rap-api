const express = require('express')
const app =  express() //all the functions that come with express are now in the variable app
const cors = require('cors') //require != using!!
const PORT = 8000

app.use(cors())

let rappers = {
    '21 savage':{

    'age':28,
    'birthName': 'The Name his mama gave him',
    'birthLocation': 'London, England'  
    },
    'chance the rapper':{
        'age':27,
        'birthName': 'Chancelor',
        'birthLocation': 'Chicago, Illinois' 
    },
    'unknown':{
        'age': 28,
        'birthName': 'unknown',
        'birthLocation': 'unknown' 
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html') //wherever the server file is, look in that directory!
}) 

app.get('/api/rappers/:rapperName', (request, response) => {
    const rapName = request.params.rapperName.toLowerCase() //look at this request, look at the parameters, grab the rapperName parameter
    console.log(rapName)
    if(rappers[rapName]){
        response.json(rappers[rapName]) //we're grabbing an object, but can't use dot notation. must use brackets
    } else {
        response.json(rappers['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})