/*
Copyright 2010, Sauce Labs

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 
 Authors:
 Adam Christian - adam.christian@gmail.com
*/

// Module deps
var express = require('express');
var sys = require('sys');
var request = require('request');
var http = require('http');

var app = module.exports = express.createServer();

// Configuration
app.configure(function() {
    app.set('views', __dirname + '/views');
    app.use(express.bodyDecoder());
    app.use(express.methodOverride());
    app.use(express.compiler({ src: __dirname + '/public', enable: ['less'] }));
    app.use(app.router);
    app.use(express.staticProvider(__dirname + '/public'));
});

app.configure('development', function() {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function() {
   app.use(express.errorHandler()); 
});

app.set('view options', {
  layout: false
});

// Routes
app.get('/', function(req, res) {
  res.render('index.ejs');
});


// Listen
if (!module.parent) {
  app.listen(80);
  console.log("Express server listening on port %d", app.address().port)
}

