const fs  = require("fs");

// creating a new file
//jab bhi hum iss file ka call krenge toh jo previousfile hoga woh delete ho jayega .
// fs.writeFileSync("read.txt", "welcome to my code");
// fs.writeFileSync("read.txt", " gauravcode ,welcome to my code");
// fs.appendFileSync("read.txt" , "How are you I am fine bro");
// fs.appendFileSync("read.txt", "How are you I am fine bro");
//  fs.appendFileSync("read.txt", "How are you I am fine bro");


//Node.js includes an additional data type called buffer
//(not available in browsers javascript)
//buffer  is mainly used to store binary data
//while reading  from a file or receving packets over the n/w.
// const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);

// org_data = buf_data.toString();
// console.log(org_data);

//to rename file
fs.renameSync('read.txt' ,'readwrite.txt')