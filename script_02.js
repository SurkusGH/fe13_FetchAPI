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
    //fetchedJokeP.setAttribute('id', 'wrapper');
      fetchedJokeP.textContent = data.value.joke
    
      document.body.append(fetchedJokeP)
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
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