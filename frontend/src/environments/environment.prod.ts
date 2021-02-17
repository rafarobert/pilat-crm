export const environment = {
  production: true,
  backend: {
    server: {
      webpath: 'http://172.28.3.14:8000'
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
