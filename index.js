const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json());


// server connection

app.get('/', (req, res) =>{
    console.log("COFFEE STORE SERVER is running")
})

app.listen(port, ()=>{
    console.log(`COFFEE STORE SERVER is running on this port ${port}`)
})