 //------------------------------- Temple Info -------------------------------------------------------

 const templesURL = "https://shakerbaker78.github.io./temple-inn/data/temple-info.json";
fetch(templesURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.log(jsonObject); //temporary checking for valid response and data parsing
    const temple = jsonObject['temples'];

    for (let i = 0; i < temple.length; i++ ) {
                  
       
    let templeTitle =document.createElement('h2');
        templeTitle.className = "templeName"; 
        templeTitle.textContent = temple[i].name;
        document.querySelector('section.templeHeroContainer').appendChild(templeTitle);

//---------------------- This goes inside the templeHeroContainer section --------------------------       
    let divInfo = document.createElement('div');
        divInfo.className = "templeInfoLong";
        divInfo.id= "dropDown" + i;
        
        // templeHeroContainer.appendChild(divInfo);  
        console.log(divInfo.id);      
     
    let button = document.createElement('button');
        button.setAttribute('onclick', 'toggle()');
        button.textContent = "&#9662";
        divInfo.appendChild(button);

                          
                let announced = document.createElement ('h4');
                announced.textContent = "Announced";
                divInfo.appendChild(announced);
                let announced1 = document.createElement ('p');
                announced1.textContent = temple[i].announced;
                divInfo.appendChild(announced1); 

                let ground = document.createElement ('h4');
                ground.textContent = "Ground Breaking";
                divInfo.appendChild(ground);
                let ground1 = document.createElement ('p'); 
                ground1.textContent = temple[i].groundbreaking;
                divInfo.appendChild(ground1);

                let dedicated = document.createElement ('h4');
                dedicated.textContent = "Dedicated";
                divInfo.appendChild(dedicated);
                let dedicated1 = document.createElement ('p'); 
                dedicated1.textContent = temple[i].dedicated;
                divInfo.appendChild(dedicated1);
                    
                let address = document.createElement ('h4');
                address.textContent = "Address";
                divInfo.appendChild(address);
                let address1 = document.createElement ('p');
                address1.textContent = temple[i].address1 + "<br>" +temple[i].address2 + "<br>" +temple[i].address3;
                divInfo.appendChild(address1);

                let phone = document.createElement ('h4');
                phone.textContent = "Telephone";
                divInfo.appendChild(phone);
                let phone1 = document.createElement ('p');
                phone1.textContent = temple[i].phone;
                divInfo.appendChild(phone1);

                let email= document.createElement ('h4');
                email.textContent = "Email";
                divInfo.appendChild(email);
                let email1 = document.createElement ('p')
                email1.textContent = temple[i].email;
                divInfo.appendChild(email1);


    let templeImage = document.createElement('img');
        templeImage.setAttribute('src', temple[i].photo);
        templeImage.setAttribute('alt', temple[i].name);


        document.querySelector('section.templeHeroContainer').appendChild(divInfo);
        document.querySelector('section.templeHeroContainer').appendChild(templeImage);
        
        

 //-------------------------- Sechedule ---------------------------        
        let divSchedule = document.createElement('div');
        divSchedule.className = "templeSchedule";
        
               
     
        let h3Schedule =document.createElement('h3');
        h3Schedule.textContent = "Endowment Schedule";
        divSchedule.appendChild(h3Schedule);
        let pSchedule = document.createElement('p')
        pSchedule.textContent = temple[i].sessionschedule;
        divSchedule.appendChild(pSchedule);

        let h3ordinance =document.createElement('h3');
        h3ordinance.textContent = "Ordinance Schedule";
        divSchedule.appendChild(h3ordinance);
        let pordinance = document.createElement('p')
        pordinance.textContent = temple[i].ordanceschedule;
        divSchedule.appendChild(pordinance);


 //-------------------------- Services ---------------------------    

        let divServices = document.createElement('div');
        divServices.className = "templeServices";
        
     
        let h3Services =document.createElement('h3');
        h3Services.textContent = "Services Offered";
        divServices.appendChild(h3Services);

        let ulServices = document.createElement ('ul');
            ulServices.className = "ulServices";
            divServices.appendChild(ulServices);
        
            let sb = temple[i].services;
            for (let s = 0; s < sb.length ; s++ ){
                const liServices = document.createElement('li');
                liServices .className = "event";
                liServices .textContent = temple[i].services[s];
                ulServices.appendChild(liServices );
                console.log(sb.length); 
              }   

 //-------------------------- Closures ---------------------------  
        let divClosure = document.createElement('div');
        divClosure.className = "templeClosures";
                
     
        let h3Closure =document.createElement('h3');
        h3Closure.textContent = "Temple Closures";
        divClosure.appendChild(h3Closure);


        let ulclosure = document.createElement ('ul');
            ulclosure.className = "ulClosure";
            divClosure.appendChild(ulclosure);
        
            let cb = temple[i].closures;
            for (let e = 0; e < cb.length ; e++ ){
                const liClosure = document.createElement('li');
                liClosure .className = "event";
                liClosure .textContent = temple[i].closures[e];
                ulclosure.appendChild(liClosure );
                console.log(cb.length); 
              }   

//------------------------------ Forcast --------------------------------------------
              let divForcast = document.createElement('div');
              divForcast.className = "templeForcast";


    document.querySelector('section.templeHeroContainer').appendChild(divSchedule);
    document.querySelector('section.templeHeroContainer').appendChild(divServices);
    document.querySelector('section.templeHeroContainer').appendChild(divClosure);
    document.querySelector('section.templeHeroContainer').appendChild(divForcast);
//------------------------------ Forcast --------------------------------------------
if (temple[i].name == "Rome Italy Temple")
          { 

            const forcastURL = "https://api.openweathermap.org/data/2.5/forecast?id=6539761&appid=e49b9555dc54df76f65cc2c7338a5181&units=imperial";
            fetch(forcastURL)
                .then((response) => response.json())
                .then((jsObject) => {
               //  console.log(jsObject);
           
           

                let day = 0;
             for (let i = 0; i < jsObject.list.length; i++) {
           
               if (jsObject.list[i].dt_txt.includes('18:00:00')) {
                 
                let olDays= document.createElement('ol')
                divForcast.appendChild(olDays)


                 const li = document.createElement('li');
                 li.className = "dayone";
                 olDays.appendChild(li);
                 
           
                 let dayShort= new Date(jsObject.list[i].dt_txt);
                 let weekDay = {weekday: 'short'};
                 let forecastDay = dayShort.toLocaleDateString('en-US', weekDay);
               //   console.log(forecastDay);
                 
                 const h4 = document.createElement("h4");
                 h4.className = "dayShort";
                 h4.textContent=forecastDay;
                 li.appendChild(h4);
           
           
                 let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
               //   console.log(imagesrc);
                 
                 const image = document.createElement("img");
                 image.className ="weathericon";
                 image.setAttribute('src', imagesrc);
                 image.setAttribute('alt', "weather icon");
                 li.appendChild(image);
           
           
                 let forecastTemp= (jsObject.list[i].main.temp.toFixed(0));
               //   console.log(forecastTemp);
                 
                 const h5 = document.createElement("h5");
                 h5.textContent=forecastTemp+ ' °F';
                 li.appendChild(h5);
           
           
                 let desc = jsObject.list[i].weather[0].description;
               //   console.log(desc);
           
                 const h6 = document.createElement("h6");
                 h6.textContent=desc;
                 li.appendChild(h6);
           
           
                       
                  
           
           
               }
             }
           
           
            
            });    




          }
//-------------------------------------  End Rome Weather ---------------------------------------- 
   
   
if (temple[i].name == "Nauvoo Illinois Temple")
{ 

  const forcastURL = "https://api.openweathermap.org/data/2.5/forecast?id=4903330&appid=e49b9555dc54df76f65cc2c7338a5181&units=imperial";
  fetch(forcastURL)
      .then((response) => response.json())
      .then((jsObject) => {
     //  console.log(jsObject);
 
 

      let day = 0;
   for (let i = 0; i < jsObject.list.length; i++) {
 
     if (jsObject.list[i].dt_txt.includes('18:00:00')) {
       
      let olDays= document.createElement('ol')
      divForcast.appendChild(olDays)


       const li = document.createElement('li');
       li.className = "dayone";
       olDays.appendChild(li);
       
 
       let dayShort= new Date(jsObject.list[i].dt_txt);
       let weekDay = {weekday: 'short'};
       let forecastDay = dayShort.toLocaleDateString('en-US', weekDay);
     //   console.log(forecastDay);
       
       const h4 = document.createElement("h4");
       h4.className = "dayShort";
       h4.textContent=forecastDay;
       li.appendChild(h4);
 
 
       let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
     //   console.log(imagesrc);
       
       const image = document.createElement("img");
       image.className ="weathericon";
       image.setAttribute('src', imagesrc);
       image.setAttribute('alt', "weather icon");
       li.appendChild(image);
 
 
       let forecastTemp= (jsObject.list[i].main.temp.toFixed(0));
     //   console.log(forecastTemp);
       
       const h5 = document.createElement("h5");
       h5.textContent=forecastTemp+ ' °F';
       li.appendChild(h5);
 
 
       let desc = jsObject.list[i].weather[0].description;
     //   console.log(desc);
 
       const h6 = document.createElement("h6");
       h6.textContent=desc;
       li.appendChild(h6);
 
 
             
        
 
 
     }
   }
 
 
  
  });    




}
//-------------------------------------  End Nauvoo Weather ----------------------------------------   
   
if (temple[i].name == "Salt Lake City Temple")
{ 

  const forcastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5780993&appid=e49b9555dc54df76f65cc2c7338a5181&units=imperial";
  fetch(forcastURL)
      .then((response) => response.json())
      .then((jsObject) => {
     //  console.log(jsObject);
 
 

      let day = 0;
   for (let i = 0; i < jsObject.list.length; i++) {
 
     if (jsObject.list[i].dt_txt.includes('18:00:00')) {
       
      let olDays= document.createElement('ol')
      divForcast.appendChild(olDays)


       const li = document.createElement('li');
       li.className = "dayone";
       olDays.appendChild(li);
       
 
       let dayShort= new Date(jsObject.list[i].dt_txt);
       let weekDay = {weekday: 'short'};
       let forecastDay = dayShort.toLocaleDateString('en-US', weekDay);
     //   console.log(forecastDay);
       
       const h4 = document.createElement("h4");
       h4.className = "dayShort";
       h4.textContent=forecastDay;
       li.appendChild(h4);
 
 
       let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
     //   console.log(imagesrc);
       
       const image = document.createElement("img");
       image.className ="weathericon";
       image.setAttribute('src', imagesrc);
       image.setAttribute('alt', "weather icon");
       li.appendChild(image);
 
 
       let forecastTemp= (jsObject.list[i].main.temp.toFixed(0));
     //   console.log(forecastTemp);
       
       const h5 = document.createElement("h5");
       h5.textContent=forecastTemp+ ' °F';
       li.appendChild(h5);
 
 
       let desc = jsObject.list[i].weather[0].description;
     //   console.log(desc);
 
       const h6 = document.createElement("h6");
       h6.textContent=desc;
       li.appendChild(h6);
 
 
             
        
 
 
     }
   }
 
 
  
  });    




}
//-------------------------------------  End SLC Weather ----------------------------------------   
   
if (temple[i].name == "Newport Beach California Temple")
{ 

  const forcastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5376890&appid=e49b9555dc54df76f65cc2c7338a5181&units=imperial";
  fetch(forcastURL)
      .then((response) => response.json())
      .then((jsObject) => {
     //  console.log(jsObject);
 
 

      let day = 0;
   for (let i = 0; i < jsObject.list.length; i++) {
 
     if (jsObject.list[i].dt_txt.includes('18:00:00')) {
       
      let olDays= document.createElement('ol')
      divForcast.appendChild(olDays)


       const li = document.createElement('li');
       li.className = "dayone";
       olDays.appendChild(li);
       
 
       let dayShort= new Date(jsObject.list[i].dt_txt);
       let weekDay = {weekday: 'short'};
       let forecastDay = dayShort.toLocaleDateString('en-US', weekDay);
     //   console.log(forecastDay);
       
       const h4 = document.createElement("h4");
       h4.className = "dayShort";
       h4.textContent=forecastDay;
       li.appendChild(h4);
 
 
       let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
     //   console.log(imagesrc);
       
       const image = document.createElement("img");
       image.className ="weathericon";
       image.setAttribute('src', imagesrc);
       image.setAttribute('alt', "weather icon");
       li.appendChild(image);
 
 
       let forecastTemp= (jsObject.list[i].main.temp.toFixed(0));
     //   console.log(forecastTemp);
       
       const h5 = document.createElement("h5");
       h5.textContent=forecastTemp+ ' °F';
       li.appendChild(h5);
 
 
       let desc = jsObject.list[i].weather[0].description;
     //   console.log(desc);
 
       const h6 = document.createElement("h6");
       h6.textContent=desc;
       li.appendChild(h6);
 
 
             
        
 
 
     }
   }
 
 
  
  });    




}
//-------------------------------------  End Newport Weather ----------------------------------------     
if (temple[i].name == "Bern Switzerland Temple")
{ 

  const forcastURL = "https://api.openweathermap.org/data/2.5/forecast?id=2661552&appid=e49b9555dc54df76f65cc2c7338a5181&units=imperial";
  fetch(forcastURL)
      .then((response) => response.json())
      .then((jsObject) => {
     //  console.log(jsObject);
 
 

      let day = 0;
   for (let i = 0; i < jsObject.list.length; i++) {
 
     if (jsObject.list[i].dt_txt.includes('18:00:00')) {
       
      let olDays= document.createElement('ol')
      divForcast.appendChild(olDays)


       const li = document.createElement('li');
       li.className = "dayone";
       olDays.appendChild(li);
       
 
       let dayShort= new Date(jsObject.list[i].dt_txt);
       let weekDay = {weekday: 'short'};
       let forecastDay = dayShort.toLocaleDateString('en-US', weekDay);
     //   console.log(forecastDay);
       
       const h4 = document.createElement("h4");
       h4.className = "dayShort";
       h4.textContent=forecastDay;
       li.appendChild(h4);
 
 
       let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
     //   console.log(imagesrc);
       
       const image = document.createElement("img");
       image.className ="weathericon";
       image.setAttribute('src', imagesrc);
       image.setAttribute('alt', "weather icon");
       li.appendChild(image);
 
 
       let forecastTemp= (jsObject.list[i].main.temp.toFixed(0));
     //   console.log(forecastTemp);
       
       const h5 = document.createElement("h5");
       h5.textContent=forecastTemp+ ' °F';
       li.appendChild(h5);
 
 
       let desc = jsObject.list[i].weather[0].description;
     //   console.log(desc);
 
       const h6 = document.createElement("h6");
       h6.textContent=desc;
       li.appendChild(h6);
 
 
             
        
 
 
     }
   }
 
 
  
  });    




}
//-------------------------------------  End Newport Weather ----------------------------------------     
  
   
   
   
        }
  


 
 });    

