var mongoose = require('mongoose');
require('../models/models.js');

var Pet = mongoose.model('PetShelter'); //Any name is okay
module.exports={
    index: function(req, res){
        res.render('index');
    },

    allPets: function(req, res){
        Pet.find({}, function(err, pets){
              if(err){
                  console.log("ERROR", err);
              } else{
                  return res.json({message: "HERE ARE ALL THE PETS", pets:pets})
              }
          }).sort({"type":1});
    },

    addNew: function(req,res){
        name = req.body.name
        type = req.body.type
        description = req.body.description
        skill1 = req.body.skill1
        skill2 = req.body.skill2
        skill3 = req.body.skill3
        // console.log('title:', title)
        var new_pet = new Pet ({
            name: name,
            type: type,
            description: description,
            skill1: skill1,
            skill2: skill2,
            skill3: skill3,
        });
        // console.log(new_task)
        new_pet.save(function(err, pet){
            if(err){
                res.json({message: "Could not save new pet", error:err})
            } else{
                res.json({message: 'Saved new pet', data: pet})
                // res.redirect('/')
            }
        });
    },

    updatePet: function(req,res){
        Pet.findOne({_id:req.params._id}, function(err, thispet){

            thispet.name = req.body.name;
            thispet.type = req.body.type;
            thispet.description = req.body.description;
            thispet.skill1 = req.body.skill1
            thispet.skill2 = req.body.skill2
            thispet.skill3 = req.body.skill3

            thispet.save(function(err, author){
                if(err){
                    res.json({message: "Could not edit this pet", error:err})
                } else{
                    res.json({message: 'Edited theeee pet', data: author})
                    // res.redirect('/')
                }
            });
        });
    },

    deletePet: function(req,res) {
        Pet.findOneAndDelete({_id:req.params._id}, function(err, pet){
            if(err){
                res.json({message: "ERROR", data: pet})
            } else{
                res.json({message: "removed pet", data: pet});
            }
        });
    },

    findPet: function(req,res){
        Pet.findOne({_id:req.params._id}, function(err, pet){
            if(err){
                res.json({message: "ERROR", error:err});
            } else {
                res.json({message: "SUCCESS", data: pet})
            }
        });
    },

     updateLike: function(req,res){
        Pet.findOne({_id:req.params._id}, function(err, thispet){
            var countlike = thispet.like_count;
            countlike++;
            thispet.like_count = countlike;

            thispet.save(function(err, pet){
                if(err){
                    res.json({message: "COULD NOT LIKE THIS PET", error:err})
                } else{
                    res.json({message: 'LIKED THIS PET', data: pet})
                    // res.redirect('/')
                }
            });
        });
    },
}