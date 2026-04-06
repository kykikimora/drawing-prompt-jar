// Get the query string from the URL
const queryString = window.location.search;
console.log(`Query String: ${queryString}`);

// Create a URLSearchParams object to parse the query string
const params = new URLSearchParams(queryString);

// Get the value of the "name" parameter for filtering monsters
const chosenLimitation = params.get("limitation");
console.log(chosenLimitation);

const url = params.get("img-url");


const evalForm = document.getElementById("eval-form");

const scoresEndpoint = "http://localhost:8080/api/scores";

evalForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = new FormData(evalForm);

    const newScore = {
        score: parseInt(form.get("score")),
        imageUrl: url,
        date: form.get("date")
    };

    console.log(newScore)

    try {
        const res = await fetch(scoresEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newScore)
            
        })
    } catch (error) {
        console.error(error.message)        
    }
});