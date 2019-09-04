
//a array of the planets
var myPlanets;

var speed12 = false;
var speedextra = [0,0];
var countsafty = 0;
var newPlanetMade;
var newPlanet;
var time1;
var time2;
//a array of the option 
var planetOptions;

var realSpeed = 30;
let real = true;
//the screen size
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

var GetSolarSystemUri = "api/getsolarsystem";

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
if (real) {

    // 1 px = x km
    let ratio = 10000000*2 / ((screenHeight+screenWidth)/2)
    //downscaling
    let scaling = 200;
    function startPlanets(mySystem) {
        let totalplanets = 1+ mySystem.Planets.length;
        for(let i = 0; i < mySystem.Planets.length; i++){
            totalplanets += mySystem.Planets[i].Moons.length;
        }
        planetOptions = new Array(totalplanets);

        planetOptions[0] = new Planet(mySystem.Diameter,mySystem.Diameter,mySystem.Mass,0,0,0,"#ffffff",mySystem.Name,mySystem.Image);
        let count = 1;
        for(let i = 0; i < mySystem.Planets.length; i++){
            let planet = mySystem.Planets[i];
            planetOptions[count] = new Planet(planet.Diameter,planet.Diameter,planet.Mass,0,0,0,"#ffffff",planet.Name,planet.Image);
            count++;
            for(let y = 0; y < planet.Moons.length; y++){
                let moon = planet.Moons[y];
                planetOptions[count] = new Planet(moon.Diameter,moon.Diameter,moon.Mass,0,0,0,"#ffffff",moon.Name,moon.Image);
                count++;
            }
        }
        document.onmouseup = function () { mouseUp() };
        document.ontouchend = function () { mouseUp() };
        myPlanets = [];
        for(let i = 0; i < planetOptions.length; i++){  
            showOptions(planetOptions[i]);
        }
        myArea.start();
    }
    
    function showOptions (planet){
        let ol = document.createElement("ol");
        ol.style.backgroundImage = "url(" + planet.Image + ")";
        ol.className += "planetOption";
        ol.id = planet.Name + "templade";
        ol.onmousedown = function () { click(planet) };
        ol.ontouchstart = function () { click(planet) };
        document.getElementById("planetlist").appendChild(ol);
    }
    
    function addNewPlanet(){
        let array = myPlanets;
        myPlanets = new Array(array.length+1);
        for(let i = 0; i < array.length; i++){
            myPlanets[i] = array[i];
        }
        let difx;
        let dify;
        if(!speed12){
            difx = newPlanet.speed[0] - speedextra[0];
            dify = newPlanet.speed[1] - speedextra[1];
        }else{
            difx = speedextra[0] - newPlanet.speed[0];
            dify = speedextra[1] - newPlanet.speed[1];
        }
        let total = Math.sqrt((difx)**2) + Math.sqrt((dify)**2);
        let dif = [difx/total,dify/total];

            if(speed12){
                let time = time1 - time2;
                newPlanet.speed[0] =((1000/(time*-1))*scaling*ratio/10)*dif[0];
                newPlanet.speed[1] =((1000/(time*-1))*scaling*ratio/10)*dif[1];
            }else{
                let time = time2 - time1;
                newPlanet.speed[0] =((1000/(time*-1))*scaling*ratio/10)*dif[0];
                newPlanet.speed[1] =((1000/(time*-1))*scaling*ratio/10)*dif[1];
            }
        myPlanets[array.length] = newPlanet;
    }

    function mouseUp(){
        if(newPlanetMade && newPlanet != null){
            addNewPlanet();
        }
        click(newPlanet);
        newPlanetMade = false;
    }

    function click(planet){
        // if(newPlanet != null){
        //     newPlanet.Remove();
        // }
        countsafty += 1;
        newPlanetMade = false;
        newPlanet = new Planet(planet.Width,planet.Height,planet.Mass,planet.X,planet.Y,0,planet.Color,planet.Name,planet.Image);
        newPlanet.Name += countsafty;
    }

    function move (mouse){
        if(newPlanet != null && newPlanetMade == false){
            //console.log(newPlanet.Name + " " + mouse.clientX + " " + mouse.clientY);
            DrawPlanet(newPlanet, mouse.clientX, mouse.clientY);
            newPlanetMade = true;
        }else if(newPlanet != null){
            movePlanet(mouse.clientX,mouse.clientY);
        }

    }

    function movePlanet(x,y){
        var tmpPlanet = document.getElementById(newPlanet.Name);
        tmpPlanet.style.marginLeft =  x - 10 + "px";
        tmpPlanet.style.marginTop =  y - 10 + "px";
        newPlanet.X = x*scaling*ratio;
        newPlanet.Y = y*scaling*ratio;
            if(speed12){
                time1 = new Date();
                newPlanet.speed[0] = x;
                newPlanet.speed[1] = y;
        }else{
            time2 = new Date();
            speedextra[0] = x;
            speedextra[1] = y;
        }
        speed12 = !speed12;

    }
    
    var myArea = {
        canvas: document.createElement("canvas"),
        start : function() {
            this.interval = setInterval(updateArea, 30);
            this.canvas.width = screenWidth;
            this.canvas.height = screenHeight;
            this.canvas.className = "backGround";
            this.canvas.onmousemove = function (event) { move(event) };
            this.canvas.ontouchmove = function (event) { move(event) };
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
        for(let c = 0; c < 1; c++){

            //calculates the movement of each planet
            for(let i = 0; i < myPlanets.length; i++){
                let movex = 0;
                let movey = 0;
                if(myPlanets[i] != null){

                    //calculates the gravity force for the planet and every other planet
                    for(let y = 0; y < myPlanets.length; y++){
                    if(y != i && myPlanets[y] != null){
                        
                        //#region 
                        
                        //calculates the gravity force/speed 
                        let force =
                        gravityMove(
                            (
                                (distance(
                                    myPlanets[i].X,
                                    myPlanets[i].Y,
                                    myPlanets[y].X,
                                    myPlanets[y].Y
                                    ))
                                    ),
                                    myPlanets[y].Mass
                                    )/1000*2.2**realSpeed;
                                    
                                    //#endregion
                                    
                                    //applying the force/speed
                                    let lengthToX = (myPlanets[i].X+(myPlanets[i].Width/2*-1) - myPlanets[y].X+(myPlanets[y].Width/2))*-1;
                                    let lengthToY = (myPlanets[i].Y+(myPlanets[i].Width/2*-1) - myPlanets[y].Y+(myPlanets[y].Width/2))*-1;
                                    
                                    let maxPixelDef = Math.sqrt(lengthToX**2)+Math.sqrt(lengthToY**2);
                                    
                                    let defX = lengthToX/maxPixelDef;
                                    let defY = lengthToY/maxPixelDef;
                                    
                                    //let force = myPlanets[y].Gravity;
                                    
                                    movex += force*defX;
                                    movey += force*defY;
                                }
                            }
                                //gives it a new planet
                                myPlanets[i].newPos(movex, movey);
                                if((myPlanets[i].X/scaling)/ratio < 0 || (myPlanets[i].X/scaling)/ratio > screenWidth || (myPlanets[i].Y/scaling)/ratio < 0 || (myPlanets[i].Y/scaling)/ratio > screenHeight){
                                    myPlanets[i].Remove();
                                    myPlanets[i] = null;
                                }
                                
                            }
                        }
                            
                        }
            for(let i = 0; i < myPlanets.length; i++){
                //updates the planet
                
                if(myPlanets[i] != null){
                myPlanets[i].update();
                }
            }
        }
            
    //makes a planet
    class Planet {
        constructor(width, height, mass, x, y, gravity, color, name, image) {
            this.Gravity = gravity;
            this.X = x * scaling * ratio;
            this.Y = y * scaling * ratio;
            this.Width = width;
            this.Height = height;
            this.Name = name;
            this.Image = image;
            this.Mass = mass;
            this.Color = color;
            this.speed = [0, 0];
            //updates the position of the planet
            this.update = function () {
                let div = document.getElementById(this.Name);
                div.style.marginLeft = (this.X / scaling) / ratio - 10 + "px";
                div.style.marginTop = (this.Y / scaling) / ratio - 10 + "px";
                let ctx = myArea.context;
                ctx.fillStyle = "#ffddff22";
                ctx.fillRect((this.X / scaling) / ratio, (this.Y / scaling) / ratio, 1, 1);
            };
            //gives it a new location
            this.newPos = function (movex, movey) {
                this.speed[0] += movex;
                this.speed[1] += movey;
                this.X += this.speed[0];
                this.Y += this.speed[1];
            };
            this.Remove = function() {
                let div = document.getElementById(this.Name);
                div.remove();
            }
        }
    }

    //converts from force to speed
    function ForceToSpeed(force,mass){
        return (force/mass)/1000;
    }

        //calculates the gravity force between 2 planets
    function gravityMove(distance,Mass){
        let g = 6.67 * Math.pow(10,-11);
        return (g*(Mass/Math.pow(distance*1000,2)));
    }
        
    //calculates the distance between two points
    function distance(x1,y1,x2,y2){
        return Math.sqrt(Math.pow((x1-x2),2)+Math.pow((y1-y2),2));
    }

    //calculates the starting velcity a planet needs to orbit the center
    function Velocity(mass, radius){
        let g = 6.67 * Math.pow(10,-11);
        return Math.sqrt(g*mass/radius);
    }

    //draws the planets 
    function DrawPlanet(planet,x,y) {
        let div = document.createElement("div");
        div.style.backgroundImage = "url(" + planet.Image + ")";
        div.style.marginLeft = x - 10 + "px";
        div.style.marginTop = y - 10 + "px";
        div.className += "planet";
        div.id = planet.Name;
        document.body.insertBefore(div, document.body.childNodes[0]);
    }
}