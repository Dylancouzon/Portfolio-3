const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/projects", { useNewUrlParser: true });

db.Projects.insertMany([
    {
        name: "FarQuest",
        description: "A role-playing game of medieval fantasy.<br><br>Select from a hero class of Knights, Wizards, Huntresses, or be an Assassin. Explore a rich world of story-telling, battles, and surprises as you journey to see the King.<br><br>",
        image: "FarQuest.png",
        githubLink: "https://github.com/Dylancouzon/farQuest",
        deployedLink: "https://farquest.herokuapp.com/",
        main: 1
    },
    {
        name: "Covid-19 Vaccine Data",
        image: "vaccinator.png",
        githubLink: "https://github.com/Dylancouzon/GroupProject",
        deployedLink: "https://dylancouzon.github.io/GroupProject"
    },
    {
        name: "Work Day Scheduler",
        image: "scheduler.png",
        githubLink: "https://github.com/Dylancouzon/day-planner",
        deployedLink: "https://dylancouzon.github.io/day-planner"
    },
    {
        name: "Weather Dashboard",
        image: "dashboard.png",
        githubLink: "https://github.com/Dylancouzon/Weather-Dashboard",
        deployedLink: "https://github.com/Dylancouzon/Weather-Dashboard"
    }
]);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});