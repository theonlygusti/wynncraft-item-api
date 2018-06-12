const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tier: {
    type: String
  },
  set: {
    type: String
  },
  sockets: {
    type: Number
  },
  accessoryType: {
    type: String
  },
  material: {
    type: String
  },
  restrictions: {
    type: String
  },
  damage: {
    type: String
  },
  fireDamage: {
    type: String
  },
  waterDamage: {
    type: String
  },
  airDamage: {
    type: String
  },
  thunderDamage: {
    type: String
  },
  earthDamage: {
    type: String
  },
  attackSpeed: {
    type: String
  },
  type: {
    type: String
  },
  armorType: {
    type: String
  },
  armorColor: {
    type: String
  },
  addedLore: {
    type: String
  },
  dropType: {
    type: String
  },
  health: {
    type: Number
  },
  fireDefense: {
    type: Number
  },
  waterDefense: {
    type: Number
  },
  airDefense: {
    type: Number
  },
  thunderDefense: {
    type: Number
  },
  earthDefense: {
    type: Number
  },
  level: {
    type: Number
  },
  quest: {
    type: String
  },
  classRequirement: {
    type: String
  },
  strength: {
    type: Number
  },
  dexterity: {
    type: Number
  },
  intelligence: {
    type: Number
  },
  agility: {
    type: Number
  },
  defense: {
    type: Number
  },
  healthRegen: {
    type: Number
  },
  manaRegen: {
    type: Number
  },
  spellDamage: {
    type: Number
  },
  damageBonus: {
    type: Number
  },
  lifeSteal: {
    type: Number
  },
  manaSteal: {
    type: Number
  },
  xpBonus: {
    type: Number
  },
  lootBonus: {
    type: Number
  },
  reflection: {
    type: Number
  },
  strengthPoints: {
    type: Number
  },
  dexterityPoints: {
    type: Number
  },
  intelligencePoints: {
    type: Number
  },
  agilityPoints: {
    type: Number
  },
  defensePoints: {
    type: Number
  },
  thorns: {
    type: Number
  },
  exploding: {
    type: Number
  },
  speed: {
    type: Number
  },
  attackSpeedBonus: {
    type: Number
  },
  poison: {
    type: Number
  },
  healthBonus: {
    type: Number
  },
  soulPoints: {
    type: Number
  },
  emeraldStealing: {
    type: Number
  },
  healthRegenRaw: {
    type: Number
  },
  spellDamageRaw: {
    type: Number
  },
  damageBonusRaw: {
    type: Number
  },
  bonusFireDamage: {
    type: Number
  },
  bonusWaterDamage: {
    type: Number
  },
  bonusAirDamage: {
    type: Number
  },
  bonusThunderDamage: {
    type: Number
  },
  bonusEarthDamage: {
    type: Number
  },
  bonusFireDefense: {
    type: Number
  },
  bonusWaterDefense: {
    type: Number
  },
  bonusAirDefense: {
    type: Number
  },
  bonusEarthDefense: {
    type: Number
  },
  category: {
    type: String
  }
});

module.exports = mongoose.model('Item', ItemSchema);
