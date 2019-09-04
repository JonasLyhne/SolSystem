var Interval;
var bool;

//saves a obj on users pc
function set(obj) {
    localStorage.yourObject = JSON.stringify(obj);
}

//gets a obj from users pc
function get() {
    return obj = JSON.parse(localStorage.yourObject || "{}");
}

//shows the age helper
function ShowAgeHelper(){
    showHelper();
    //removes the interval
    clearInterval(Interval);
}

//sets the age
function chooseAge(ageTier){
    set({classTier: ageTier, date: Date.now()})
    hideHelper();
    //sets interval to 5min
    Interval = setInterval(ShowAgeHelper,300000);
}

//toggles the menubar
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

//hides the agehelper
function hideHelper(){
    let button = document.getElementById("HelperToggler");
    let body = document.getElementById("Helper");
    body.style.display = "none";
    button.innerHTML = "<<";
    button.className = "helperToggleOut";
    button.onclick = function(){ShowAgeHelper()};
}

//show the agehelper
function showHelper(){
    let button = document.getElementById("HelperToggler");
    let body = document.getElementById("Helper");
    body.style.display = "grid";
    button.innerHTML = ">>";
    button.className = "helperToggleIn";
    button.onclick = function() {chooseAge(get().classTier)};
}

//makes the gui
function Make(){
    MakeAgeHelper();
    MakeNavBar();
    //if the user have put age in
    if(get() != "{}"){
        //looks if it have been over 5mins
        let date = new Date(get().date);
        if(date.setMilliseconds(date.getMilliseconds()+300000) > Date.now()){
            //sets a interval so after 5min from the age have been put in
            let extratime = Math.abs(date.getTime() - new Date(Date.now()).getTime());
            Interval = setInterval(ShowAgeHelper,extratime);
            hideHelper();
        }
    }
}

//makes the agehelper 
function MakeAgeHelper(){
    let container = document.createElement("div");
    //creates the body for the helper
    let helpbody = document.createElement("div");
    helpbody.className = "helperbody";
    helpbody.id ="Helper";
    container.append(helpbody);

    //creates the buttons 
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

    //creates the show/hide
    button = document.createElement("button");
    button.className = "helperToggleIn";
    button.onclick = function () { chooseAge(get().classTier) };
    button.id = "HelperToggler";
    button.innerHTML = ">>";
    container.append(button);
    
    //inserts into the html
    document.body.insertBefore(container,document.body.childNodes[0]);
}

//makes the nav/menu-bar
function MakeNavBar(){
    let container = document.createElement("div");
    
    //makes the body for the menu
    let navbody = document.createElement("div");
    navbody.className = "navbody";
    navbody.id ="navbody";
    navbody.hidden = true;
    container.append(navbody);

    //creates all the links
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
    side = document.createElement("a");
    side.href = "GravitySimulation.html"
    side.innerHTML = "Byg et solsystem";
    side.className = "navcontent";
    navbody.append(side);

    //creates the show/hide button
    let button = document.createElement("button");
    button.className = "menuToggleOut";
    button.onclick = function () { Toggle() };
    button.id = "navToggler";
    button.innerHTML = "<<";
    container.append(button);
    
    //insertes into the html
    document.body.insertBefore(container,document.body.childNodes[0]);
}
