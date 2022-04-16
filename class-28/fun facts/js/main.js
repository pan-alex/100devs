
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // const choice = document.querySelector('input').value
  const url = 'https://asli-fun-fact-api.herokuapp.com/'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#output').innerText = data.data.fact
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}