const Cloudant = require("@cloudant/cloudant");
var url =
  "https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud";
var username = "apikey-v2-237a9fx60g51gyopiewwx5pb339t2r1xw085fzt3skgx";
var password = "85e4a7e36372ac1e47c80f4b81a78d62";

var cloudant = Cloudant({ url: url, username: username, password: password });
// var food_chain = cloudant.use("sowmya_trainee");

insert = function (paramsvalue) {
  console.log(paramsvalue);
  cloudant
    .use("housing-software")
    .insert(paramsvalue)
    .then((data) => {
      console.log("Data Inserted into Cloud database" + data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// insert1 = function (paramsvalue) {
//   console.log(paramsvalue);
//   cloudant
//     .use("housing-software")
//     .insert(paramsvalue)
//     .then((data) => {
//       console.log("Data Inserted into Cloud database" + data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
get = function (admindata, dbname) {
  return cloudant.use(dbname).find(admindata);
};
getbill = function (dbname) {
  return cloudant.use(dbname).list();
};
getId = function (id, dbname) {
  return cloudant.use(dbname).get(id);
};
del_id = function (id, id1, dbname) {
  return cloudant.use(dbname).destroy(id, id1);
};
module.exports = { get, getId, insert, del_id };


// module.exports = { insert,food_chain };
