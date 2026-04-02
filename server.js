"use strict";

const express = require("express");
const app = express();

const port = 8080;


app.use(express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// 11&12 for POST requests

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});


//static array for the creative limitations--user does not select, the data gets transfered over to the self-eval form API
//time start, time end, self-eval score, creative limitation, 
//API route for the forms--the self-eval form & creative limitation form
//ACTION ITEM: probide Dan w/ the full shape of what I'm storing--what info I am storing. Get it to him ASAP!
//reference Dan's repo--"full CRUD api" branches