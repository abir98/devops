const express = require('express');
const app = express();

app.get('/names', (req, res) => {
    res.send("Abir");
})

app.listen(5000, () => {
    console.log("server running on 5000");

})