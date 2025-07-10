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
    // 1) transforma todas as strings vazias em null
    const sanitized = Object.fromEntries(
      Object.entries(req.body).map(([key, val]) => [
        key,
        val === '' ? null : val
      ])
    );

    // 2) opcionalmente, force números nos campos numéricos
    if (sanitized.age != null)  sanitized.age = parseInt(sanitized.age, 10);
    ['strength','dexterity','constitution','intelligence','wisdom','charisma']
      .forEach(stat => {
        if (sanitized[stat] != null) 
          sanitized[stat] = parseInt(sanitized[stat], 10);
      });

    const character = await createCharacter(sanitized);
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
