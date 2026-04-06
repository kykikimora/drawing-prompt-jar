"use strict";

const limitationsEndpoint = "http://localhost:8080/api/limitations";


async function getAllLimitations() {
    try {
        const res = await fetch(limitationsEndpoint)
        const limitations = res.json()

        return limitations
    } catch (error) {
        console.error(error.message)
    }
}

function setOptionLabels(limits) {
    const limitsArray = [...limits]
    const labels = document.querySelectorAll("label")
    labels.forEach((label, index) => {
        label.textContent = limitsArray[index]
    });
}

function setOptionValues(limits) {
    const limitsArray = [...limits];
    const options = document.querySelectorAll("input");
    options.forEach((option, index) => {
        option.value = limitsArray[index]
    });
}

function getUniqueLimitations(limits) {
    const uniqueLimitations = new Set();
    while (uniqueLimitations.size < 5) {
        const randomIndex = Math.floor(Math.random() * limits.length)
        console.log(limits[randomIndex])
        uniqueLimitations.add(limits[randomIndex])
    }

    return uniqueLimitations;
}

const allLimitations = await getAllLimitations()
const uniqueLimitations = getUniqueLimitations(allLimitations)

setOptionLabels(uniqueLimitations)
setOptionValues(uniqueLimitations);

//3 global variables
