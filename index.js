const express = require( 'express' );
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use( bodyParser.urlencoded( {extended: true } ) );
app.use( bodyParser.json() );

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('index.html');
});

app.set('port', (process.env.PORT || 80));
app.listen(app.get('port'), function() {
    console.log('Сервер запущен на порту '+app.get('port'));
});