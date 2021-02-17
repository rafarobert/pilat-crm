export const environment = {
  production: true,
  backend: {
    server: {
      webpath: 'http://middleware.monumental.com.bo:8000'
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
