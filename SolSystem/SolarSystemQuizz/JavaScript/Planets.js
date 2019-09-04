//a array of the planets
var mySun;
var GetSolarSystemUri = "api/getsolarsystem";
var GetSolarSystemInfoUri = "api/GetInfo";
var SolarSystemInfo;
var SolarSystemInfoNameIdlist;
//var classTier = 0;
//the screen size
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
// Ajax Help page: https://docs.microsoft.com/en-us/aspnet/web-api/overview/getting-started-with-aspnet-web-api/tutorial-your-first-web-api

//gets the solarsystem from the api
$(document).ready(function() {
    $.ajax({
        type: "get",
        url: GetSolarSystemUri,
        contentType: "application/json;",
        dataType: "json",
        success: function(data) {
            startPlanets(data);
        },
        error: function(err) {
            alert(err.d);
        }
    });
});

//gets all the information from the api
$(document).ready(function() {
    $.ajax({
        type: "get",
        url: GetSolarSystemInfoUri,
        contentType: "application/json;",
        dataType: "json",
        success: function(data) {
            SolarSystemInfo = data;
            SolarSystemInfoNameIdlist = new Array(SolarSystemInfo.length);
            for(let i = 0; i < SolarSystemInfo.length; i++){
                SolarSystemInfoNameIdlist[i] = SolarSystemInfo[i].Name;
            }
        },
        error: function(err) {
            alert(err.d);
        }
    });
});

    let nextDistand = 0;
    let size = 55;
    let fastestRevolution = 5067032;
    let planetSize;
    let distandJump = screenHeight/2/11;
    //setsup the solarsystem to emulate a real solarsystem
    function startPlanets(sun) {
        //makes the sun
        mySun = new Sun(sun.Name,sun.Image,new Array(sun.Planets.length));

        //makes a size array in order of showing what is biggest
        let tmpPlanets = new Array(sun.Planets.length);
        for(let i = 0; i < tmpPlanets.length; i++){
            tmpPlanets[i] = sun.Planets[i];
        }
        let tmpPlanetSize = tmpPlanets.sort(compare);
        planetSize = new Array(tmpPlanetSize.length);
        for(let i = 0; i < planetSize.length; i++){
            planetSize[i] = tmpPlanetSize[i].Name;
        }

        //makes all the planets
        for(let i = 0; i < mySun.children.length; i++){
            let planet = sun.Planets[i];
            //addes it to the suns childrens
            mySun.children[i] = new Planet(planet.Name,planet.PeriodOfRevolution,planet.Moons.length,planet.Image);
            //makes all the moons
            for(let y = 0; y < planet.Moons.length; y++){
                let moon = planet.Moons[y];
                //addes it to the planets childrens
                mySun.children[i].children[y] = new Moon(moon.Name,moon.PeriodOfRevolution,moon.Image);
            }
        }
        myArea.start();
    }
    //use to sort by diameter
    function compare( a, b ) {
        if ( a.Diameter < b.Diameter ){
          return 1;
        }
        if ( a.Diameter > b.Diameter ){
          return -1;
        }
        return 0;
      }

      //the canves to draw the trail
    var myArea = {

        canvas: document.createElement("canvas"),
        start : function() {
            this.interval = setInterval(updateArea, 50); 

            this.canvas.width = screenWidth;
            this.canvas.height = screenHeight;
            this.canvas.className = "backGround";
            this.context = this.canvas.getContext("2d");

            document.body.insertBefore(this.canvas, document.body.childNodes[0]);

            mySun.Create();
        },
        stop : function() {
            clearInterval(this.interval);
        },    
}    

    //updates everything
    function updateArea() {
            mySun.Update();
        }
        
    //shows the information about the planet
    function showInfo(planet){;
        let classTier = get();
        console.log(classTier);
        let infoholder = SolarSystemInfo[SolarSystemInfoNameIdlist.indexOf(planet.name)]
        let infoContent = document.getElementById("infoContent");
        infoContent.innerHTML = '';
        for(let i = 0; i < infoholder.Information.length; i++){
            if(infoholder.Information[i].ClassTier == get().classTier){
                let paragraph = document.createElement("p");
                paragraph.className = "text";
                paragraph.innerHTML = ("<b>"+ infoholder.Information[i].Title+":</b> "+infoholder.Information[i].Info);
                infoContent.append(paragraph);
            }
        }
        document.getElementById("planetName").innerHTML = planet.name;
        document.getElementById("image").src = planet.image;
        document.getElementById("info").hidden = false;
        document.getElementById("fill").hidden = false;
    }
    
    //closes the information about the planet
    function closeInfo(planetName){
        document.getElementById("info").hidden = true;
        document.getElementById("fill").hidden = true;
    }

    //draws the planets 
    function DrawPlanet(planet) {
        let div = document.createElement("div");
        div.style.backgroundImage = "url(" + planet.image + ")";
        div.style.marginLeft = planet.x - planet.width / 2 + "px";
        div.style.marginTop = planet.y - planet.width / 2 + "px";
        div.style.width = planet.width + "px";
        div.style.height = planet.width + "px";
        div.className += "planet";
        div.onclick = function () { showInfo(planet) };
        div.id = planet.name;
        document.body.insertBefore(div, document.body.childNodes[0]);
    }

    //class for Sun that dont move 
