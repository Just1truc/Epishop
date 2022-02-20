CREATE TABLE Users
(
    id integer not null unique primary key,
    Username    TEXT,
    Passwords    TEXT
);

CREATE TABLE Objects
(
    id integer not null unique,
    Names    TEXT,
    Price   int,
    Descriptions    TEXT,
    UserID  int NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(id)
);

INSERT INTO Users (id, Username, Passwords) VALUES (1, 'Bouteille', 'Poutre');
INSERT INTO Users (id, Username, Passwords) VALUES (2, 'Cuillière', 'Alfredo');
INSERT INTO Users (id, Username, Passwords) VALUES (3, 'Jules bobillot', 'Gouvernement');

INSERT INTO Objects (id, Names, Descriptions, Price, UserID) VALUES (1, 'Bouteille', 'une grosse bouteille', 20, 1);
INSERT INTO Objects (id, Names, Descriptions, Price, UserID) VALUES (2, 'Lave-linge', 'tah le lave linge', 300, 2);
INSERT INTO Objects (id, Names, Descriptions, Price, UserID) VALUES (3, 'Casquette', 'protège du lesoleil', 15, 2);
INSERT INTO Objects (id, Names, Descriptions, Price, UserID) VALUES (4, 'poutre en bois', 'Grosse poutrasse', 55, 3);
INSERT INTO Objects (id, Names, Descriptions, Price, UserID) VALUES (5, 'noir', 'couleur', 9, 3);