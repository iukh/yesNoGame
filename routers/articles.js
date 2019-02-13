const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser  = bodyParser.json();
const Article = require('../models/article.js');

router.get("/articles", async function(req, res){
  const allArticles = await Article.find({});
  res.status(200).json(allArticles);
});

router.get("/section/:sectionId/articles", async function(req, res){
  const articles = await Article.find({sectionId: req.params.sectionId});
  res.status(200).json(articles);
});

router.get("/article/:id", async function(req, res){
  const articles = await Article.find({_id: req.params.id});
  res.status(200).json(articles);
});

router.post("/article", jsonParser, async function(req, res){
  console.log("started create server");
  const newArticle = new Article(req.body);
  console.log(newArticle);
  res.status(200).json(newArticle);
  await newArticle.save();
});

module.exports = router;
