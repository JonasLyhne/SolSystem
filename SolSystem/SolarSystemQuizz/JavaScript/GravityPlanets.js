
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

    // 1 px = x km
    let ratio = 10000000*2 / ((screenHeight+screenWidth)/2)
    //downscaling
    let scaling = 200;
    function startPlanets() {
        //planets with faces
        // myPlanets = [
            //     new Planet(1392000/10,1392000/10,1988430000000000000000000000000/scaling,0, "yellow","sun","https://solarsystem.nasa.gov/system/basic_html_elements/11561_Sun.png"),
            //     new Planet(4879/10,4879/10,330200000000000000000000/scaling,57522077*2/scaling,"gray","merkur","https://solarsystem.nasa.gov/system/basic_html_elements/x11732_mercury.png.pagespeed.ic.i4-Hz13_DV.png"),
            //     new Planet(12104/10,12104/10,4868500000000000000000000/scaling,108208926*2/scaling,"red","venus","https://solarsystem.nasa.gov/system/basic_html_elements/x11733_venus.png.pagespeed.ic.VkWiDYC7tL.png"),
            //     new Planet(12745.591/10,12745.591/10,5972230000000000000000000/scaling,149597887*2/scaling,"green","Earth","https://solarsystem.nasa.gov/system/basic_html_elements/x11734_earth.png.pagespeed.ic.3ZifaCkqgf.png"),
            //     new Planet(6773/10,6773/10,641850000000000000000000/scaling,227936637*2/scaling,"red","Mars","https://solarsystem.nasa.gov/system/basic_html_elements/x11735_mars.png.pagespeed.ic.ezyHkOsck8.png"),
            //     new Planet(138346.5/10,138346.5/10,1899000000000000000000000000/scaling,778412027/scaling,"lightbrown","jupiter","https://solarsystem.nasa.gov/system/basic_html_elements/x11736_jupiter.png.pagespeed.ic.pbG_7LL2ap.png"),
            //     new Planet(378675/10,378675/10,568460000000000000000000000/scaling,1426725413/1.3/scaling,"lightbrown","saturn","https://astronlogia.com/wp-content/uploads/2009/06/saturn-256x256.png"),
            //     new Planet(50532/10,50532/10,86832000000000000000000000/scaling,2870972220/2.1/scaling,"lightblue","Uranus","https://numerologi-fyn.dk/images/uranus.png"),
            //     new Planet(49104.5/10,49104.5/10,102430000000000000000000000/scaling,4498252900/2.5/scaling,"blue","Neptune","https://solarsystem.nasa.gov/system/basic_html_elements/x11739_neptune.png.pagespeed.ic.QJUTj2bWVK.png"),
            //     new Planet(2390/10,2390/10,12500000000000000000000/scaling,5906376272/2.5/scaling,"white","Pluto","https://solarsystem.nasa.gov/system/basic_html_elements/11669_Pluto_lrg.png"),
            // ];
            
            //normal real planets
            planetOptions = [

                new Planet(1392000,1392000,1988430000000000000000000000000,0,0,274, "yellow","sun","./Pics/RealPlanet/Sun.gif"),
                new Planet(4879,4879,330200000000000000000000,0,0,3.7,"gray","merkur","./Pics/RealPlanet/Merkur.gif"),
                new Planet(12104,12104,4868500000000000000000000,0,0,8.87,"red","venus","./Pics/RealPlanet/Venus.gif"),
                new Planet(12745.591,12745.591,5972230000000000000000000,0,0,9.798,"green","Jorden","./Pics/RealPlanet/Earth.gif"),
                new Planet(6773,6773,641850000000000000000000,0,0,3.71,"red","Mars","./Pics/RealPlanet/Mars.gif"),
                new Planet(138346.5,138346.5,1899000000000000000000000000,0,0,24.92,"brown","jupiter","./Pics/RealPlanet/Jupiter.gif"),
                new Planet(378675,378675,568460000000000000000000000,0,0,10.44,"lightbrown","saturn","./Pics/RealPlanet/Saturn.gif"),
                new Planet(50532,50532,86832000000000000000000000,0,0,8.87,"lightblue","Uranus","./Pics/RealPlanet/Uranus.gif"),
                new Planet(49104.5,49104.5,102430000000000000000000000,0,0,11.15,"blue","Neptune","./Pics/RealPlanet/Neptune.gif"),
                new Planet(2390,2390,12500000000000000000000,0,0,0.58,"white","Pluto","./Pics/RealPlanet/Pluto.gif"),
        ];
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
        tmpPlanet.style.marginLeft =  x - 5 + "px";
        tmpPlanet.style.marginTop =  y - 5 + "px";
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
            this.canvas.width = screenWidth - 50;
            this.canvas.height = screenHeight - 20;
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
                div.style.marginLeft = (this.X / scaling) / ratio - 5 + "px";
                div.style.marginTop = (this.Y / scaling) / ratio - 5 + "px";
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
        div.style.marginLeft = planet.X - 15 + "px";
        div.style.marginTop = planet.Y - 15 + "px";
        div.className += "planet";
        div.id = planet.Name;
        document.body.insertBefore(div, document.body.childNodes[0]);
    }
}
var planet = new Pl