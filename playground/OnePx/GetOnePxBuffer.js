const fs = require("fs");

fs.readFile("OnePx.webp", (err, data) => {
    const arr = [];
    for (let value of data.values()) {
        arr.push(value);
    }
    console.log("[" + arr.join(", ") + "]");
});