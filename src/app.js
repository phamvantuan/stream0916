const openStream = require('./openStream');
const $ = require('jquery');
// openStream();
var Peer = require('simple-peer')
var p = new Peer({ initiator: location.hash === '#1', trickle: false })
p.on('signal', token => {
	$('#txtMySignal').val(JSON.stringify(token));
});

p.on('connect',() => {
setInterval(
	function(){
		p.send(Math.random())
	},2000);
});

p.on('data',data => console.log('du lieu '+ data));

$('#btn_connect').click(() => {
	const friendSignal = JSON.parse($('#txtSignalToken').val());
	p.signal(friendSignal);
});



console.log('Xin chao cac ban');