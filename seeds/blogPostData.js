const { BlogPost } = require('../models');

const blogPostData = [
  {
    title: 'This is first post',
    content: 'This is the content',
    user_id: 1
  },
  {
    title: 'This is second post',
    content: 'This is the content',
    user_id: 2
  },
  {
    title: 'This is third post',
    content: 'This is the content',
    user_id: 3
  }
];

const seedBlogPosts = () => BlogPost.destroy({where: {}}).then(() => BlogPost.bulkCreate(blogPostData));

module.exports = seedBlogData;