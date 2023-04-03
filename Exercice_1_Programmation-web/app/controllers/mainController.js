const mainController = {

  home: (req, res) => {
      res.render('accueil');
  },

  form: (req, res) => {
    res.render('formulaire_creation');
  },

  question: (req, res) => {
    res.render('affichage_question');
  }
}

module.exports = mainController;