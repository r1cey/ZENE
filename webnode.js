var http = require( 'http' );

var fs = require( 'fs' );

http.createServer
(
    function( req, res )
    {
        var url =req.url.slice( 1 );

        var params =[ url ];

        switch( params[0] )
        {
            case 'test' :

                test( req, res );
            break;
            default:

                opengame( params[0] );
        }
        res.writeHead( 200, {'Content-Type': 'text/html'} );
        
        res.end( 'Hello World!' );
    }
).listen( 80 );


function test( req, res )
{
    require()
}


function opengame( gameid )
{
    fs.readFile( `./${gameid}/box.json`, function( err, data )
    {
        if( err )
        {
            console.log( err );

            return;
        }
        let box =JSON.parse( data ); 
        
        console.log( box );
    })
}