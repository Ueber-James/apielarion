CREATE TABLE personagens (
  id SERIAL PRIMARY KEY,
  name VARCHAR        NOT NULL,
  player VARCHAR      NOT NULL,
  race VARCHAR,
  class VARCHAR,
  antecedent VARCHAR,
  age SMALLINT,
  gender_pronouns VARCHAR,
  origin VARCHAR,
  affiliation VARCHAR,

  strength SMALLINT      NOT NULL DEFAULT 10,
  dexterity SMALLINT     NOT NULL DEFAULT 10,
  constitution SMALLINT  NOT NULL DEFAULT 10,
  intelligence SMALLINT  NOT NULL DEFAULT 10,
  wisdom SMALLINT        NOT NULL DEFAULT 10,
  charisma SMALLINT      NOT NULL DEFAULT 10,

  power_source VARCHAR,
  casting_form VARCHAR,
  known_spells VARCHAR,
  magic_side_effects VARCHAR,

  initial_equipment VARCHAR,
  rare_items VARCHAR,

  event_at_13 VARCHAR,
  allies VARCHAR,
  enemies_threats VARCHAR,
  secrets VARCHAR,
  forbidden_desire VARCHAR,

  celurian_alignment VARCHAR,
  magic_access_level VARCHAR,
  lumenita_relation VARCHAR,

  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);