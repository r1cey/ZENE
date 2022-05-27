const process   =require( 'node:process') ;
const http      =require( 'node:http' );
const fs        =require( 'node:fs/promises' );

const classdir  ='./classes/' ;
const Html      =require( classdir+'Html.js' );
const Game      =require( classdir+'Game.js' );

(async function(){

global.html =await Html.build() ; 

global.games ={} ;

let port =process.argv[2] || 80 ;

http.createServer
(
    function( req, res )
    {
        var params =req.url.split('/').slice(1) ;        

        switch( params[0] )
        {
            case 'test' :

                test( req, res );
            break;
            default:

                opengame( params[0], res );
        }
        res.writeHead( 200, {'Content-Type': 'text/html'} );
        
        res.end( 'Hello World!' );
    }
).listen( port );

})();


function test( req, res )
{
    require()
}


async function opengame( gameid, res )
{
    var html ;

    var game =games[gameid] ;

    if( !game ) //make new game
    {
        try{
            var boxjson =await fs.readFile( `./${gameid}/box.json` );
        }
        catch(err){
            console.log( err );
            return ;
        }
        let box =JSON.parse( boxjson ); 
    
        game =games[gameid] =new Game(box);
    }
    for(let tableid in game.tables )
    {

    }
    var mawait fs.readFile( 'tables.xml', 'utf8' );
    res.writeHead( 200, {'Content-Type': 'text/html'} );

    res.end()
}