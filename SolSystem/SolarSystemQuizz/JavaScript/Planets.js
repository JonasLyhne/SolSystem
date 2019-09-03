
//a array of the planets
var mySun;
var GetSolarSystemUri = "api/getsolarsystem";

//the screen size
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
// Ajax Help page: https://docs.microsoft.com/en-us/aspnet/web-api/overview/getting-started-with-aspnet-web-api/tutorial-your-first-web-api

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
    console.log(mySolarSystem);
});

    let nextDistand = 0;
    let size = 55;
    let fastestRevolution = 5067032;
    let planetSize;
    function startPlanets(sun) {
        //planets with faces
        // myPlanets = [
        //         new Planet("sun","Sun",70,0,"./Pics/ComicPlanet/Sun.png"),
        //         new Planet("merkur","Planet",40,3,"./Pics/ComicPlanet/Merkur.png"),
        //         new Planet("venus","Planet",49,0.45,"./Pics/ComicPlanet/Venus.png"),
        //         new Planet("Earth","Planet",50,0.72,"./Pics/ComicPlanet/Earth.png"),
        //         new Moon("moon","Moon",20,2.65,"./Pics/ComicPlanet/Moon.png"),
        //         new Planet("Mars","Planet",40,0.38,"./Pics/ComicPlanet/Mars.png"),
        //         new Planet("jupiter","Planet",65,0.06,"./Pics/ComicPlanet/Jupiter.png"),
        //         new Planet("saturn","Planet",60,0.02,"./Pics/ComicPlanet/Saturn.png"),
        //         new Planet("Uranus","Planet",50,0.009,"./Pics/ComicPlanet/Uranus.png"),
        //         new Planet("Neptune","Planet",60,0.005,"./Pics/ComicPlanet/Neptune.png"),
        //         new Planet("Pluto","Planet",30,0.003,"./Pics/ComicPlanet/Pluto.png"),
        //     ];
        mySun = new Sun(sun.Name,sun.Image,new Array(sun.Planets.length));
        let tmpPlanets = new Array(sun.Planets.length);
        for(let i = 0; i < tmpPlanets.length; i++){
            tmpPlanets[i] = sun.Planets[i];
        }
        let tmpPlanetSize = tmpPlanets.sort(compare);
        planetSize = new Array(tmpPlanetSize.length);
        for(let i = 0; i < planetSize.length; i++){
            planetSize[i] = tmpPlanetSize[i].Name;
        }
        for(let i = 0; i < mySun.childs.length; i++){
            let planet = sun.Planets[i];
            mySun.childs[i] = new Planet(planet.Name,planet.PeriodOfRevolution,planet.Moons.length,planet.Image);
            for(let y = 0; y < planet.Moons.length; y++){
                let moon = planet.Moons[y];
                mySun.childs[i].childs[y] = new Moon(moon.Name,moon.PeriodOfRevolution,moon.Image);
            }
        }
        myArea.start();
    }
    function compare( a, b ) {
        if ( a.Diameter < b.Diameter ){
          return 1;
        }
        if ( a.Diameter > b.Diameter ){
          return -1;
        }
        return 0;
      }

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
            //document.body.onmousedown = function(){showInfo("test")}
        },
        stop : function() {
            clearInterval(this.interval);
        },    
}    

    //updates everything
    function updateArea() {
            mySun.Update();
        }

        // //makes a planet
        // function Planet(name,type, width, speed, image){
        //     this.Type = type;
        //     this.Angle = 0;
        //     this.Speed = speed;
        //     this.X = (screenWidth / 4*2)- nextDistand - 25;
        //     this.Y = (screenHeight/ 2) - 25;
        //     this.Distance = nextDistand;
        //     this.Width = width;
        //     this.Name = name;
        //     this.Image = image;
        //     nextDistand += 50;    

        //     //updates the position of the planet
        //     this.update = function() {
        //         let div = document.getElementById(this.Name);
        //         div.style.marginLeft = this.X - this.Width/2  + "px";
        //         div.style.marginTop = this.Y - this.Width / 2 + "px";
        //         let ctx = myArea.context;
        //         ctx.fillStyle = "#ffddff22";
        //         ctx.fillRect(this.X, this.Y, 2, 2);
        //     }
                
        //     //gives it a new location
        //     this.newPos = function(newX,newY) {
        //         this.X = newX;    
        //         this.Y = newY;
        //     }
        // }

        // //makes a planet
        // function Moon(name, type, width, speed, image){
        //     this.Type = type;
        //     this.Angle = 0;
        //     this.Speed = speed;
        //     this.X = 0;
        //     this.Y = 0;
        //     this.Distance = 35;
        //     this.Width = width;
        //     this.Name = name;
        //     this.Image = image;

        //     //updates the position of the planet
        //     this.update = function(viewX,viewY) {
        //         let div = document.getElementById(this.Name);
        //         div.style.marginLeft = viewX - this.Width/2  + "px";
        //         div.style.marginTop = viewY - this.Width / 2 + "px";
        //         let ctx = myArea.context;
        //         ctx.fillStyle = "#ff99ff22";
        //         ctx.fillRect(viewX, viewY, 2, 2);
        //     }
                
        //     //gives it a new location
        //     this.newPos = function(newX,newY) {
        //         this.X = newX;    
        //         this.Y = newY;
        //     }
        // }


        
    //shows the information about the planet
    function showInfo(planet){;
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

class Sun{
    constructor(name, image, childs){
        this.x = (screenWidth / 4*2) - 30;
        this.y = (screenHeight/ 2) - 30;
        this.width = 60;
        this.name = name;
        this.image = image;
        this.childs = childs;
        nextDistand += 75;  
    }
    Update(){
        for(let i = 0; i < this.childs.length; i++){
            this.childs[i].Update([this.x,this.y]);
        }
        this.Draw();
    }

    Draw(){
        let div = document.getElementById(this.name);
        div.style.marginLeft = this.x - this.width / 2  + "px";
        div.style.marginTop = this.y - this.width / 2 + "px";
        let ctx = myArea.context;
        ctx.fillStyle = "#ff99ff22";
        ctx.fillRect(this.x, this.y, 2, 2);
    }   
    
    Create(){
        DrawPlanet(this);
        for(let i = 0; i < this.childs.length; i++){
            this.childs[i].Create();
        }
    }
}

class Planet{
    constructor(name, revolution, childs, image){
        this.angle = Math.floor(Math.random() * 360);
        this.speed = fastestRevolution/revolution*3;
        this.width = 60-5*planetSize.indexOf(name);
        this.x = (screenWidth / 4*2)- nextDistand - this.width/2;
        this.y = (screenHeight/ 2) - this.width/2;
        this.distance = nextDistand;
        this.name = name;
        this.image = image;
        this.childs = new Array(childs);
        nextDistand += 55;  
    }
    Update(parentXY) {
        this.x = (this.distance * Math.cos(this.angle*(Math.PI/180))) + parentXY[0];
        this.y = (this.distance * Math.sin(this.angle*(Math.PI/180))) + parentXY[1];
        this.angle += this.speed;
        for(let i = 0; i < this.childs.length; i++){
            this.childs[i].Update([this.x,this.y]);
        }
        this.Draw();
    }
    

    Draw(){
        let div = document.getElementById(this.name);
        div.style.marginLeft = this.x - this.width / 2  + "px";
        div.style.marginTop = this.y - this.width / 2 + "px";
        let ctx = myArea.context;
        ctx.fillStyle = "#ff99ff22";
        ctx.fillRect(this.x, this.y, 2, 2);
    }
    Create(){
        DrawPlanet(this);
        for(let i = 0; i < this.childs.length; i++){
            this.childs[i].Create();
        }
    }      
}

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
    Update(parentXY) {
        this.x = (this.distance * Math.cos(this.angle*(Math.PI/180))) + parentXY[0];
        this.y = (this.distance * Math.sin(this.angle*(Math.PI/180))) + parentXY[1];
        this.angle += this.speed;
        this.Draw();
    }

    Draw(){
        let div = document.getElementById(this.name);
        div.style.marginLeft = this.x - this.width / 2  + "px";
        div.style.marginTop = this.y - this.width / 2 + "px";
        let ctx = myArea.context;
        ctx.fillStyle = "#ff99ff22";
        ctx.fillRect(this.x, this.y, 2, 2);
    }    
    Create(){
        DrawPlanet(this);
    }  
}