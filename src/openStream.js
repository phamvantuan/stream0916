const playVideo = require('./playVideo');
function openStream(){
	navigator.mediaDevices.getUserMedia({ audio: false, video: true })
		.then(function(stream) {
			playVideo(stream,'stream');
	}).catch(function(err) {
	  console.log(err);
	});
} 
module.exports = openStream;