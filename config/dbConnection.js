/* importar o MongoDB */
var mongo = require('mongodb');

var connMongoDb = function() {
    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost', //string contendo o endereço do servidor 
            27017, // porta de conexão
            {}
        ),
        {}
    );
    return db;
}

module.exports = function() {
    return connMongoDb;
}
