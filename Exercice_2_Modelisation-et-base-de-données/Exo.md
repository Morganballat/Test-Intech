entités:

Client : id, nom, prenom, adresse, code_postal, ville, pays, email
Animal : id, sexe, date_naissance, nom, commentaire, espece_id, disponible
Adoption : id, date_reservation, date_adoption, adoption_reglee; animal_id, client_id
Espece : id, nom_courant, nom_latin, description, prix

relations:

client : peut adopter plusieurs animaux
animal: peut être adopter par un client et appartient à un espece
adoption: peut avoir un client et un animal
espece: peut avoir plusieurs animaux

MCD MOCODO:

:
ESPÈCE: nom courant, nom latin, description, prix
APPARTIENT A, 0N ESPÈCE, \_11 ANIMAL

ADOPTION: DATE reservation, DATE adoption, adoption reglee
EST CHOISI POUR, 0N ADOPTION, \_11 ANIMAL
ANIMAL: nom, sexe, DATE naissance, commentaire, disponible

A RECOURS A, 0N ADOPTION, \_11 CLIENT
CLIENT: nom, prenom, adresse, code postal, ville, pays, email
:

# Dictionnaire de données

|  Table/attribut  |                                  Description                                   |  type   |     Clé     | Taille |   contraintes    |
| :--------------: | :----------------------------------------------------------------------------: | :-----: | :---------: | :----: | :--------------: |
|      client      |                                                                                |         |             |        |                  |  |
|        id        |           Valeur numérique identifiant de manière unique les clients           | INTEGER | PRIMARY KEY |        | UNIQUE, NOT NULL |
|       nom        |        Chaîne de caractères correspondant au nom de famille des clients        | VARCHAR |             |  255   |     NOT NULL     |
|      prenom      |             Chaîne de caractères correspondant au prénom du client             | VARCHAR |             |  255   |     NOT NULL     |
|     adresse      | Chaîne de caractères correspondant au numéro de logement et à la rue du client | VARCHAR |             |  255   |     NOT NULL     |
|   code_postal    |    Chaîne de caractères correspondant au code postal de la ville du client     | VARCHAR |             |  255   |     NOT NULL     |
|      ville       |            Chaîne de caractères correspondant à la ville du client             | VARCHAR |             |  255   |     NOT NULL     |
|       pays       |              Chaîne de caractères correspondant au pays du client              | VARCHAR |             |   50   |     NOT NULL     |
|      email       |       Chaîne de caractères correspondant à l'adresse courriel du client        | VARCHAR |             |  255   |     NOT NULL     |
|      animal      |                                                                                |         |             |        |                  |  |
|        id        |           Valeur numérique identifiant de manière unique les animaux           | INTEGER | PRIMARY KEY |        | UNIQUE, NOT NULL |
|       nom        |           Valeur numérique identifiant de manière unique les clients           | VARCHAR |             |  255   |     NOT NULL     |
|       sexe       |           Valeur numérique identifiant de manière unique les clients           | VARCHAR |             |   1    |     NOT NULL     |
|  date_naissance  |           Valeur numérique identifiant de manière unique les clients           |  DATE   |             |  255   |     NOT NULL     |
|   commentaire    |           Valeur numérique identifiant de manière unique les clients           | VARCHAR |             |  500   |     NULLABLE     |
|    espece_id     |           Valeur numérique identifiant de manière unique les clients           | INTEGER | FOREIGN KEY |  255   |     NOT NULL     |
|    disponible    |           Valeur numérique identifiant de manière unique les clients           | BOOLEAN |             |  255   |     NOT NULL     |
|     adoption     |                                                                                |         |             |        |                  |  |
|        id        |          Valeur numérique identifiant de manière unique les adoptions          | INTEGER | PRIMARY KEY |        | UNIQUE, NOT NULL |
| date_reservation |           Valeur numérique identifiant de manière unique les clients           |  DATE   |             |  255   |     NULLABLE     |
|  date_adoption   |           Valeur numérique identifiant de manière unique les clients           |  DATE   |             |  255   |     NULLABLE     |
| adoption_reglee  |           Valeur numérique identifiant de manière unique les clients           | BOOLEAN |             |  255   |     NOT NULL     |
|    animal_id     |           Valeur numérique identifiant de manière unique les clients           | INTEGER | FOREIGN KEY |  255   |     NOT NULL     |
|    client_id     |           Valeur numérique identifiant de manière unique les clients           | INTEGER | FOREIGN KEY |  255   |     NULLABLE     |
|      espece      |                                                                                |         |             |        |                  |  |
|        id        |           Valeur numérique identifiant de manière unique les espèces           | INTEGER | PRIMARY KEY |        | UNIQUE, NOT NULL |
|   nom_courant    |           Valeur numérique identifiant de manière unique les clients           | VARCHAR |             |   50   |     NOT NULL     |
|    nom_latin     |                                                                                | VARCHAR |             |  100   |     NOT NULL     |
|   description    |                     Chaîne de caractère decrivant l'espèce                     | VARCHAR |             |  500   |     NOT NULL     |
|       prix       |  Valeur numérique renseignant le coût d'adoption d'un animal de cette espèce   | INTEGER |             |  255   |     NOT NULL     |

Traduire modele entite association en modele relationel :

Requetes sql :

- selectionner les noms, commentaires, et DATE de naissance des animaux disponible à l'adoption (selectDispo.sql)

SELECT nom, commentaire, date_naissance FROM animal WHERE disponible = TRUE;

- Supprimer l'adoption de l'animal dont l'id est 5 (deleteAdoption.sql)

DELETE FROM adoption WHERE animal_id = 5;

- maj le status disponible de l'animal dont l'id est 5 (updateAnimal.sql)

UPDATE animal SET disponible = TRUE WHERE id = 5;

- selectionner les animaux de l'espèce chat (selectChat.sql).

SELECT *
FROM animal
INNER JOIN espece ON animal.espece_id = espece.id
WHERE espece.nom = 'chat';

- Compter le nombre d'animaux par espece (nbEspece.sql).

SELECT espece.nom AS espece, COUNT(*) AS nb_animaux
FROM animal
INNER JOIN espece ON animaux.espece_id = espece.id
GROUP BY espece.nom;
