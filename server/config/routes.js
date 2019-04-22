var pets = require('../controllers/controllers');
var path = require('path');

module.exports = function(app){
    app.get('/', function (req, res) {
        pets.index(req, res) ;
    })


    app.post('/addNew', function (req, res) {
      pets.addNew(req, res);
    });

    app.route('/pet/:_id')
      .get(function(req,res){
        pets.findPet(req,res);
      })
      .put(function(req,res){
        pets.updatePet(req,res);
      })
      .delete(function(req,res){
        pets.deletePet(req,res);
      });

      app.route('/petlike/:_id')
      .put(function(req,res){
        pets.updateLike(req,res);
      });

      app.get('/all', function (req, res) {
        pets.allPets(req, res) ;
        });

    app.all("*", (req,res,next) => {
      res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
}