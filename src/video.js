const constraints = {
  video: true
};

const video = document.querySelectorAll('video');

function handleSuccess(stream) {
  video.forEach(video => {
    video.srcObject = stream;
  });
}

function handleError(error) {
  console.error('Reeeejected!', error);
}

navigator.mediaDevices.getUserMedia(constraints).
  then(handleSuccess).catch(handleError);