class Sun{
    //constructor that makes the sun
    constructor(name, image, children){
        //centers the sun
        this.x = (screenWidth / 4*2) - 30;
        this.y = (screenHeight/ 2) - 30;
        this.width = 60;
        this.name = name;
        this.image = image;
        this.children = children;
        nextDistand += 75;  
    }
    //updates all the children
    Update(){
        for(let i = 0; i < this.children.length; i++){
            this.children[i].Update([this.x,this.y]);
        }
        this.Draw();
    }

    //updates the sun in the gui
    Draw(){
        let div = document.getElementById(this.name);
        div.style.marginLeft = this.x - this.width / 2  + "px";
        div.style.marginTop = this.y - this.width / 2 + "px";
        let ctx = myArea.context;
        ctx.fillStyle = "#ff99ff22";
        ctx.fillRect(this.x, this.y, 2, 2);
    }   
    
    //creates the planet in the gui
    Create(){
        DrawPlanet(this);
        for(let i = 0; i < this.children.length; i++){
            this.children[i].Create();
        }
    }
}

    //class for planets the moves and have childrens 
class Planet{
    constructor(name, revolution, children, image){
        this.angle = Math.floor(Math.random() * 360);
        this.speed = fastestRevolution/revolution*3;
        this.width = 60-5*planetSize.indexOf(name);
        this.x = (screenWidth / 4*2)- nextDistand - this.width/2;
        this.y = (screenHeight/ 2) - this.width/2;
        this.distance = nextDistand;
        this.name = name;
        this.image = image;
        this.children = new Array(children);
        nextDistand += distandJump;  
    }
    //updates the position
    Update(parentXY) {
        this.x = (this.distance * Math.cos(this.angle*(Math.PI/180))) + parentXY[0];
        this.y = (this.distance * Math.sin(this.angle*(Math.PI/180))) + parentXY[1];
        this.angle += this.speed;
        for(let i = 0; i < this.children.length; i++){
            this.children[i].Update([this.x,this.y]);
        }
        this.Draw();
    }
    
    //draws the planet in gui
    Draw(){
        let div = document.getElementById(this.name);
        div.style.marginLeft = this.x - this.width / 2  + "px";
        div.style.marginTop = this.y - this.width / 2 + "px";
        let ctx = myArea.context;
        ctx.fillStyle = "#ff99ff22";
        ctx.fillRect(this.x, this.y, 2, 2);
    }
    
    //draws the planet in gui
    Create(){
        DrawPlanet(this);
        for(let i = 0; i < this.children.length; i++){
            this.children[i].Create();
        }
    }      
}

//class of a moon that cant have chilrens
class Moon{
    constructor(name, revolution, image){
        this.angle = Math.floor(Math.random() * 360);
        this.speed = revolution/fastestRevolution*3;
        this.x = 0;
        this.y = 0;
        this.distance = 35;
        this.width = 20;
        this.name = name;
        this.image = image;
    }
    
    //updates the position
    Update(parentXY) {
        this.x = (this.distance * Math.cos(this.angle*(Math.PI/180))) + parentXY[0];
        this.y = (this.distance * Math.sin(this.angle*(Math.PI/180))) + parentXY[1];
        this.angle += this.speed;
        this.Draw();
    }

    //draws the moon in gui
    Draw(){
        let div = document.getElementById(this.name);
        div.style.marginLeft = this.x - this.width / 2  + "px";
        div.style.marginTop = this.y - this.width / 2 + "px";
        let ctx = myArea.context;
        ctx.fillStyle = "#ff99ff22";
        ctx.fillRect(this.x, this.y, 2, 2);
    }    
    
    //draws the planet in gui
    Create(){
        DrawPlanet(this);
    }  
}