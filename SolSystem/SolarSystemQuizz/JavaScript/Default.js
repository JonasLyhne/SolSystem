var Interval;
var bool;
function set(obj) {
    localStorage.yourObject = JSON.stringify(obj);
}

function get() {
    return obj = JSON.parse(localStorage.yourObject || "{}");
}


function ShowAgeHelper(){
    showHelper();
    clearInterval(Interval);
}

function chooseAge(ageTier){
    set({classTier: ageTier, date: Date.now()})
    hideHelper();
    Interval = setInterval(ShowAgeHelper,300000);
}


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

function hideHelper(){
    let button = document.getElementById("HelperToggler");
    let body = document.getElementById("Helper");
    body.style.display = "none";
    button.innerHTML = "<<";
    button.className = "helperToggleOut";
    button.onclick = function(){ShowAgeHelper()};
}
function showHelper(){
    let button = document.getElementById("HelperToggler");
    let body = document.getElementById("Helper");
    body.style.display = "grid";
    button.innerHTML = ">>";
    button.className = "helperToggleIn";
    button.onclick = function() {chooseAge(get().classTier)};
}

function Make(){
    MakeAgeHelper();
    MakeNavBar();
    if(get() != "{}"){
        let date = new Date(get().date);
        if(date.setMilliseconds(date.getMilliseconds()+300000) > Date.now()){
            let extratime = Math.abs(date.getTime() - new Date(Date.now()).getTime());
            Interval = setInterval(ShowAgeHelper,extratime);
            hideHelper();
        }
    }
}

function MakeAgeHelper(){
    let container = document.createElement("div");
    
    let helpbody = document.createElement("div");
    helpbody.className = "helperbody";
    helpbody.id ="Helper";
    container.append(helpbody);

    let button = document.createElement("button");
    button.onclick = function () {chooseAge(0);}
    button.innerHTML = "0-1 klasse";
    button.className = "ageButton";
    helpbody.append(button);
    button = document.createElement("button");
    button.onclick = function () {chooseAge(1);}
    button.innerHTML = "2-3 klasse";
    button.className = "ageButton";
    helpbody.append(button);
    button = document.createElement("button");
    button.onclick = function () {chooseAge(2);}
    button.innerHTML = "4-5 klasse";
    button.className = "ageButton";
    helpbody.append(button);


    button = document.createElement("button");
    button.className = "helperToggleIn";
    button.onclick = function () { chooseAge(get().classTier) };
    button.id = "HelperToggler";
    button.innerHTML = ">>";
    container.append(button);
    
    document.body.insertBefore(container,document.body.childNodes[0]);
}

function MakeNavBar(){
    let container = document.createElement("div");
    
    let navbody = document.createElement("div");
    navbody.className = "navbody";
    navbody.id ="navbody";
    navbody.hidden = true;
    container.append(navbody);

    let side = document.createElement("a");
    side.href = "index.html";
    side.innerHTML = "solsystemet";
    side.className = "navcontent";
    navbody.append(side);
    side = document.createElement("a");
    side.href = "Quizz.html";
    side.innerHTML = "Quiz";
    side.className = "navcontent";
    navbody.append(side);
    // side = document.createElement("a");
    // side.href = "Information.html";
    // side.innerHTML = "Information";
    // side.className = "navcontent";
    // navbody.append(side);
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
