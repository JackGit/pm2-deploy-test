module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'API',
      script    : 'app.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'node',
      host : 'jackyang.me',
      ref  : 'origin/master',
      repo : 'git@github.com:jackgit/pm2-deploy-test.git',
      path : '/var/www//pm2-test/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : 'node',
      host : 'jackyang.me',
      ref  : 'origin/master',
      repo : 'git@github.com:jackgit/pm2-deploy-test.git',
      path : '/var/www/pm2-test/development',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
