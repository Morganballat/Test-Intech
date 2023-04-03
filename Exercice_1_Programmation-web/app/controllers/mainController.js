const Question = require('../models/Question')

const mainController = {
  home: (req, res) => {
    res.render('accueil')
  },

  form: (req, res) => {
    res.render('formulaire_creation')
  },

  question: (req, res) => {
    res.render('affichage_question')
  },

  nouvelleQuestion: (req, res) => {
    const nouvelleQuestion = new Question({
      enonce: req.body.enonce,
      reponse1: req.body.reponse1,
      reponse2: req.body.reponse2,
      bonneReponse: req.body.bonneReponse,
    })

    nouvelleQuestion
      .save()
      .then((question) => {
        console.log('Question enregistrée avec succès:', question)
      })
      .catch((err) => {
        console.error(err)
        res
          .status(500)
          .send('Une erreur est survenue lors de la sauvegarde de la question.')
      })
  },
}

module.exports = mainController
