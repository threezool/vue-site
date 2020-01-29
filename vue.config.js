module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-site/'
    : process.env.NODE_ENV === 'ftp' 
      ? '/' 
      : '/'
};