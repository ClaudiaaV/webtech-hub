const express = require("express")
const path = require('path');
const api = require('./backend/routes/api')
const auth = require('./backend/routes/auth')

const cors = require("cors")

const app = express()

//serve static files in the build directory
app.use('/', express.static('frontend/build'))

//allow cross origin requests
app.use(cors())

//include the API endpoints
app.use('/api', api);

//include AUTH endpoints
app.use('/auth', auth);

//redirect all other requests to react
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
});

app.listen(3001)