const mainController = {

  home: (req, res) => {
      res.render('accueil');
  },

  form: (req, res) => {
    res.render('formulaire_creation');
  }
}

module.exports = mainController;