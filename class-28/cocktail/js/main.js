//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
    //   const choice = document.querySelector('input').value
       let drink = document.querySelector('input').value
       let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drink.replace(/ /g, '_')
    
      fetch(url)
          .then(res => res.json()) // parse response as JSON
          .then(data => {
            console.log(data)
            displayCarousel(data.drinks)
          })
          .catch(err => {
              console.log(`error ${err}`)
          });
    
    }


function ingredientToString(drink) {
    let ingredients = ''
    i = 1
    while(i<= 15 && drink['strIngredient' + i]) {
        ingredients += '- ' + drink['strIngredient' + i] + '\n'
        i++
    }
    return ingredients
}

function displayOne(drink) {
    console.log(drink.strDrink)
    document.querySelector('h2').innerText = drink.strDrink
    document.querySelector('img').src = drink.strDrinkThumb
    document.querySelector('#ingredients').innerText = ingredientToString(drink)
    document.querySelector('#instructions').innerText = drink.strInstructions
}

function displayCarousel(drinks) {
        let i = 0
        displayOne(drinks[i])
        const intervalId = setInterval( _ => {
            i += 1
            displayOne(drinks[i])
            if (i === drinks.length - 1) {
                // console.log('done')
                clearInterval(intervalId)
            }
    // }
}, 1000 * 5);
}