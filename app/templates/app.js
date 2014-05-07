var express = require('express');<%
if(props.bodyparser) {%>
var bodyParser = require('body-parser');<%
}
%>

var app = express();<% 
if(props.jade) {%>
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');<%
}

if(props.static) {%>
app.use(express.static(__dirname + '/public'));<%
}

if(props.bodyparser) {%>
app.use(bodyParser());<%
}
%>

app.get('/', function(req, res) {<%
if(props.jade) {%>
	res.render('index');<%
}
else {%>
	res.send('<h1>Hello Boulder</h1>');<%
}
%>
});

var server = app.listen(<%= 3000 + Math.floor(Math.random() * 7000) %>, function() {
	console.log('Express server listening on port ' + server.address().port);
});
