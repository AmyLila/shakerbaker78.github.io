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
            let name = document.createElement('h3');
            let motto = document.createElement('h4');
            let founded = document.createElement('p');
            let pop = document.createElement('p');
            let rainFall = document.createElement('p');
            let townPicture = document.createElement('div');
            let image = document.createElement('img');
            
            
            
            // townInfo.className = "town";

            name.textContent = towns[i].name;
            townInfo.appendChild(name);

            
            motto.textContent = towns[i].motto;
            townInfo.appendChild(motto);

            
            founded.textContent = "Year Founded: " + towns[i].yearFounded;
            townInfo.appendChild(founded);

            
            pop.textContent = "Population: " +  towns[i].currentPopulation;
            townInfo.appendChild(pop);

            
            rainFall.textContent = "Annual Rain Fall: " +  towns[i].averageRainfall;
            townInfo.appendChild(rainFall);

            // townPicture.className = "pic";
            
            
            image.setAttribute('src', "images/" + towns[i].photo);
            image.setAttribute('alt', 'picture of ' + towns[i].name + ', Idaho');
            townPicture.appendChild(image);

            card.appendChild(townInfo);
            card.appendChild(townPicture);
           
            document.querySelector('div.town-data').appendChild(card);
        }
      }
  });


