const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); //temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];


        for (let i = 0; i < towns.length; i++ ) {
          if (towns[i].name == "Fish Haven" ||
              towns[i].name == "Preston" ||
              towns[i].name == "Soda Springs")
          {    
          
            let card = document.createElement('section');
            let townInfo = document.createElement('div');
            let townPicture = document.createElement('div');
            
            let name = document.createElement('h3');
            name.textContent = towns[i].name;
            card.appendChild(name);

            let motto = document.createElement('h4');
            motto.textContent = towns[i].motto;
            card.appendChild(motto);

            let founded = document.createElement('p');
            founded.textContent = "Year Founded: " + towns[i].yearFounded;
            card.appendChild(founded);

            let pop = document.createElement('p');
            pop.textContent = "Population: " +  towns[i].currentPopulation;
            card.appendChild(pop);

            let rainFall = document.createElement('p');
            rainFall.textContent = "Annual Rain Fall: " +  towns[i].averageRainfall;
            card.appendChild(rainFall);

            let image = document.createElement('img');
            image.setAttribute('src', "images/" + towns[i].photo);
            image.setAttribute('alt', 'picture of ' + towns[i].name + ', Idaho');
            card.appendChild(image);
           
            document.querySelector('div.town-data').appendChild(card);
        }
      }
  });


