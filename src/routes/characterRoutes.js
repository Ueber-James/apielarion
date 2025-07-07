// src/routes/characterRoutes.js
import { Router } from 'express';
import {
  createCharacter,
  listCharacters,
  getCharacterById,
  updateCharacter,
  deleteCharacter
} from '../models/characterModel.js';

const router = Router();

/** POST /api/characters */
router.post('/', async (req, res, next) => {
  try {
    const character = await createCharacter(req.body);
    res.status(201).json(character);
  } catch (err) {
    next(err);
  }
});

/** GET /api/characters */
router.get('/', async (_req, res, next) => {
  try {
    const chars = await listCharacters();
    res.json(chars);
  } catch (err) {
    next(err);
  }
});

/** GET /api/characters/:id */
router.get('/:id', async (req, res, next) => {
  try {
    const char = await getCharacterById(req.params.id);
    if (!char) return res.sendStatus(404);
    res.json(char);
  } catch (err) {
    next(err);
  }
});

/** PUT /api/characters/:id */
router.put('/:id', async (req, res, next) => {
  try {
    const updated = await updateCharacter(req.params.id, req.body);
    if (!updated) return res.sendStatus(404);
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

/** DELETE /api/characters/:id */
router.delete('/:id', async (req, res, next) => {
  try {
    await deleteCharacter(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

export default router;
