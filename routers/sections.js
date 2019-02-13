const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser  = bodyParser.json();
const Section = require('../models/section.js');

router.get("/activeSections", async function(req, res){
  const allSections = await Section.find({isActive: true});
  res.status(200).json(allSections);
});
router.post("/section", jsonParser, function(req, res){
  const newSection = new Section(req.body);
  res.status(200).json(newSection);
  newSection.save();
});
router.delete("/section/:id", async function(req, res){
  await Section.remove(Section.find({_id: req.params.id}));
  res.status(200).json({
    message: "Section with id " + req.params.id + " has been removed"
  });
});

module.exports = router;
