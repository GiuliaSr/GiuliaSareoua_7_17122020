const express = require("express");
const app = express();
// const sq = require("sequelize");

// const Sq = new Sequelize("Groupomania", "root", "Hornets1218", {
//     host: "localhost",
//     dialect: "mysql",
// });

// try {
//     sequelize.authenticate();
//     console.log("Connection has been established successfully.");
// } catch (error) {
//     console.error("Unable to connect to the database:", error);
// }
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});
app.use((req, res, next) => {
    console.log("Requête reçue !");
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({ message: "Votre requête a bien été reçue !" });
    next();
});

app.use((req, res, next) => {
    console.log("Réponse envoyée avec succès !");
});

module.exports = app;
