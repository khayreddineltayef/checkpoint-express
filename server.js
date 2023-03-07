const express = require("express");
const students = require("./students");
var app = express();
PORT = 5000;
// app.get("/", (req, res) => {
//   res.send("<h1>hello world</h1>");
// });
//
// app.get("/students", (req, res) => {
//     res.send(students);
//   });
// app.get("/students/:id", (req, res) => {
//   res.send(students.filter((el) => el.id == req.params.id));
// });

// const requestTime = function (req, res, next) {
//   const time = new Date();
//   const hour = time.getHours();
//   const day = time.getDay();
//   if (hour >= 9 && hour <= 17 && day >= 1 && day <= 5) {
//     // res.send(
//     //   `hi everyone it is ${hour} in tunisia, what a beautiful  rainy ${day}`
//     // );
//     next();
//   } else {
//     res.send("we are not working today");
//   }

// };
// hour >= 9 && hour <= 17 && day >= 1 && day <= 5
app.use((req, res, next) => {
  const time = new Date();
  const hour = time.getHours();
  const day = time.getDay();

  if (hour >= 9 && hour <= 17 && day >= 1 && day <= 5) {
    next();
  } else {
    res.send(" <h1>We are coming soon</h1>");
  }
});
// app.get("/", requestTime, (req, res) => {
//   res.send("hi requested time");
// });
// app.use(requestTime);

// app.get("/", (req, res) => {
//   let responseText = "Hello World!<br>";
//   responseText += `<small>Requested at: ${req.requestTime}</small>`;
//   res.send(responseText);
// });

app.use(express.static("page"));
app.listen(PORT, (error) =>
  error
    ? console.log(error)
    : console.log(`the server is runing in the port a ${PORT}.`)
);
