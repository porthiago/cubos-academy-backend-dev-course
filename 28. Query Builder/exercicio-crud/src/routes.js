const express = require('express');
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('./controllers/crud');

const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

//Teste de join
const { joinTest, getAllNotes } = require('./controllers/join');
router.post('/:id/anotacoes', joinTest);
router.get('/anotacoes/anotacao', getAllNotes);

module.exports = router;
