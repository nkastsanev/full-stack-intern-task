import express from 'express';
import notesController from './controllers/notesController.js';

const router = express.Router();

router.post('/', notesController.create);
router.get('/', notesController.getAll)
router.get('/:id', notesController.getNote);
router.put('/:id', notesController.update);
router.delete('/:id', notesController.remove);

export default router;