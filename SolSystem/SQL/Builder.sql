DROP DATABASE IF EXISTS SolarSystem;
CREATE DATABASE SolarSystem;

USE SolarSystem;

CREATE TABLE Element(
    ID                  INT             NOT NULL    AUTO_INCREMENT,
    Name                Varchar(255),
    Mass                INT,
    Diameter            INT,
    MinTemp             INT,
    MaxTemp             INT,
    MeanTemp            INT,
    RotationPeriod      Varchar(255),
    PRIMARY KEY (ID)
);

CREATE TABLE Star(
    ElementId           INT             NOT NULL,
    Color               Varchar(255),
    NumberOfPlanets     INT,
    PRIMARY KEY (ElementId),
    FOREIGN KEY (ElementId) REFERENCES Element(ID) 
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE Planet(
    ElementId           INT             NOT NULL,
    Star                INT             NOT NULL,
    NumberOfMoons       INT,
    DistanceToSun       INT,
    PRIMARY KEY (ElementId),
    FOREIGN KEY (Star) REFERENCES Star(ElementId) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
    FOREIGN KEY (ElementId) REFERENCES Element(ID) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);

CREATE TABLE Moons(
    ElementId           INT             NOT NULL,
    Parent              INT             NOT NULL,
    DistanceToPlanet    INT,
    PRIMARY KEY (ElementId),
    FOREIGN KEY (Parent) REFERENCES Planet(ElementId) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
    FOREIGN KEY (ElementId) REFERENCES Element(ID) 
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE PrbitingElement(
    ElementId           INT             NOT NULL,
    Revolution          Varchar(255),
    LengthOfDay         Varchar(255),
    PRIMARY KEY (ElementId),
    FOREIGN KEY (ElementId) REFERENCES Element(ID) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);

CREATE TABLE Pics(
    ElementId           INT             NOT NULL,
    Title               Varchar(255)    NOT NULL,
    Beskrivelse         Text,
    Comic               BIT,
    PRIMARY KEY (ElementId),
    FOREIGN KEY (ElementId) REFERENCES Element(ID) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);