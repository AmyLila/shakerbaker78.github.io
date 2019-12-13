 //------------------------------- Temple Info -------------------------------------------------------

 const templesURL = "https://shakerbaker78.github.io./temple-inn/data/temple-info.json";
fetch(templesURL)
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
        divSchedule.appendChild(h3Services);

        let ulServices = document.createElement ('ul');
            ulServices.className = "ulServices";
        
            
            for (let s = 0; s <= 4 ; s++ ){
                let sb = temple[i].services[s];
                const liServices = document.createElement('li');
                liServices .className = "event";
                liServices .textContent = sb;
                ulServices.appendChild(liServices );
                // console.log(sb.length); 
              }   

 //-------------------------- Closures ---------------------------  
        let divClosure = document.createElement('div');
        divClosure.className = "templeClosures";
                
     
        let h3Closure =document.createElement('h3');
        h3Closure.textContent = "Temple Closures";
        divClosure.appendChild(h3Closure);


        let ulclosure = document.createElement ('ul');
            ulclosure.className = "ulClosure";
        
            for (let e = 0; e <= 10 ; e++ ){
                const liClosure = document.createElement('li');
                liClosure .className = "event";
                liClosure .textContent = temple[i].closures[e];
                ulclosure.appendChild(liClosure );
                // console.log(temple[i].closures[e].length); 
              }   


    document.querySelector('section.templeHeroContainer').appendChild(divSchedule);
    document.querySelector('section.templeHeroContainer').appendChild(divServices);
    document.querySelector('section.templeHeroContainer').appendChild(divClosure);

    }
  


 
 });    

