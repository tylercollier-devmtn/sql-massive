module.exports = {
  getHeroes: (req, res) => {
    console.log('hey ryan')
    req.app.get('db').get_heroes().then(heroes => {
      res.status(200).json(heroes);
    }).catch(error => {
      console.log('Oh no! An error has happened!', error);
      res.status(500).json({ message: 'An error happened' })
    });
  },

  getAwesomeHeroes: (req, res) => {
    req.app.get('db').get_awesome_heroes({ powers: req.query.powers, age: req.query.age }).then(heroes => {
      res.status(200).json(heroes);
    }).catch(error => {
      console.log('Oh no! An error has happened!', error);
      res.status(500).json({ message: 'An error happened' })
    });
  }
};
