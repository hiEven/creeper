module.exports = {

  mongo: {

    database: 'DATABASE',
    host: '127.0.0.1'

  },

  session: {
    redis: {
      host: 'DATABASE',
      port: 6379
    }
  },

  aws: {
    accessKey: 'ACCESSKEY',
    secretKey: 'SECRETKEY',
    bucket: 'BUCKET',
    region: 'REGION',
  },

  // You can bascially look up the youdao website for more detail.
  youdao: {
    accessKey: 'ACCESSKEY',
    keyFrom: 'CREEPER'
  }
};