import * as Sequelize from 'sequelize';
import Matches from './matches';
import db from '.';
import Players from './players';

class Goals extends Sequelize.Model {}

Goals.init({
  match_id: Sequelize.INTEGER,
  player_id: Sequelize.INTEGER,
}, {
  sequelize: db.connection,
  modelName: 'goals',
  timestamps: false,
});

// Goals.belongsTo(Matches, {
//   foreignKey: 'match_id',
//   as: 'match',
// });
// Matches.hasMany(Goals, {
//   sourceKey: 'id',
//   foreignKey: 'id',
//   as: 'match',
// });

// Goals.belongsTo(Players, {
//   foreignKey: 'player_id',
//   as: 'player',
// });
// Players.hasMany(Goals, {
//   sourceKey: 'id',
//   foreignKey: 'player_id',
//   as: 'player',
// });

Matches.belongsToMany(Players, {
  as: 'players',
  through: Goals,
  foreignKey: 'match_id',
  otherKey: 'player_id',
});

Players.belongsToMany(Matches, {
  as: 'matches',
  through: Goals,
  foreignKey: 'player_id',
  otherKey: 'match_id',
});

export default Goals;