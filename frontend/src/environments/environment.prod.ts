export const environment = {
  production: true,
  backend: {
    server: {
      webpath: 'https://crm-middleware.pilatsrl.com'
    }
  },
  frontend: {
    template: {
      assets:'/assets',
    },
    sql:true,
    server: {
      webpath: 'http://localhost:4200'
    }
  }
};
