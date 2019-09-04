DROP DATABASE IF EXISTS SolarSystem;
CREATE DATABASE SolarSystem;

USE SolarSystem;

CREATE TABLE Element(
    ID                  INT             NOT NULL    AUTO_INCREMENT,
    Name                Varchar(255),
    Mass                Varchar(150),
    Diameter            INT,
    MinTemp             INT,
    MaxTemp             INT,
    MeanTemp            INT,
    RotationPeriod      Varchar(255),
    RingSystem          BIT,
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
    DistanceToSun       DECIMAL(32),
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

CREATE TABLE OrbitingElement(
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
    PRIMARY KEY (ElementId,Title),
    FOREIGN KEY (ElementId) REFERENCES Element(ID) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);

CREATE TABLE ElementInfo(
    ElementId           INT             NOT NULL,
    ClassTier           INT             NOT NULL,
    Title               Varchar(255)    NOT NULL,
    Info                Text,
    PRIMARY KEY (ElementId,ClassTier,Title),
    FOREIGN KEY (ElementId) REFERENCES Element(ID) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);


CREATE TABLE Difficulty(
    DifficultyId        INT             NOT NULL    AUTO_INCREMENT,
    Difficulty          INT             NOT NULL,
    Description         VARCHAR(250),
    PRIMARY KEY(DifficultyId)
);

CREATE TABLE Questions(
    QuestionID          INT             NOT NULL    AUTO_INCREMENT,
    Content             VARCHAR(250)    NOT NULL,
    DiffID              INT             NOT NULL,
    PRIMARY KEY(QuestionID)
);

CREATE TABLE QuesAnswer(
    QuesID              INT             NOT NULL,
    AnswerID            INT             NOT NULL, 
    PRIMARY KEY(QuesID, AnswerID)
);

CREATE TABLE AnswerChoise(
    AnswerID            INT             NOT NULL    AUTO_INCREMENT,
    Answer              VARCHAR(250)    NOT NULL,
    IsCorrect           BIT             NOT NULL,
    PRIMARY KEY(AnswerID)
);

ALTER TABLE Questions ADD FOREIGN KEY (DiffID) REFERENCES Difficulty(DifficultyId);

ALTER TABLE QuesAnswer ADD FOREIGN KEY (QuesID) REFERENCES Questions(QuestionID), 
ADD FOREIGN KEY (AnswerID) REFERENCES AnswerChoise(AnswerID);