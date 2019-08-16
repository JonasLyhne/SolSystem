﻿
var myPlanets;

let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
let ratio = 10000000*2 / ((screenHeight+screenWidth)/2)
let scral = 200;
// let exploding = "https://i.ya-webdesign.com/images/blast-vector-gif-animation.gif";
// let hightechexpling = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8987f0cc-f0bd-4b74-9739-8ec82a79e15f/ddburtb-5d7f1385-bb9b-4a0e-a51a-5c460cf5f56c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg5ODdmMGNjLWYwYmQtNGI3NC05NzM5LThlYzgyYTc5ZTE1ZlwvZGRidXJ0Yi01ZDdmMTM4NS1iYjliLTRhMGUtYTUxYS01YzQ2MGNmNWY1NmMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pXsclxv3-pJX7gS5CkHW_JWr8arPsyM6bRdOeObojto";

function startGame() {

    // myPlanets = [
    //     new Planet(1392000/10,1392000/10,1988430000000000000000000000000/scral,0, "yellow","sun","https://solarsystem.nasa.gov/system/basic_html_elements/11561_Sun.png"),
    //     new Planet(4879/10,4879/10,330200000000000000000000/scral,57522077*2/scral,"gray","merkur","https://solarsystem.nasa.gov/system/basic_html_elements/x11732_mercury.png.pagespeed.ic.i4-Hz13_DV.png"),
    //     new Planet(12104/10,12104/10,4868500000000000000000000/scral,108208926*2/scral,"red","venus","https://solarsystem.nasa.gov/system/basic_html_elements/x11733_venus.png.pagespeed.ic.VkWiDYC7tL.png"),
    //     new Planet(12745.591/10,12745.591/10,5972230000000000000000000/scral,149597887*2/scral,"green","Jorden","https://solarsystem.nasa.gov/system/basic_html_elements/x11734_earth.png.pagespeed.ic.3ZifaCkqgf.png"),
    //     new Planet(6773/10,6773/10,641850000000000000000000/scral,227936637*2/scral,"red","Mars","https://solarsystem.nasa.gov/system/basic_html_elements/x11735_mars.png.pagespeed.ic.ezyHkOsck8.png"),
    //     new Planet(138346.5/10,138346.5/10,1899000000000000000000000000/scral,778412027/scral,"lightbrown","jupiter","https://solarsystem.nasa.gov/system/basic_html_elements/x11736_jupiter.png.pagespeed.ic.pbG_7LL2ap.png"),
    //     new Planet(378675/10,378675/10,568460000000000000000000000/scral,1426725413/1.3/scral,"lightbrown","saturn","https://astronlogia.com/wp-content/uploads/2009/06/saturn-256x256.png"),
    //     new Planet(50532/10,50532/10,86832000000000000000000000/scral,2870972220/2.1/scral,"lightblue","Uranus","https://numerologi-fyn.dk/images/uranus.png"),
    //     new Planet(49104.5/10,49104.5/10,102430000000000000000000000/scral,4498252900/2.5/scral,"blue","Neptune","https://solarsystem.nasa.gov/system/basic_html_elements/x11739_neptune.png.pagespeed.ic.QJUTj2bWVK.png"),
    //     new Planet(2390/10,2390/10,12500000000000000000000/scral,5906376272/2.5/scral,"white","Pluto","https://solarsystem.nasa.gov/system/basic_html_elements/11669_Pluto_lrg.png"),
    // ];

    myPlanets = [
        new Planet(1392000/10,1392000/10,1988430000000000000000000000000/scral,0, "yellow","sun","https://vignette.wikia.nocookie.net/thesolarsystem6361/images/5/59/Sun_spacepedia.png/revision/latest?cb=20180301152819"),
        new Planet(4879/10,4879/10,330200000000000000000000/scral,57522077*2/scral,"gray","merkur","https://image.jimcdn.com/app/cms/image/transf/dimension=169x1024:format=gif/path/s4d4073e514a7f469/image/ifb6718c1fb2f3bc1/version/1544192175/image.gif"),
        new Planet(12104/10,12104/10,4868500000000000000000000/scral,108208926*2/scral,"red","venus","https://i.pinimg.com/originals/6f/8c/da/6f8cda99bb66d88fd6d666fb025a0817.gif"),
        new Planet(12745.591/10,12745.591/10,5972230000000000000000000/scral,149597887*2/scral,"green","Jorden","https://acegif.com/wp-content/uploads/Earth.gif"),
        new Planet(6773/10,6773/10,641850000000000000000000/scral,227936637*2/scral,"red","Mars","https://media.giphy.com/media/JRZwMhzk7WolG/giphy.gif"),
        new Planet(138346.5/10,138346.5/10,1899000000000000000000000000/scral,778412027/scral,"brown","jupiter","https://i.pinimg.com/originals/18/65/39/186539daa969fe74a48c2f78c681b02d.gif"),
        new Planet(378675/10,378675/10,568460000000000000000000000/scral,1426725413/scral,"lightbrown","saturn","https://i.pinimg.com/originals/7b/bf/dc/7bbfdc15f72495dd5669007d168e95e0.gif"),
        new Planet(50532/10,50532/10,86832000000000000000000000/scral,2870972220/2.5/scral,"lightblue","Uranus","http://exchangedownloads.smarttech.com/public/content/d5/d5cbaedf-360e-4ef1-8180-a0328ba80489/previews/small/0001.png"),
        new Planet(49104.5/10,49104.5/10,102430000000000000000000000/scral,4498252900/2.5/scral,"blue","Neptune","https://images.squarespace-cdn.com/content/v1/56a1a14b05caa7ee9f26f47d/1462450014420-7CF9LSAC2OBE37GVXQW1/ke17ZwdGBToddI8pDm48kCMWMBFcqQftRz-JqZZoIB5Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVH2l0Tw4P8eYMyOThp8q3kXICUSf-wwgstY-AWGRMkyhjqWIIaSPh2v08GbKqpiV54/image-asset.gif"),
        new Planet(2390/10,2390/10,12500000000000000000000/scral,5906376272/2.5/scral,"white","Pluto","https://img.webme.com/pic/u/ufovisitors/TethysRadar.gif"),
    ];
        myArea.start();
    }
    
    var myArea = {
        start : function() {
            this.interval = setInterval(updateArea,30); 
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

function DrawPlanet(planet){
    let div = document.createElement("div");
    div.style.backgroundImage = "url(" + planet.Image + ")";
    div.style.marginLeft = planet.X-25 + "px";
    div.style.marginTop = planet.Y-25 + "px";
    div.className += "planet";
    div.onclick = function(){showInfo(planet)};
    div.id = planet.Name;
    document.body.insertBefore(div,document.body.childNodes[0]);
}


//shows the information about the planet
function showInfo(planet){;
    document.getElementById("planetName").innerHTML = planet.Name;
    document.getElementById("image").src = planet.Image;
    document.getElementById("info").hidden = false;
    document.getElementById("fill").hidden = false;
}

function closeInfo(planetName){
    document.getElementById("info").hidden = true;
    document.getElementById("fill").hidden = true;
}

//updates everything
function updateArea() {
    myArea.clear();
    //calcuates moves 10 times every time the image gets opdated
    for(let x = 0; x < 10; x++){
        
        //calculates the movement of each planet
        for(let i = 0; i < myPlanets.length; i++){
            let movex = 0;
            let movey = 0;
                //calculates the gravity 11 times
                for(let c = 0; c < 11; c++){
                    //calculates the gravity force for the planet and every other planet
                    for(let y = 0; y < myPlanets.length; y++){
                        if(y != i && i != 0){
                            let force = ForceToSpeed(gravityMove(
                            (
                                (distance(
                                    myPlanets[i].X+(myPlanets[i].Width/2),
                                    myPlanets[i].Y+(myPlanets[i].Height/2),
                                    myPlanets[y].X+(myPlanets[y].Width/2),
                                    myPlanets[y].Y+(myPlanets[y].Height/2)
                                    ))*ratio*1000),
                                    myPlanets[i].Mass,
                                    myPlanets[y].Mass
                                    ),
                                    myPlanets[i].Mass);
                                    
                                    let defX =myPlanets[i].X+(myPlanets[i].Width/2*-1) - myPlanets[y].X+(myPlanets[y].Width/2*-1);
                                    let defY = myPlanets[i].Y+(myPlanets[i].Height/2*-1) - myPlanets[y].Y+(myPlanets[y].Height/2*-1);
                                    let speedPerPixel = (force/(Math.sqrt(defX*defX)+Math.sqrt(defY*defY)))*210/ratio;
                                    movex += (speedPerPixel*defX)*-1;
                                    movey += (speedPerPixel*defY)*-1;
                                    
                                }
                            }
                            //gives it a new planet
                            myPlanets[i].newPos(movex,movey);
                        }
            }
        }
        //updates each planet
        for(let i = 0; i < myPlanets.length; i++){
            myPlanets[i].update();
            
    }
}

//makes a planet
function Planet(width, height, mass,distanceFromcenter, color, name, image){
    this.X = (screenWidth / 2)- (width/ratio/2) - (distanceFromcenter/ratio);
    this.Y = (screenHeight/ 2) - (height/ratio/2);
    this.Width = width/ratio;
    this.Height = height/ratio;
    this.Name = name;
    this.Image = image;
    this.Mass = mass;
    this.Color = color;
    //if it is in the center it dont gets a calculated speed
    if(distanceFromcenter > 0){
        this.speed = [0,Velocity(1988430000000000000000000000000/scral,distanceFromcenter)/1000/ratio];
    }else{
        this.speed = [0,0];
    }

    //updates the position of the planet
    this.update = function() {
        let div = document.getElementById(this.Name);
        div.style.marginLeft = this.X-25  + "px";
        div.style.marginTop = this.Y-25  + "px";
    }
    
    //gives it a new location
    this.newPos = function(movex,movey) {
        this.speed[0] += movex; 
        this.speed[1] += movey;
        if(this.speed[0] > screenWidth+400 || this.speed[0] < -400){
            this.speed[0] = this.speed[0]*-1;
        }
        if(this.speed[1] > screenHeight+400 || this.speed[1] < -400){
            this.speed[1] = this.speed[1]*-1;
            
        }
        this.X += this.speed[0];    
        this.Y += this.speed[1];
    }
}

//converts from force to speed
function ForceToSpeed(force,mass){
    return (force/mass)/1000;
}

//calculates the gravity force between 2 planets
function gravityMove(distance,mass1,mass2){
    let mass = mass1 * mass2;
    let g = 6.67 * Math.pow(10,-11);
    return (g*mass1*mass2/Math.pow(distance,2));
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