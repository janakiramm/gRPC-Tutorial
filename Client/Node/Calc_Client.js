var PROTO_PATH = 'Calc.proto';

var grpc = require('grpc');
var calc_proto = grpc.load(PROTO_PATH).calc;

var params={n1:20, n2:10};

function main() {
  var client = new calc_proto.Calculator('localhost:50050',
                                       grpc.credentials.createInsecure());

  client.divide(params, function(err, response) {
    console.log(response.f1);
  });

  client.multiply(params, function(err, response) {
    console.log(response.n1);
  });

  client.substract(params, function(err, response) {
    console.log(response.n1);
  });

  client.add(params, function(err, response) {
    console.log(response.n1);
  });
  
}

main();