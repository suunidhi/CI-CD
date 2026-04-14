import express from "express";
import sum from "./sum.js";

const app = express();
const port = 8080;

app.get("/home", (req, res) => {
    res.json({
        msg: "i am root!"
    });
});

app.get("/sum/:a/:b", (req, res) => {
    const { a, b } = req.params;

    res.json({
        ans: sum(parseInt(a), parseInt(b))
    });
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});