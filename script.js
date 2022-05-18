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
    const fetchedJokeP = document.createElement ('p');
    fetchedJokeP.innerHTML = data.value.joke
  
    document.body.append(fetchedJokeP)
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })

//#####################
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


}
function FetchPhoto(){
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
}
let input = document.querySelector('#input')
const getJokes = document.querySelector('#getJokes')

getJokes.addEventListener("click", () => {
  let inputValue = input.value
  if(inputValue>619){
    alert("Ne daugiau 619!")
  } else{
    for (let i = 0; i < inputValue; i++) {
      FetchJokes();
    }  
  }
})


