<?php include './mon-header.php'; ?>


<h1>Sélectionner un animal</h1>

<form method="post" action="ajouter.php">
  <label for="nom">Animaux</label>
  <select type="text" id="nom" name="nom">
    <option value="">Sélectionner un nom</option>
    <option value="oscar">oscar</option>
    <option value="nonos">nonos</option>
    <option value="balou">balou</option>
  </select>
</form>

<button type="submit">Valider</button>

<?php include './footer.php'; ?>