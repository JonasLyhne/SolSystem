use solarsystem;

/*adds all the info to element*/
INSERT INTO Element (Name,Mass,Diameter,MinTemp,MaxTemp,MeanTemp,RotationPeriod,RingSystem)VALUES('Solen',1988430000000000000000000000000,1392000,5506,5506,5506,"0a27d6t36m0s",1);
INSERT INTO Element (Name,Mass,Diameter,MinTemp,MaxTemp,MeanTemp,RotationPeriod,RingSystem)VALUES('Merkur',330200000000000000000000,4879,-180,-180,167,"0a58d15t30m32s",0);
INSERT INTO Element (Name,Mass,Diameter,MinTemp,MaxTemp,MeanTemp,RotationPeriod,RingSystem)VALUES('Venus',48685000000000000000000000,12104,465,465,464,"0a224d16t49m23s",0);
INSERT INTO Element (Name,Mass,Diameter,MinTemp,MaxTemp,MeanTemp,RotationPeriod,RingSystem)VALUES('Jorden',5972230000000000000000000,12.746,-88,58,15,"0a23t56m4s",0);
INSERT INTO Element (Name,Mass,Diameter,MinTemp,MaxTemp,MeanTemp,RotationPeriod,RingSystem)VALUES('Månen',73000000000000000000000,3475,-173,260,-20,"0a27d19t15m0s",0);
INSERT INTO Element (Name,Mass,Diameter,MinTemp,MaxTemp,MeanTemp,RotationPeriod,RingSystem)VALUES('Mars',641850000000000000000000,6773,-125,20,-65,"0a1d0t37m23s",0);
INSERT INTO Element (Name,Mass,Diameter,MinTemp,MaxTemp,MeanTemp,RotationPeriod,RingSystem)VALUES('Jupiter',1899000000000000000000000000,138347,-128,4,-110,"0a27d9t55m20s",1);
INSERT INTO Element (Name,Mass,Diameter,MinTemp,MaxTemp,MeanTemp,RotationPeriod,RingSystem)VALUES('Saturn',568460000000000000000000000,378675,-173,57,-140,"0a27d10t39m22s",1);
INSERT INTO element (Name,Mass,Diameter,MinTemp,MaxTemp,MeanTemp,RotationPeriod,RingSystem)VALUES('Uranus',86832000000000000000000000,50532,-224,-216,-220,"0a27d17t14m0s",1);
INSERT INTO Element (Name,Mass,Diameter,MinTemp,MaxTemp,MeanTemp,RotationPeriod,RingSystem)VALUES('Neptun',102430000000000000000000000,49105,-218,-200,-200,"0a27d16t6m36s",1);
INSERT INTO Element (Name,Mass,Diameter,MinTemp,MaxTemp,MeanTemp,RotationPeriod,RingSystem)VALUES('Pluto',12500000000000000000000,2390,-233,-223,-225,"0a6d9t17m36s",0);

/*adds the star*/
INSERT INTO Star (ElementId,Color,NumberOfPlanets)VALUES((SELECT ID FROM Element where Name = 'Solen'),'White',9);

