//. app.js

var express = require( 'express' ),
    cfenv = require( 'cfenv' ),
    app = express();
var appEnv = cfenv.getAppEnv();

app.use( express.Router() );
app.use( express.static( __dirname + '/public' ) );

app.listen( appEnv.port );
console.log( "server stating on " + appEnv.port + " ..." );
