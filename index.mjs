import express from "express";
import os from "os";
import dns from "dns";
import { readFileContent } from "./read.mjs";

const app = express();
const PORT = 2000;


app.get("/test", (req, res) => {
    res.send("Test route is working!");
});


app.get("/readfile", (req, res) => {
    const content = readFileContent();
    res.send(content);
});


app.get("/systemdetails", (req, res) => {
    const details = {
        platform: os.platform(),
        totalMemory: (os.totalmem()),
        freeMemory: (os.freemem()),
        cpuModel: os.cpus()[0].model,
        cpuCores: os.cpus().length   
    };

    res.json(details);
});


app.get("/getip", (req, res) => {
    dns.lookup("masaischool.com", (err, address) => {
        if (err) return res.send("Unable to fetch IP");

        res.json({
            hostname: "masaischool.com",
            ipAddress: address,
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});