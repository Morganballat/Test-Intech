
public class Game {
    public static void main(String[] args) {

        Integer overBoundPosition;
        Dragon dragon = new Dragon();
        Elfe elfe = new Elfe();
        De de = new De();

        elfe.position = 0;
        dragon.position = 31;

        int nbTentatives = de.lancerDe(6);

        while (elfe.position != 31 && nbTentatives > 0) {

            int deElfe = de.lancerDe(6);
            elfe.position += deElfe;

            System.out.println("L'Elfe avance de " + deElfe + " cases. Nouvelle position : " + elfe.position);

            if (elfe.position == dragon.position) {
                System.out.println("L'Elfe rencontre le Dragon !");
                int carteChance = de.lancerDe(3);

                switch (carteChance) {
                    case 1:
                        System.out.println("L'Elfe tire une carte Sort et fait reculer le Dragon de 3 cases.");
                        dragon.position = Math.max(0, dragon.position - 3);
                        break;
                    case 2:
                        System.out.println("L'Elfe tire une carte Fuite et recule d'une case.");
                        elfe.position = Math.max(0, elfe.position - 1);
                        break;
                    case 3:
                        System.out.println("L'Elfe tire une carte Portauloin et avance de 3 cases.");
                        elfe.position += 3;
                        break;
                }
            }

            int deDragon = de.lancerDe(6);

            if (elfe.position < dragon.position) {
                dragon.position -= deDragon;
            } else {
                dragon.position += deDragon;
            }

            System.out.println("Le Dragon avance de " + deDragon + " cases. Nouvelle position : " + dragon.position);

            if (elfe.position == dragon.position) {
                int deChance = de.lancerDe(6);
                System.out.println("Le Dragon crache du Feu ! L'Elfe lance le dé et fait " + deChance);

                if (deChance <= 3) {
                    System.out.println("L'Elfe subit l'attaque et recule de 2 cases.");
                    elfe.position = Math.max(0, elfe.position - 2);
                } else {
                    System.out.println("L'Elfe tire une carte Chance.");
                    int carteChance = de.lancerDe(3);

                    switch (carteChance) {
                        case 1:
                            System.out.println("L'Elfe tire une carte Sort et fait reculer le Dragon de 3 cases.");
                            dragon.position = Math.max(0, dragon.position - 3);
                            break;
                        case 2:
                            System.out.println("L'Elfe tire une carte Fuite et recule d'une case.");
                            elfe.position = Math.max(0, elfe.position - 1);
                            break;
                        case 3:
                            System.out.println("L'Elfe tire une carte Portauloin et avance de 3 cases.");
                            elfe.position += 3;
                            break;
                    }
                }
            }

            if (elfe.position == 0) {
                nbTentatives--;
            }

            if (elfe.position > 31) {
                overBoundPosition = elfe.position - 31;
                elfe.position = 31 - overBoundPosition;
                System.out.println("L'Elfe dépasse de " + overBoundPosition + " cases du plateau, répositionnement : " + elfe.position);
            } else if (elfe.position < 0){
                overBoundPosition = elfe.position;
                elfe.position = 0 + overBoundPosition;
                System.out.println("L'Elfe dépasse de " + overBoundPosition + " cases du plateau, répositionnement : " + elfe.position);
            }

            if (dragon.position > 31) {
                overBoundPosition = dragon.position - 31;
                dragon.position = 31 - overBoundPosition;
                System.out.println("Le Dragon dépasse de " + overBoundPosition + " cases du plateau, répositionnement : " + dragon.position);
            }else if (dragon.position < 0){
                overBoundPosition = dragon.position;
                dragon.position = 0 + overBoundPosition;
                System.out.println("Le Dragon dépasse de " + overBoundPosition + " cases du plateau, répositionnement : " + dragon.position);
            }

        }

        if (elfe.position == 31) {
            System.out.println("L'Elfe a atteint le trésor ! Victoire !");
        } else {
            System.out.println("L'Elfe a épuisé toutes ses tentatives. Game over !");
        }
    }
}