//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = toCapitalCase(data.name)
        document.querySelector('h3').innerText = `ID: ${data.id}`
        // Type
        type1.innerText = toCapitalCase(data.types[0].type.name)
        let secondType = toCapitalCase(data.types[1]?.type.name)
        secondType ? type2.innerText = ' / ' + secondType : type2.innerText = '';
        // Height/weight
        height.innerText = Number(data.height) / 10
        weight.innerText = Number(data.weight) / 10
        // Moves
        move1.innerText = toCapitalCase(data.moves[0].move.name)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function toCapitalCase(word) {
  if (word) {
  return word.replace('-', ' ')
             .replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toUpperCase()))
  }
}