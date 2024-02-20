module.exports = ({ env }) => ({
    proxy: true,
    url: env('HOST_URL'),
    app: { 
      keys: env.array('APP_KEYS')
    },
    admin: {
      auth: {
        secret: env('ADMIN_JWT_SECRET'),
      },
    },
  })