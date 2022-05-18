function FetchJokes(){
    fetch('http://api.icndb.com/jokes/random/')
    .then((response) => {
      if (response.ok) {
        console.log('ok');
        return response.json();
      } else {
        console.log('not okay');
      }
    })
    .then((data) => {

      const placeForJokes = document.querySelector('#placeForJokes')
      const divForContent = document.createElement('div')
      const fetchedJokeP = document.createElement ('p');
      const fetchedLink = document.createElement('a')

      fetchedLink.textContent = data.json
      fetchedJokeP.textContent = data.value.joke
      divForContent.appendChild(fetchedJokeP)
      placeForJokes.appendChild(divForContent)

      document.body.append(placeForJokes)
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }


  

  const add = document.querySelector('#add')
  let i = 1;
  add.addEventListener("click", () => {
  FetchJokes();
  document.getElementById("result").innerHTML = `Number of Jokes: ${i++}`
  })
  // fetch('https://picsum.photos/v2/list?page=31')
  //   .then((response) => {
  //     if (response.ok) {
  //       console.log('ok');
  //       return response.json();
  //     } else {
  //       console.log('not okay');
  //     }
  //   })
  //   .then((data) => {
  //     imageRendering(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // //21:30
  // function imageRendering(data) {
  //   data.forEach((imageObject) => {
  //     const image = document.createElement ('img');
  //     image.src = imageObject.download_url;
  //     image.style.width = '200px';
  //     document.body.append(image);
  //   })
  // }