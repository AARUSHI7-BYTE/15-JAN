import fs from "fs";

export function readFileContent() {
    try {
        const data = fs.readFileSync("Data.txt", "utf8");
        return data;
    } catch (err) {
        return "Error reading file!";
    }
}