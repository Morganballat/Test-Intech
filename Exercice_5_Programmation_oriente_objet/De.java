import java.util.Random;

public class De {

  Random random = new Random();

  public int lancerDe(int nbFace) {
    return random.nextInt(nbFace) + 1;
  }
}
