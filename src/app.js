const openStream = require('./openStream');
const $ = require('jquery');
const playVideo = require('./playVideo');
var Peer = require('simple-peer');

openStream(function(stream){
	playVideo(stream,'stream');

	var p = new Peer({ initiator: location.hash === '#1', trickle: false,stream })
	p.on('signal', token => {
		$('#txtMySignal').val(JSON.stringify(token));
	});

	$('#btn_connect').click(() => {
		const friendSignal = JSON.parse($('#txtSignalToken').val());
		p.signal(friendSignal);
	});

	p.on('stream',friendStream => playVideo(friendStream,'friendStream'))
});

