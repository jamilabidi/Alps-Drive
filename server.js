
const express = require('express')
const app = express()
const port = 3000

function start(){
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    app.listen(port, () => {
        console.log(`GotIt`)
    })
}
module.exports=start;


