const { Comment } = require('../models');

const commentData = [
  {
    post_id: 1,
    content: 'This is a comment',
    user_id: 1
  },
  {
    post_id: 2,
    content: 'This is another comment',
    user_id: 2
  },
  {
    post_id: 3,
    content: 'This is a third comment',
    user_id: 3
  }
];

const seedCommentData = () => Comment.destroy({where: {}}).then(() => Comment.bulkCreate(CommentData));

module.exports = seedCommentData;