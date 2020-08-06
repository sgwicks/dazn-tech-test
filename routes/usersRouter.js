const { patchStreamCountByUserId } = require('../controllers/usersControllers')

const usersRouter = require('express').Router()

usersRouter.route('/:user_id')
    .patch(patchStreamCountByUserId)

module.exports = usersRouter