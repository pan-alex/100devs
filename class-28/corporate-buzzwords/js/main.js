//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)



function getFetch(){
  // const choice = document.querySelector('input').value
  const url = 'https://corporatebs-generator.sameerkumar.website/'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#output').innerText = data.phrase
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}