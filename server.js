"use strict";

// Imports and Setup
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
const fs = require("fs/promises");

// variables to store our file paths
const scoresFilePath = "./data/scores.json";
const limitationsFilePath = "./data/limitations.json"

// options fors CORS. setting the origin to the server
// prevents access from different domains
const corsOptions = {
    origin: `http://localhost:${port}`,
};

// Making our app use the cors middleware and the options
// we create above
app.use(cors(corsOptions));

// the two lines are required for us to
// make POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serves out static site from the public folder
app.use(express.static("./public"))


// Helper function to load score from file,
// parse them into an array of objects, and
// return the array of score objects
async function loadScores() {
    try {
        const res = await fs.readFile(scoresFilePath);
        const scores = await JSON.parse(res);

        return scores;
    } catch (error) {
        console.error(error.message);
    }
}

async function getLimitations() {
    try {
        const res = await fs.readFile(limitationsFilePath);
        const limitations = await JSON.parse(res);

        return limitations;
    } catch (error) {
        console.error(error.message);
    }
}


// Takes in a score, adds it to the existing scores,
// and saves it to the json file.
async function saveScore(scoreData) {
    try {
        const scores = await loadScores();
        scores.push(scoreData);

        await fs.writeFile(scoresFilePath, JSON.stringify(scores));
    } catch (error) {
        console.error(error.message);
    }
}

// Retreive all scores and return them.
async function getAllScores() {
    try {
        const allScores = await loadScores();
        return allScores;
    } catch (error) {
        console.error(error.message);
    }
}

// Pretty much straight from Quote Card Express Part 4
async function getRandomImageUrl() {
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${process.env.UNSPLASH_ACCESS_KEY}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.urls.regular;

        return receivedPhotoUrl;
    } catch (error) {
        console.error(error);
    }
}

// score endpoint - GET ALL
app.get("/api/scores", async (request, response) => {
    try {
        const scores = await getAllScores();
        response.status(200).json(scores);
    } catch (error) {
        console.error(error.message);
    }
});

// score endpoint - POST
app.post("/api/scores", async (request, response) => {
    console.log(request.body)
    try {
        if (!request.body) {
            return response.status(400).json("Bad request");
        }

        if (!request.body.score || !request.body.imageUrl || !request.body.date) {
            return response.status(400).json("Missing score, date, or imageUrl");
        }

        const scores = await loadScores();

        let newId;
        if (scores.length > 0) {
            const scoreIds = scores.map((score) => score.id);
            newId = Math.max(...scoreIds) + 1;
        } else {
            newId = 1;
        }
        
        const newScore = {
            id: newId,
            score: request.body.score,
            imageUrl: request.body.imageUrl,
            date: request.body.date
        };

        await saveScore(newScore);

        response.status(201).json(newScore);
    } catch (error) {
        console.error(error.message);
    }
});

// limitations endpoint - GET ALL
app.get("/api/limitations", async (request, response) => {
    try {
        const limitations = await getLimitations();
        response.status(200).json(limitations);
    } catch (error) {
        console.error(error.message);
    }
});

// API ENDPOINT THAT WILL FETCH RANDOM IMAGE URL
// WITHOUT EXPOSING UNSPLASH ACCESS KEY
app.get("/api/getRandomImage", async (request, response) => {
    const photoUrl = await getRandomImageUrl();
    response.status(200).json(photoUrl);
});

// Serves the app 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log("Press CTRL+C to end the process");
});



// "use strict";

// const express = require("express");
// const app = express();

// const port = 8080;

// require("dotenv").config();
// const cors = require("cors");

// app.use(cors());

// app.use(express.static("./public"));

// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

// // 11&12 for POST requests

// app.use("/api/v1/getRandomImage", (request, response) => {
//     response.status(200).json({
//         status: 200,
//         data: process.env.CLIENT_ID
//     });
// });

// app.listen(port, () => {
//     console.log(`Server is running http://localhost:${port}`);
//     console.log("Press Ctrl+C to end this process.");
// });

