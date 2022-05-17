fetch('https://picsum.photos/v2/list?page=31')
  .then((response) => {
    if (response.ok) {
      console.log('ok');
      return response.json();
    } else {
      console.log('not okay');
    }
  })
  .then((data) => {
    imageRendering(data);
  })
  .catch((err) => {
    console.log(err);
  })
//21:30
function imageRendering(data) {
  data.forEach((imageObject) => {
    const image = document.createElement ('img');
    image.src = imageObject.download_url;
    image.style.width = '200px';
    document.body.append(image);
  })
}