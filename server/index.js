const express = require("express");
const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
app.use(express.static("public"));
const port = 8000;
var login = {};
const file = require("fs");
const { request } = require("http");
const { response } = require("express");
const { nextTick } = require("process");
const cors = require("cors");
const dbconnection = require("./db");
app.use(express.static("public"));
app.use(connection.static("public"));
app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.post("/postquery", (request, response, next) => {
  console.log(request);
  var object = {
    name: request.body.name,
    mobileNumber: request.body.mobileNumber,
    email: request.body.email,
    password: request.body.password,
    type: "userid",
  };

  dbconnection.insert(object);
});

// app.post("/post_query", (request, response, next) => {
//   console.log(request);
//   var object = {
//     block: request.body.block,
//     maintainance: request.body.maintainance,
//     housetax: request.body.housetax,
//     watertax: request.body.watertax,
//     parking: request.body.parking,
//     charity: request.body.charity,
//   };

//   dbconnection.insert1(object);
// });

app.get("/getUser", (request, response) => {
  console.log(request);
  var data = {
    selector: {
      type: "userid",
    },
  };
  dbconnection.get(data, "food_chain").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});
app.get("/getUserId/:id", (request, response) => {
  dbconnection.getId(request.params.id, "food_chain").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});

// app.get("/getbill", (request, response) => {
//   console.log(request);
//   dbconnection.get("food_chain").then((res) => {
//     if (res) {
//       response.send(res);
//     } else {
//       response.send("error");
//     }
//   });
// });

app.delete("/delete/:id/:id1", (request, response) => {
  dbconnection
    .del_id(request.params.id, request.params.id1, "food_chain")
    .then((res) => {
      if (res) {
        response.send(res);
      } else {
        response.send("error");
      }
    });
});

app.get("/getadmin", (request, response) => {
  console.log(request);
  var data = {
    selector: {
      type: "adminid",
    },
  };
  dbconnection.get(data, "food_chain").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});
app.get("/getadminId/:id", (request, response) => {
  dbconnection.getId(request.params.id, "food_chain").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});