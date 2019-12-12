 //------------------------------- Temple Info -------------------------------------------------------

 const templeURL = "https://shakerbaker78.github.io./temple-inn/data/temple-info.json";
fetch(templeURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject); //temporary checking for valid response and data parsing
    const temple = jsonObject['temples'];

    for (let i = 0; i < temple.length; i++ ) {
                  
       
    let h2 =document.createElement('h2');
        h2.className = "templeName"; 

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
                announced1.textContent = temples[i].announced;
                divInfo.appendChild(announced1); 

                let ground = document.createElement ('h4');
                ground.textContent = "Ground Breaking";
                divInfo.appendChild(ground);
                let ground1 = document.createElement ('p'); 
                ground1.textContent = temples[i].groundbreaking;
                divInfo.appendChild(ground1);

                let dedicated = document.createElement ('h4');
                dedicated.textContent = "Dedicated";
                divInfo.appendChild(dedicated);
                let dedicated1 = document.createElement ('p'); 
                dedicated1.textContent = temples[i].dedicated;
                divInfo.appendChild(dedicated1);
                    
                let address = document.createElement ('h4');
                address.textContent = "Address";
                divInfo.appendChild(address);
                let address1 = document.createElement ('p');
                address1.textContent = temples[i].address1 + "<br>" +temples[i].address2 + "<br>" +temples[i].address3;
                divInfo.appendChild(address1);

                let phone = document.createElement ('h4');
                phone.textContent = "Telephone";
                divInfo.appendChild(phone);
                let phone1 = document.createElement ('p');
                phone1.textContent = temples[i].phone;
                divInfo.appendChild(phone1);

                let email= document.createElement ('h4');
                email.textContent = "Email";
                divInfo.appendChild(email);
                let email1 = document.createElement ('p')
                email1.textContent = temples[i].email;
                divInfo.appendChild(email1);


    let templeImage = document.createElement('img');
        templeImage.setAttribute('src', temples[i].photo);
        templeImage.setAttribute('alt', temples[i].name);
        templeHeroContainer.appendChild(templeImage);


        document.querySelector('section.templeHeroContainer').appendChild(divInfo);
        
        
//---------------------- This goes inside the closures section --------------------------------- 

 //-------------------------- Sechedule ---------------------------        
        let divSchedule = document.createElement('div');
        divSchedule.className = "templeSchedule";
        closures.appendChild(divSchedule);        
     
        let h3Schedule =document.createElement('h3');
        h3Schedule.textContent = "Endowment Schedule";
        divSchedule.appendChild(h3Schedule);
        let pSchedule = document.createElement('p')
        pSchedule.textContent = temples[i].session-schedule;
        divSchedule.appendChild(pSchedule);

        let h3ordinance =document.createElement('h3');
        email1.textContent = temples[i].email;
        divSchedule.appendChild(email1);
        let pordinance = document.createElement('p')
        email1.textContent = temples[i].email;
        divSchedule.appendChild(email1);


 //-------------------------- Services ---------------------------    

        let divServices = document.createElement('div');
        divServices.className = "templeServices";
        closures.appendChild(divServices);        
     
        let h3Services =document.createElement('h3');
        h3Services.textContent = "Services Offered";
        divSchedule.appendChild(h3Services);

        let ulServices = document.createElement ('ul');
            ulServices.className = "ulServices";
        
            for (let s = 0; s <= 4 ; s++ ){
                const liServices = document.createElement('li');
                liServices .className = "event";
                liServices .textContent = temples[i].services[s];
                document.querySelector('ul.ulServices').appendChild(liServices );
                console.log(temples[i].services[s].length); 
              }   

 //-------------------------- Closures ---------------------------  
        let divClosure = document.createElement('div');
        divClosure.className = "templeClosures";
        closures.appendChild(divClosure);        
     
        let h3Closure =document.createElement('h3');
        h3Closure.textContent = "Temple Closures";
        divSchedule.appendChild(h3Closure);


        let ulclosure = document.createElement ('ul');
            ulclosure.className = "ulClosure";
        
            for (let e = 0; e <= 10 ; e++ ){
                const liClosure = document.createElement('li');
                liClosure .className = "event";
                liClosure .textContent = temples[i].closures[e];
                document.querySelector('ul.ulClosure').appendChild(liClosure );
                console.log(temples[i].closures[e].length); 
              }   




    }
  


 
 });    

