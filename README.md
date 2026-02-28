# Drawing Prompt Jar

## Overview

Drawing Prompt Jar is a full-stack web application practice tool designed to remove the mental friction that keeps artists from drawing consistently. Instead of asking “what should I draw?”, the app eliminates subject choice entirely and replaces it with a simple commitment: select a Creative Limitation, receive a random image, and complete one focused session. The goal is not to produce perfect work, but to practice showing up. By requiring a self-evaluation score at the end of each session, the app reinforces reflection over outcome and reframes mistakes as part of growth. Drawing Prompt Jar exists to help artists build discipline, reduce fear, and reconnect with the process of making art — especially on days when they don’t feel like it.

The application tracks structured session data and demonstrates API integration, backend routing, input validation, and responsive design.

---

## Tech Stack

* Frontend: HTML, CSS (Grid + Media Queries), Vanilla JavaScript
* Backend: Node.js + Express
* API: Unsplash API
* Data Storage: JSON file (server-side)

---

## Project Structure

```
drawing-prompt-jar/
│
├── server.js
├── .env
├── .gitignore
├── package.json
│
├── data/
|   └── sessions.json
|
├── routes/
|   └── api.js
|
└── public/
    ├── index.html
    ├── session.html
    ├── stats.html
    ├── css/
    │   ├── styles.css
    |   └── reset.css 
    └── js/
        ├── main.js
        ├── session.js
        └── stats.js
```

---

## Capstone Requirements Fulfilled

### Integrate a Third-Party API (Required)

* Uses Unsplash Random Photo endpoint.
* API key stored securely in `.env`.

### Create a Node.js Web Server (Express)

* Serves static files from `public/` directory.
* Custom routes:

  * `GET /api/image  //fetch image from Unsplash API and return selected image data to front end`
  * `POST /api/sessions  //receives session data, validates it, and saves it to data/sessions.json`
  * `GET /api/sessions  //returns all stored session data for use in stats page`

### Analyze and Display Data Stored in Objects/Arrays

* Creative Limitations stored in an array.
* Session objects saved with:

  * `startTime`
  * `endTime`
  * `creativeLimitation`
  * `selfEvaluationScore`

### Validate User Input

* Self-evaluation score restricted to values 1–5.
* Invalid submissions are rejected server-side.

### Responsive Design

* CSS Grid layout.
* At least one media query.
* Mobile and desktop support.

---

## Environment Setup

### 1. Clone the repository

```bash
git clone https://github.com/kykikimora/drawing-prompt-jar.git

```

### 2. Install dependencies

```bash
npm ALL THE DEPENDENCIES! //(I think just node?)
```

### 3. Create `.env` file

```
UNSPLASH_ACCESS_KEY=your_access_key_here
PORT=3000
```

### 4. Start server


```bash
node server.js
```

### 5. Visit

```
http://localhost:3000
```

---

## API Key Instructions

1. Create an account at: [https://unsplash.com/developers](https://unsplash.com/developers)
2. Create a new application
3. Copy the Access Key into your `.env` file
4. Put that `.env` file into a gitignore file       

---

## Data Storage

Session data is stored server-side in:

```
data/sessions.json
```

Data persists across page reloads.

---

## AI Usage Disclosure

AI tools used for:

* Project planning
* Documentation refinement
* Reviewing Express routing structure
* Helping the developer understand code logic at a sixth grade level  TT__TT


---

## Notes for Reviewers

* Project requires Node.js
* API key must be added to `.env` before running.
* Additional configuration requirements: Have a piece of paper and something to draw with. Leave fear at the door. 
