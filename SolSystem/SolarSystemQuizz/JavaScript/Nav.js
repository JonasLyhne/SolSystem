function Toggle(){
    let button = document.getElementById("navToggler");
    let body = document.getElementById("navbody");
    if(body.hidden == true){
        body.hidden = false;
        button.innerHTML = ">>";
        button.className = "menuToggleIn";
        
    }else{
        body.hidden = true;
        button.innerHTML = "<<";
        button.className = "menuToggleOut";
    }
}
function MakeNavBar(){
    let container = document.createElement("div");
    
    let navbody = document.createElement("div");
    navbody.className = "navbody";
    navbody.id ="navbody";
    navbody.hidden = true;
    container.append(navbody);

    let side = document.createElement("a");
    side.href = "index.html"
    side.innerHTML = "solsystemet";
    side.className = "navcontent";
    navbody.append(side);
    side = document.createElement("a");
    side.href = "question.html"
    side.innerHTML = "Quiz";
    side.className = "navcontent";
    navbody.append(side);
    side = document.createElement("a");
    side.href = "Information.html"
    side.innerHTML = "Information";
    side.className = "navcontent";
    navbody.append(side);
    side = document.createElement("a");
    side.href = "GravitySimulation.html"
    side.innerHTML = "Byg et solsystem";
    side.className = "navcontent";
    navbody.append(side);


    let button = document.createElement("button");
    button.className = "menuToggleOut";
    button.onclick = function () { Toggle() };
    button.id = "navToggler";
    button.innerHTML = "<<";
    container.append(button);
    
    document.body.insertBefore(container,document.body.childNodes[0]);
}

