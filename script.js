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