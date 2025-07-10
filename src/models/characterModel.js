// src/models/characterModel.js
import { pool } from '../db.js';

/** Cria um novo personagem e retorna o registro completo */
export async function createCharacter(data) {
  const {
    name, player, race, class: charClass, antecedent,
    age, genderPronouns, origin, affiliation,
    strength, dexterity, constitution, intelligence, wisdom, charisma,
    powerSource, castingForm, knownSpells, magicSideEffects,
    initialEquipment, rareItems, eventAt13, allies, enemiesThreats,
    secrets, forbiddenDesire, celurianAlignment, magicAccessLevel, lumenitaRelation, editPassword
  } = data;

  const res = await pool.query(
    `INSERT INTO personagens (
       name, player, race, class, antecedent,
       age, gender_pronouns, origin, affiliation,
       strength, dexterity, constitution, intelligence, wisdom, charisma,
       power_source, casting_form, known_spells, magic_side_effects,
       initial_equipment, rare_items, event_at_13, allies, enemies_threats,
       secrets, forbidden_desire, celurian_alignment, magic_access_level, lumenita_relation, edit_password
     )
     VALUES (
       $1,$2,$3,$4,$5,
       $6,$7,$8,$9,
       $10,$11,$12,$13,$14,$15,
       $16,$17,$18,$19,
       $20,$21,$22,$23,$24,
       $25,$26,$27,$28,$29, $30
     )
     RETURNING *`,
    [
      name, player, race, charClass, antecedent,
      age, genderPronouns, origin, affiliation,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      powerSource, castingForm, knownSpells, magicSideEffects,
      initialEquipment, rareItems, eventAt13, allies, enemiesThreats,
      secrets, forbiddenDesire, celurianAlignment, magicAccessLevel, lumenitaRelation, editPassword
    ]
  );
  return res.rows[0];
}

/** Lista todos os personagens, do mais recente para o mais antigo */
export async function listCharacters() {
  const res = await pool.query(
    `SELECT * FROM personagens
     ORDER BY created_at DESC`
  );
  return res.rows;
}

/** Busca um personagem pelo ID */
export async function getCharacterById(id) {
  const res = await pool.query(
    `SELECT * FROM personagens WHERE id = $1`,
    [id]
  );
  return res.rows[0];
}

/** Atualiza um personagem pelo ID */
export async function updateCharacter(id, data) {
  // Gera dinamicamente SET col = $n
  const cols = [];
  const values = [];
  let idx = 2;
  for (const [key, val] of Object.entries(data)) {
    cols.push(`${key} = $${idx}`);
    values.push(val);
    idx++;
  }
  values.unshift(id); // $1 = id

  const res = await pool.query(
    `UPDATE personagens
     SET ${cols.join(', ')}
     WHERE id = $1
     RETURNING *`,
    values
  );
  return res.rows[0];
}

/** Deleta um personagem pelo ID */
export async function deleteCharacter(id) {
  await pool.query(
    `DELETE FROM personagens WHERE id = $1`,
    [id]
  );
}
