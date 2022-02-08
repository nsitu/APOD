const express = require ('express'); 
const axios = require('axios');  
const cors = require('cors');  
const dotenv = require('dotenv').config()

const app	= express()

app.use( cors() )          
app.use( express.json() )  


app.use(process.env.ROOT_URL+'/', express.static('public')) 

app.get(process.env.ROOT_URL+'/api/:date', (req, res) => { 

    const options = {
      method: 'GET',
      url: 'https://api.nasa.gov/planetary/apod',
      params: {
        api_key: process.env.API_KEY,
        date: req.params.date
      }
    } 
    // axios makes requests from Oxford API
    axios.request(options).then((response) => { 
      // relay the response from Oxford back to the frontend.
      res.send(  response.data ) 
    }).catch( (error) => {
      // if there is an error, send a message to the frontend.
      res.send( { error: error.message })
    })
  })


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("We are live on port "+port )
})

