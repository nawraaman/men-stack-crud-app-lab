// controllers/dogs.js
const Dog = require('../models/dog')

const index = async (req, res) => {
  const dogs = await Dog.find()
  res.render('dogs/index.ejs', { dogs })
}

const newDog = (req, res) => {
  res.render('dogs/new.ejs')
}

const create = async (req, res) => {
  req.body.isFriendly = req.body.isFriendly === 'on'
  await Dog.create(req.body)
  res.redirect('/dogs')
}

const show = async (req, res) => {
  const dog = await Dog.findById(req.params.id)
  res.render('dogs/show.ejs', { dog })
}

const edit = async (req, res) => {
  const dog = await Dog.findById(req.params.id)
  res.render('dogs/edit.ejs', { dog })
}

const update = async (req, res) => {
  req.body.isFriendly = req.body.isFriendly === 'on'
  await Dog.findByIdAndUpdate(req.params.id, req.body)
  res.redirect(`/dogs/${req.params.id}`)
}

const deleteDog = async (req, res) => {
  await Dog.findByIdAndDelete(req.params.id)
  res.redirect('/dogs')
}

module.exports = {
  index,
  new: newDog,
  create,
  show,
  edit,
  update,
  delete: deleteDog
}
