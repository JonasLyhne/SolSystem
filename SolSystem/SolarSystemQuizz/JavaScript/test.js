﻿
//a array of the planets
var myPlanets;

let real = false;
//the screen size
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

function switchReal() {
    setCookie("showReal", "test", 30);
    console.log(getCookie("showReal"));
    console.log("ran");
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

    let nextDistand = 0;
    function startPlanets() {
        //planets with faces
        // myPlanets = [
                // new Planet("sun",70,0,"https://solarsystem.nasa.gov/system/basic_html_elements/11561_Sun.png"),
                // new Planet("merkur",40,3,"https://solarsystem.nasa.gov/system/basic_html_elements/x11732_mercury.png.pagespeed.ic.i4-Hz13_DV.png"),
                // new Planet("venus",49,0.45,"https://solarsystem.nasa.gov/system/basic_html_elements/x11733_venus.png.pagespeed.ic.VkWiDYC7tL.png"),
                // new Planet("Jorden",50,0.72,"https://solarsystem.nasa.gov/system/basic_html_elements/x11734_earth.png.pagespeed.ic.3ZifaCkqgf.png"),
                // new Moon("moon","Moon",20,2.65,"https://cdn.pixabay.com/photo/2014/04/02/17/07/full-moon-308007_960_720.png"),
                // new Planet("Mars",40,0.38,"https://solarsystem.nasa.gov/system/basic_html_elements/x11735_mars.png.pagespeed.ic.ezyHkOsck8.png"),
                // new Planet("jupiter",65,0.06,"https://solarsystem.nasa.gov/system/basic_html_elements/x11736_jupiter.png.pagespeed.ic.pbG_7LL2ap.png"),
                // new Planet("saturn",60,0.02,"https://astronlogia.com/wp-content/uploads/2009/06/saturn-256x256.png"),
                // new Planet("Uranus",50,0.009,"https://numerologi-fyn.dk/images/uranus.png"),
                // new Planet("Neptune",60,0.005,"https://solarsystem.nasa.gov/system/basic_html_elements/x11739_neptune.png.pagespeed.ic.QJUTj2bWVK.png"),
                // new Planet("Pluto",30,0.003,"https://solarsystem.nasa.gov/system/basic_html_elements/11669_Pluto_lrg.png"),
            // ];
            
            //normal real planets
            myPlanets = [
                new Planet("sun","Sun",70,0,"https://i.pinimg.com/originals/78/cf/9f/78cf9fa0e1591233e8a5d91322445057.gif"),
                new Planet("merkur","Planet",40,3,"https://image.jimcdn.com/app/cms/image/transf/dimension=169x1024:format=gif/path/s4d4073e514a7f469/image/ifb6718c1fb2f3bc1/version/1544192175/image.gif"),
                new Planet("venus","Planet",49,0.45,"https://i.pinimg.com/originals/6f/8c/da/6f8cda99bb66d88fd6d666fb025a0817.gif"),
                new Planet("Jorden","Planet",50,0.72,"https://acegif.com/wp-content/uploads/Earth.gif"),
                new Moon("moon","Moon",20,2.65,"https://upload.wikimedia.org/wikipedia/commons/1/1a/Moon_rotating_full_220px.gif"),
                new Planet("Mars","Planet",40,0.38,"https://i.pinimg.com/originals/2f/79/00/2f7900381868b32d000ac5307c13dba4.gif"),
                new Planet("jupiter","Planet",65,0.06,"https://i.pinimg.com/originals/18/65/39/186539daa969fe74a48c2f78c681b02d.gif"),
                new Planet("saturn","Planet",60,0.02,"https://i.pinimg.com/originals/7b/bf/dc/7bbfdc15f72495dd5669007d168e95e0.gif"),
                new Planet("Uranus","Planet",50,0.009,"http://exchangedownloads.smarttech.com/public/content/d5/d5cbaedf-360e-4ef1-8180-a0328ba80489/previews/small/0001.png"),
                new Planet("Neptune","Planet",60,0.005,"https://images.squarespace-cdn.com/content/v1/56a1a14b05caa7ee9f26f47d/1462450014420-7CF9LSAC2OBE37GVXQW1/ke17ZwdGBToddI8pDm48kCMWMBFcqQftRz-JqZZoIB5Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVH2l0Tw4P8eYMyOThp8q3kXICUSf-wwgstY-AWGRMkyhjqWIIaSPh2v08GbKqpiV54/image-asset.gif"),
                new Planet("Pluto","Planet",30,0.003,"https://img.webme.com/pic/u/ufovisitors/TethysRadar.gif"),
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
