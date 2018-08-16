//. app.js

var express = require( 'express' ),
    cfenv = require( 'cfenv' ),
    app = express();
var settings = require( './settings' );
var appEnv = cfenv.getAppEnv();

app.use( express.Router() );
app.use( express.static( __dirname + '/public' ) );

app.set( 'views', __dirname + '/templates' );
app.set( 'view engine', 'ejs' );

app.get( '/', function( req, res ){
  res.render( 'index', { max_len: settings.max_len } );
});

app.listen( appEnv.port );
console.log( "server stating on " + appEnv.port + " ..." );
