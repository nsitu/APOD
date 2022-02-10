const express = require ('express'); 
const axios = require('axios');  
const cors = require('cors');  
const dotenv = require('dotenv').config()

const ROOT_URL = process.env.ROOT_URL || '' 
const API_KEY = process.env.API_KEY || ''
const PORT = process.env.PORT || 5000

const app	= express()

// middleware
app.use( cors() )          
app.use( express.json() )  
app.use(ROOT_URL+'/', express.static('public')) 

app.get(ROOT_URL+'/api/:date', (req, res) => { 

    const options = {
      method: 'GET',
      url: 'https://api.nasa.gov/planetary/apod',
      params: {
        api_key: API_KEY,
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



app.listen(PORT, () => {
    console.log("We are live on port "+PORT )
})

