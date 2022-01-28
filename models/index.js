const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id',
});

// reverse associations: defining the relationship of the Post model to the User
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// to see total of votes a user created
User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'user_id',
});

// to see all of the post that user voted on.
Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id',
});

Vote.belongsTo(User, {
  foreignKey: 'user_id',
});

Vote.belongsTo(Post, {
  foreignKey: 'post_id',
});

User.hasMany(Vote, {
  foreignKey: 'user_id',
});

Post.hasMany(Vote, {
  foreignKey: 'post_id',
});

module.exports = { User, Post, Vote };
