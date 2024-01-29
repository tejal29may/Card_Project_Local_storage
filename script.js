
if(storeInfo){ 
    let Fname=localStorage.getItem("FirstName")
    let Lname=localStorage.getItem("LastName")
    let Country=localStorage.getItem("country")
    let PhoneNumber=localStorage.getItem("PhoneNumbe")
    let State=localStorage.getItem("state")
    let City=localStorage.getItem("city")
    let Village=localStorage.getItem("village")
    
    let card=document.getElementById("card");
    let card1=document.createElement("div")
    card1.classList.add("userCard")
    card1.innerHTML=`
    <h1>User Information card</h1><br>
    <div class="fname">
    <p><span id="span">First name : <span>${Fname} </p>
     <p><span>Last name :<span> ${Lname}</p>
    <p><span>Country :<span> ${Country}</p>
    <p><span>Phone Number: <span>${PhoneNumber}</p>
    <p><span>State :<span> ${State}</p>
    <p><span>City : <span>${City}</p>
    <p><span>Village : <span>${Village}</p> 
    </div>
    `

    card.append(card1);  
}else{
    storeInfo();
}
function storeInfo(){
    let fname=prompt("Enter Your first Name");
    let lname=prompt("Enter Your Last Name")
    let country=prompt("Enter the country ")
    let pNumber=prompt("Enter Your Phone Number")
    let state=prompt("Enter Your State")
    let city=prompt("Enter City name")
    let village=prompt("Enter Your village Name")
    
    localStorage.setItem("FirstName",fname);
    localStorage.setItem("LastName",lname);
    localStorage.setItem("country",country);
    localStorage.setItem("PhoneNumber",pNumber);
    localStorage.setItem("state",state);
    localStorage.setItem("city",city)
    localStorage.setItem("village",village)
    
    let Fname=localStorage.getItem("FirstName")
    let Lname=localStorage.getItem("LastName")
    let Country=localStorage.getItem("country")
    let PhoneNumber=localStorage.getItem("PhoneNumbe")
    let State=localStorage.getItem("state")
    let City=localStorage.getItem("city")
    let Village=localStorage.getItem("village")
    
    
    let card=document.getElementById("card");
    let card1=document.createElement("div")
    card1.classList.add("userCard")
    card1.innerHTML=`
    <h1>User Information card</h1><br>
    <div class="fname">
    <p><span id="span">First name : <span>${Fname}</p>
    <p><span>Last name :<span> ${Lname}</p>
    <p><span>Country Name :<span> ${Country}</p>
    <p><span>Phone Number : <span>${PhoneNumber}</p>
    <p><span>State :<span> ${State}</p>
    <p><span>City Name : <span>${City}</p>
    <p><span>Village Name : <span>${Village}</p> 
    </div>
    `
    
    card.append(card1);   
}
// storeInfo();