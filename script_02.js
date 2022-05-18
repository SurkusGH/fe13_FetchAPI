function FetchJokes(){
  const divForContent = document.createElement('div')
  function getRandomNum(max){
    return Math.floor(Math.random() * max);
  }

  fetch('https://picsum.photos/v2/list?page=31')
  .then((response) => {
    if (response.ok) {
      console.log('oky');
      return response.json();
    } else {
      console.log('not okay');
    }
  })
  .then((data) => {
    
    let pic = document.createElement ('img');
    pic.src = data[getRandomNum(10)].download_url
    pic.style.width = '100px';
    pic.style.height = '100px';

    console.log(data)
    divForContent.appendChild(pic)
    //document.body.append(pic)

  })
  .catch((err) => {
    console.log(err);
  })

    fetch('https://api.chucknorris.io/jokes/random')
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
      
      const fetchedJokeP = document.createElement ('p');
      const fetchedLink = document.createElement('a')

      fetchedLink.textContent = '->LINK<-'
      fetchedLink.style.color = 'red'
      fetchedLink.href=data.url
      fetchedJokeP.textContent = data.value
      divForContent.appendChild(fetchedLink)
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
  //     image.style.width = '50px';
  //     document.body.append(image);
  //   })
  // }