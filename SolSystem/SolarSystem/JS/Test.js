class SolarSystem{
	constructor(){
		this.unterval; 
		this.area = {
			canvas : document.createElement("canvas"),
		start : function() {
			this.canvas.width = window.innerWidth;
			this.canvas.height = window.innerHeight;
			this.context = this.canvas.getContext("2d");
			document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		},
		stop : function() {
			clearInterval(this.interval);
		},    
		clear : function() {
			this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		}}
		
		this.Start = function(){
			this.area.start();
			this.unterval = setInterval(this.Update,40);
		}

		this.Stop = function(){
			
		}
		this.Update = function() {
			this.area.context.clearRect(0, 0, this.area.canvas.width, this.area.canvas.height)
		}
	}
}

this.System = new SolarSystem();

StartSim = function(){
	this.System.Start();
	ctx = this.System.area.context;
	ctx.fillStyle = "red";
	ctx.fillRect(10, 10, 100, 100);
}