/*adds all the planets*/
INSERT INTO Planet (ElementId,Star,NumberOfMoons,DistanceToSun)VALUES((SELECT ID FROM Element where Name = 'Merkur'),(SELECT ElementId FROM Star as s, Element as e where e.Name = 'Solen' AND s.ElementId = e.ID),0,57522077);
INSERT INTO Planet (ElementId,Star,NumberOfMoons,DistanceToSun)VALUES((SELECT ID FROM Element where Name = 'Venus'),(SELECT ElementId FROM Star as s, Element as e where e.Name = 'Solen' AND s.ElementId = e.ID),0,108208926);
INSERT INTO Planet (ElementId,Star,NumberOfMoons,DistanceToSun)VALUES((SELECT ID FROM Element where Name = 'Jorden'),(SELECT ElementId FROM Star as s, Element as e where e.Name = 'Solen' AND s.ElementId = e.ID),1,149597887);
INSERT INTO Planet (ElementId,Star,NumberOfMoons,DistanceToSun)VALUES((SELECT ID FROM Element where Name = 'Mars'),(SELECT ElementId FROM Star as s, Element as e where e.Name = 'Solen' AND s.ElementId = e.ID),2,227936637);
INSERT INTO Planet (ElementId,Star,NumberOfMoons,DistanceToSun)VALUES((SELECT ID FROM Element where Name = 'Jupiter'),(SELECT ElementId FROM Star as s, Element as e where e.Name = 'Solen' AND s.ElementId = e.ID),79,778412027);
INSERT INTO Planet (ElementId,Star,NumberOfMoons,DistanceToSun)VALUES((SELECT ID FROM Element where Name = 'Saturn'),(SELECT ElementId FROM Star as s, Element as e where e.Name = 'Solen' AND s.ElementId = e.ID),62,1426725413);
INSERT INTO Planet (ElementId,Star,NumberOfMoons,DistanceToSun)VALUES((SELECT ID FROM Element where Name = 'Uranus'),(SELECT ElementId FROM Star as s, Element as e where e.Name = 'Solen' AND s.ElementId = e.ID),27,2870972220);
INSERT INTO Planet (ElementId,Star,NumberOfMoons,DistanceToSun)VALUES((SELECT ID FROM Element where Name = 'Neptun'),(SELECT ElementId FROM Star as s, Element as e where e.Name = 'Solen' AND s.ElementId = e.ID),14,4498252900);
INSERT INTO Planet (ElementId,Star,NumberOfMoons,DistanceToSun)VALUES((SELECT ID FROM Element where Name = 'Pluto'),(SELECT ElementId FROM Star as s, Element as e where e.Name = 'Solen' AND s.ElementId = e.ID),5,5906376272);

/*Adds the moons*/
INSERT INTO Moons (ElementId,Parent,DistanceToPlanet)VALUES((SELECT ID FROM Element where Name = 'Månen'),(SELECT ElementId FROM Planet as s, Element as e where e.Name = 'Jorden' AND s.ElementId = e.ID),384400);

/*Adds info to OrbitingElement*/
INSERT INTO orbitingelement (ElementId,Revolution,LengthOfDay)VALUES((SELECT ID FROM Element where Name = 'Merkur'),'0a87d57t36m0s','0a58d15t30m0s');
INSERT INTO orbitingelement (ElementId,Revolution,LengthOfDay)VALUES((SELECT ID FROM Element where Name = 'Venus'),'1a218d16t4m48s','0a243d0t0m0s');
INSERT INTO orbitingelement (ElementId,Revolution,LengthOfDay)VALUES((SELECT ID FROM Element where Name = 'Jorden'),'1a0d0t10m1s','0a0d23t56m4s');
INSERT INTO orbitingelement (ElementId,Revolution,LengthOfDay)VALUES((SELECT ID FROM Element where Name = 'Månen'),'0a27d7t43m12s','0a29d12t0m0s');
INSERT INTO orbitingelement (ElementId,Revolution,LengthOfDay)VALUES((SELECT ID FROM Element where Name = 'Mars'),'1a321d17t2m32s','0a1d0t37m0s');
INSERT INTO orbitingelement (ElementId,Revolution,LengthOfDay)VALUES((SELECT ID FROM Element where Name = 'Jupiter'),'11a317d14t30m29s','0a0d9t55m0s');
INSERT INTO orbitingelement (ElementId,Revolution,LengthOfDay)VALUES((SELECT ID FROM Element where Name = 'Saturn'),'29a165d11t40m34s','0a0d10t33m0s');
INSERT INTO orbitingelement (ElementId,Revolution,LengthOfDay)VALUES((SELECT ID FROM Element where Name = 'Uranus'),'84a27d3t50m24s','0a0d17t14m0s');
INSERT INTO orbitingelement (ElementId,Revolution,LengthOfDay)VALUES((SELECT ID FROM Element where Name = 'Neptun'),'164a323d21t41m11s','0a0d15t57m0s');
INSERT INTO orbitingelement (ElementId,Revolution,LengthOfDay)VALUES((SELECT ID FROM Element where Name = 'Pluto'),'248a31d7t20m21s','0a6d9t36m0s');