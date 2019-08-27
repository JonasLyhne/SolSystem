
//a array of the planets
var myPlanets;

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
    let scaling = 400;
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
            myPlanets = [

                new Planet(1392000,1392000,1988430000000000000000000000000,0,274, "yellow","sun","./Pics/RealPlanet/Sun.gif"),
                new Planet(4879,4879,330200000000000000000000,57910000,3.7,"gray","merkur","./Pics/RealPlanet/Merkur.gif"),
                new Planet(12104,12104,4868500000000000000000000,108208926,8.87,"red","venus","./Pics/RealPlanet/Venus.gif"),
                new Planet(12745.591,12745.591,5972230000000000000000000,149597887,9.798,"green","Jorden","./Pics/RealPlanet/Earth.gif"),
                new Planet(6773,6773,641850000000000000000000,227936637,3.71,"red","Mars","./Pics/RealPlanet/Mars.gif"),
                new Planet(138346.5,138346.5,1899000000000000000000000000,778412027,24.92,"brown","jupiter","./Pics/RealPlanet/Jupiter.gif"),
                new Planet(378675,378675,568460000000000000000000000,1426725413,10.44,"lightbrown","saturn","./Pics/RealPlanet/Saturn.gif"),
                new Planet(50532,50532,86832000000000000000000000,2870972220,8.87,"lightblue","Uranus","./Pics/RealPlanet/Uranus.gif"),
                new Planet(49104.5,49104.5,102430000000000000000000000,4498252900,11.15,"blue","Neptune","./Pics/RealPlanet/Neptune.gif"),
                new Planet(2390,2390,12500000000000000000000,5906376272,0.58,"white","Pluto","./Pics/RealPlanet/Pluto.gif"),
        ];
        myArea.start();
    }
    
    
    // let exploding = "https://i.ya-webdesign.com/images/blast-vector-gif-animation.gif";
    // let hightechexpling = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8987f0cc-f0bd-4b74-9739-8ec82a79e15f/ddburtb-5d7f1385-bb9b-4a0e-a51a-5c460cf5f56c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg5ODdmMGNjLWYwYmQtNGI3NC05NzM5LThlYzgyYTc5ZTE1ZlwvZGRidXJ0Yi01ZDdmMTM4NS1iYjliLTRhMGUtYTUxYS01YzQ2MGNmNWY1NmMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pXsclxv3-pJX7gS5CkHW_JWr8arPsyM6bRdOeObojto";
    

    var myArea = {
            canvas: document.createElement("canvas"),
            start : function() {
                this.interval = setInterval(updateArea, 30);
                this.canvas.width = screenWidth - 50;
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
        for(let c = 0; c < 1; c++){

            //calculates the movement of each planet
            for(let i = 0; i < myPlanets.length; i++){
                let movex = 0;
                let movey = 0;

                if(i != 0){
                //calculates the gravity force for the planet and every other planet
                for(let y = 0; y < myPlanets.length; y++){
                    if(y != i){

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
                                    console.log(force);
                                }
                                }
                                //gives it a new planet
                                myPlanets[i].newPos(movex, movey);
                            }
                    
                        }
            }
            for(let i = 0; i < myPlanets.length; i++){
                //updates the planet
                myPlanets[i].update();
            }
        }
            
    //makes a planet
    function Planet(width, height, mass, distanceFromcenter, gravity, color, name, image){
        this.Gravity = gravity;
        this.X = (screenWidth / 2)- 5 + (distanceFromcenter);
        this.Y = 0;
        this.Width = width;
        this.Height = height;
        this.Name = name;
        this.Image = image;
        this.Mass = mass;
        this.Color = color;
        //if it is in the center it dont gets a calculated speed
        if(distanceFromcenter > 0){
            this.speed = [0,Velocity(1988430000000000000000000000000,distanceFromcenter)/360*realSpeed**2];
            // this.speed = [0,48.03*realSpeed];
        }else{
            this.speed = [0,0];
        }
            
        //updates the position of the planet
        this.update = function() {
            let div = document.getElementById(this.Name);
            div.style.marginLeft = (screenWidth / 2) + (this.X/scaling)/ratio - 5 + "px";
            div.style.marginTop = (screenHeight / 2) + (this.Y/scaling)/ratio - 5 + "px";
            let ctx = myArea.context;
            ctx.fillStyle = "#ffddff22";
            ctx.fillRect((screenWidth / 2) + (this.X/scaling)/ratio, (screenHeight / 2) + (this.Y/scaling)/ratio, 1, 1);
        }
            
        //gives it a new location
        this.newPos = function(movex,movey) {
            this.speed[0] += movex; 
            this.speed[1] += movey;
            // if(this.speed[0] > screenWidth+400 || this.speed[0] < -400){
            //     this.speed[0] = this.speed[0]*-1;
            // }
            // if(this.speed[1] > screenHeight+400 || this.speed[1] < -400){
            //     this.speed[1] = this.speed[1]*-1;
            // }
            this.X += this.speed[0];    
            this.Y += this.speed[1];
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
    function DrawPlanet(planet) {
        let div = document.createElement("div");
        div.style.backgroundImage = "url(" + planet.Image + ")";
        div.style.marginLeft = planet.X - 5 + "px";
        div.style.marginTop = planet.Y - 5 + "px";
        div.className += "planet";
        div.onclick = function () { showInfo(planet) };
        div.id = planet.Name;
        document.body.insertBefore(div, document.body.childNodes[0]);
    }
}