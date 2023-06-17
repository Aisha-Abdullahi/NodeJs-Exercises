import * as fs from "node:fs"

fs.writeFile("file-1.txt", "Hello, this is the first file", (err) => {
    if (err) {
      console.error('An error occurred:', err);
    } else {
      console.log('Data has been written to the file successfully.');
    }
})
fs.writeFile("file-2.txt", "My name is Aisha", (err) => {
    if (err) {
      console.error('An error occurred:', err);
    } else {
      console.log('Data has been written to the file successfully.');
    }
})