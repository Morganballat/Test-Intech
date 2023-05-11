
abstact class Personnage

Variables d'instance:
"nom" (string) : le nom du personnage
"position" (int) : la position du personnage sur le plateau

Méthodes:
"avancer" (void) : déplace le personnage sur le plateau selon le résultat d'un lancer de dé
"attaquer" (void) : attaque l'adversaire si celui-ci est présent sur la même case que le personnage
"subirAttaque" (void) : réduit le nombre de vies du personnage si celui-ci retourne à la case 0

class Elfe implements Personnage


Elle aura les méthodes suivantes :
"piocherCarte" (Carte) : tire une carte Chance aléatoirement dans la liste des cartes Chance de l'Elfe et la retourne
"utiliserSort" (void) : fait reculer le Dragon de 3 cases
"utiliserFuite" (void) : recule l'Elfe d'une case
"utiliserPortailoin" (void) : avance l'Elfe de 3 cases

class Dragon implements Personnage

Class Game

class De

Les relations d'héritage sont les suivantes :

La classe "Elfe" hérite de la classe "Personnage"
La classe "Dragon" hérite également de la classe "Personnage"


      
  


