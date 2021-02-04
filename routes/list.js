const express = require("express");
const router = express.Router();
const User = require("../models/User");
const List = require('../models/List')

router.get("/all", async (req, res, next) => {
  try {
    const allLists = []
    const theUser = User.findById(req.session.currentUser)
    (await theUser).lists.map((list) =>{
      allLists.push(list)
    })

    res.status(200).json(allLists)
  } catch (error) {
    console.log(error);
    next(`${error}, this error`);
  }
});

router.post("/add", async (req, res, next) => {
  try {
    const {name, description} = req.body
    const newList= await List.create({name, description})
    res.status(200).json(newList)
  } catch (error) {
    console.log(error);
    next(`${error}, this error`);
  }
});

router.get('/:id', async (req, res, next) =>{
  try {
    const {id} = req.params
    const theList = List.findById(id)
    res.status(200).json(theList)
  } catch (error) {
    console.log(error)
  }
})

router.delete('/delete/:id', async (req, res, next) => {
  try {  
    const id = req.params.id
    const list = await List.findByIdAndDelete(id)
    res.status(200)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
