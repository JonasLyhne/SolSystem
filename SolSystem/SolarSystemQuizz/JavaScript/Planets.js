
//a array of the planets
var myPlanets;
var mySolarSystem;
var GetSolarSystemUri = 'api/GetSolarSystem';

//the screen size
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
// Ajax Help page: https://docs.microsoft.com/en-us/aspnet/web-api/overview/getting-started-with-aspnet-web-api/tutorial-your-first-web-api
$(document).ready(function() {
    $.getJSON(GetSolarSystemUri).done(function(data) {
        mySolarSystem = data;
    });
});

console.log(mySolarSystem);
    // function switchReal() {
    //     setCookie("showReal", "test", 30);
    //     console.log(getCookie("showReal"));
    //     console.log("ran");
    // }

    // function setCookie(cname, cvalue, exdays) {
    //     var d = new Date();
    //     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    //     var expires = "expires=" + d.toGMTString();
    //     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    // }

    // function getCookie(cname) {
    //     var name = cname + "=";
    //     var decodedCookie = decodeURIComponent(document.cookie);
    //     var ca = decodedCookie.split(';');
    //     for (var i = 0; i < ca.length; i++) {
    //         var c = ca[i];
    //         while (c.charAt(0) == ' ') {
    //             c = c.substring(1);
    //         }
    //         if (c.indexOf(name) == 0) {
    //             return c.substring(name.length, c.length);
    //         }
    //     }
    //     return "";
    // }

if (real) {

}else{
    let nextDistand = 0;
    function startPlanets() {
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
            
            //normal real planets
            myPlanets = [
                new Planet("sun","Sun",70,0,'./Pics/RealPlanet/Sun.gif'),
                new Planet("merkur","Planet",40,3,"./Pics/RealPlanet/Merkur.gif"),
                new Planet("venus","Planet",49,0.45,"./Pics/RealPlanet/Venus.gif"),
                new Planet("Earth","Planet",50,0.72,"./Pics/RealPlanet/Earth.gif"),
                new Moon("moon","Moon",20,2.65,"./Pics/RealPlanet/Moon.gif"),
                new Planet("Mars","Planet",40,0.38,"./Pics/RealPlanet/Mars.gif"),
                new Planet("jupiter","Planet",65,0.06,"./Pics/RealPlanet/Jupiter.gif"),
                new Planet("saturn","Planet",60,0.02,"./Pics/RealPlanet/Saturn.gif"),
                new Planet("Uranus","Planet",50,0.009,"./Pics/RealPlanet/Uranus.gif"),
                new Planet("Neptune","Planet",60,0.005,"./Pics/RealPlanet/Neptune.gif"),
                new Planet("Pluto","Planet",30,0.003,"./Pics/RealPlanet/Pluto.gif"),
        ];
        myArea.start();
    }

    var myArea = {

        canvas: document.createElement("canvas"),
        start : function() {
            this.interval = setInterval(updateArea, 50); 

            this.canvas.width = screenWidth-50;
            this.canvas.height = screenHeight - 20;
            this.canvas.className = "backGround";
            this.context = this.canvas.getContext("2d");

            document.body.insertBefore(this.canvas, document.body.childNodes[0]);

            for(let i = 0; i < myPlanets.length; i++){
                DrawPlanet(myPlanets[i]);
            }
            //document.body.onmousedown = function(){showInfo("test")}
        },
        stop : function() {
            clearInterval(this.interval);
        },    
        clear : function() {
        }
}    

    //updates everything
    function updateArea() {
        myArea.clear();
            
            //calculates the movement of each planet
            for(let i = 0; i < myPlanets.length; i++){
                if(i != 0){
                        let newX;
                        let newY;
                        newX = myPlanets[i].Distance * Math.cos(myPlanets[i].Angle*(Math.PI/180));
                        newY = myPlanets[i].Distance * Math.sin(myPlanets[i].Angle*(Math.PI/180));
                        
                        if(myPlanets[i].Type == "Planet"){
                            newX += myPlanets[0].X;
                            newY += myPlanets[0].Y;
                        }else if(myPlanets[i].Type == "Moon"){
                            newX += myPlanets[i-1].X;
                            newY += myPlanets[i-1].Y;
                        }
                        myPlanets[i].Angle += myPlanets[i].Speed;
                        //gives it a new planet
                        myPlanets[i].newPos(newX,newY);
                        if(myPlanets[i].Type == "Moon"){    
                            //updates the planet
                            myPlanets[i].update(newX,newY);        
                        }else{
                            myPlanets[i].update();
                        }
                        console.log(myPlanets[i].Distance);
                }
            }
        }

        //makes a planet
        function Planet(name,type, width, speed, image){
            this.Type = type;
            this.Angle = 0;
            this.Speed = speed;
            this.X = (screenWidth / 4*2)- nextDistand - 25;
            this.Y = (screenHeight/ 2) - 25;
            this.Distance = nextDistand;
            this.Width = width;
            this.Name = name;
            this.Image = image;
            nextDistand += 50;    

            //updates the position of the planet
            this.update = function() {
                let div = document.getElementById(this.Name);
                div.style.marginLeft = this.X - this.Width/2  + "px";
                div.style.marginTop = this.Y - this.Width / 2 + "px";
                let ctx = myArea.context;
                ctx.fillStyle = "#ffddff22";
                ctx.fillRect(this.X, this.Y, 2, 2);
            }
                
            //gives it a new location
            this.newPos = function(newX,newY) {
                this.X = newX;    
                this.Y = newY;
            }
        }

        //makes a planet
        function Moon(name,type, width, speed, image){
            this.Type = type;
            this.Angle = 0;
            this.Speed = speed;
            this.X = 0;
            this.Y = 0;
            this.Distance = 35;
            this.Width = width;
            this.Name = name;
            this.Image = image;

            //updates the position of the planet
            this.update = function(viewX,viewY) {
                let div = document.getElementById(this.Name);
                div.style.marginLeft = viewX - this.Width/2  + "px";
                div.style.marginTop = viewY - this.Width / 2 + "px";
                let ctx = myArea.context;
                ctx.fillStyle = "#ff99ff22";
                ctx.fillRect(viewX, viewY, 2, 2);
            }
                
            //gives it a new location
            this.newPos = function(newX,newY) {
                this.X = newX;    
                this.Y = newY;
            }
        }
    //shows the information about the planet
    function showInfo(planet){;
        document.getElementById("planetName").innerHTML = planet.Name;
        document.getElementById("image").src = planet.Image;
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
        div.style.backgroundImage = "url(" + planet.Image + ")";
        div.style.marginLeft = planet.X - planet.Width / 2 + "px";
        div.style.marginTop = planet.Y - planet.Width / 2 + "px";
        div.style.width = planet.Width + "px";
        div.style.height = planet.Width + "px";
        div.className += "planet";
        div.onclick = function () { showInfo(planet) };
        div.id = planet.Name;
        document.body.insertBefore(div, document.body.childNodes[0]);
    }