CREATE TABLE personagens (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)        NOT NULL,
  player VARCHAR(100)      NOT NULL,
  race VARCHAR(50),
  class VARCHAR(50),
  antecedent VARCHAR(100),
  age SMALLINT,
  gender_pronouns VARCHAR(50),
  origin VARCHAR(100),
  affiliation VARCHAR(100),

  strength SMALLINT      NOT NULL DEFAULT 10,
  dexterity SMALLINT     NOT NULL DEFAULT 10,
  constitution SMALLINT  NOT NULL DEFAULT 10,
  intelligence SMALLINT  NOT NULL DEFAULT 10,
  wisdom SMALLINT        NOT NULL DEFAULT 10,
  charisma SMALLINT      NOT NULL DEFAULT 10,

  power_source VARCHAR(100),
  casting_form VARCHAR(100),
  known_spells TEXT,
  magic_side_effects TEXT,

  initial_equipment TEXT,
  rare_items TEXT,

  event_at_13 TEXT,
  allies TEXT,
  enemies_threats TEXT,
  secrets TEXT,
  forbidden_desire TEXT,

  celurian_alignment VARCHAR(50),
  magic_access_level VARCHAR(50),
  lumenita_relation VARCHAR(100),

  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);