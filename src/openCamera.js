function openCamera(){
	navigator.mediaDevices.getUserMedia({ audio: false, video: true })
		.then(function(stream) {
			const video = document.getElementById('stream');
				video.srcObject = stream;
				video.onloadedmetadata = function(e) {video.play();};
	}).catch(function(err) {
	  console.log(err);
	});
} 
module.exports = openCamera;