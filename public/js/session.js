// async function getRandomImage() {
//     const client_id = "";
//     const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
//     try {
//         const response = await fetch(endpoint);
//         const returnedData = await response.json()
//         console.log(returnedData)
//     } catch (error) {
//         console.error(error)
//     }
// }

// getRandomImage();

"use strict";

const randomImageEndpoint = "http://localhost:8080/api/getRandomImage";

// Get the query string from the URL
const queryString = window.location.search;
console.log(`Query String: ${queryString}`);

// Create a URLSearchParams object to parse the query string
const params = new URLSearchParams(queryString);

// Get the value of the "name" parameter for filtering monsters
const chosenLimitation = params.get("limitation");

const finishedBtn = document.getElementById("finished-btn");

finishedBtn.addEventListener("click", () => {
    goToFinishPage();
})

async function getRandomImage() {
    try {
        const res = await fetch(randomImageEndpoint);
        const data = await res.json()
        
        return data
    } catch (error) {
        console.error(error.message)
    }
}

function setImage() {
    const imgElement = document.getElementById("prompt-image")
    imgElement.src = imgUrl; 
}

function setHeading() {
    const limitationHeader = document.getElementById("limitation-title")
    limitationHeader.textContent = chosenLimitation
}

function goToFinishPage () {
    const url = new URL("session-eval.html", window.location.origin);
    url.searchParams.set("limitation", chosenLimitation);
    url.searchParams.set("img-url", imgUrl);
    window.location.href = url;
}

const imgUrl = await getRandomImage();
setImage(imgUrl);
setHeading();