const Cloudant = require("@cloudant/cloudant");
var url =
  "https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud";
var username = "apikey-v2-237a9fx60g51gyopiewwx5pb339t2r1xw085fzt3skgx";
var password = "85e4a7e36372ac1e47c80f4b81a78d62";

var cloudant = Cloudant({ url: url, username: username, password: password });
var foodchain = cloudant.use("sowmya_trainee");

info={
  selector: {
    id:'admin',
    email: 'sowmyapandian020201@gmail.com',
    password:'Sowmi@2',
    cpassword:'Sowmi@2'
  },
};
insert = function (paramsvalue) {
  console.log(paramsvalue);
  return cloudant.use("sowmya_trainee").insert(paramsvalue);
};

get = function () {
  console.log(paramsvalue);
  return cloudant.use("sowmya_trainee").list(paramsvalue);
};

update = function (paramsvalue) {
  console.log(paramsvalue);
  return cloudant.use("sowmya_trainee").insert(paramsvalue);
};

destroy = function (_id, _rev) {
  console.log(paramsvalue);
  return cloudant.use("sowmya_trainee").destroy(paramsvalue);
};
module.exports = { insert,foodchain };
