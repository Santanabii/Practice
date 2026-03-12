
document.getElementById("form").addEventListener("submit", function(e){

    e.preventDefault();


    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    
    
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);

    showData();

});


function showData(){

    let name = localStorage.getItem("name");
    let age = localStorage.getItem("age");

   
    document.getElementById("greeting").innerHTML =
    "Hello " + name + "! Welcome.";

    
    let months = age * 12;

    document.getElementById("months").innerHTML =
    "You are " + months + " months old.";

    
    if(age >= 18){
        document.getElementById("adult").innerHTML =
        "You can access adult content.";
    }
    else{
        document.getElementById("adult").innerHTML =
        "You are too young for adult content.";
    }

    
    let quote = "Keep working hard and never give up";

    let text = "";

    for(let i = 0; i < 5; i++){
        text += "<p>" + quote + "</p>";
    }

    document.getElementById("quotes").innerHTML = text;

}



showData();