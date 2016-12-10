var path = require('path'),
    config;

config = {
    production: {
        url: 'http://blog.thistimeisforgood.com',
        mail: {},
        database: {
          client: 'pg',
          connection: process.env.DATABASE_URL,
          debug: false,
          fileStorage: false
        },
        server: {
            host: '0.0.0.0',
            port: process.env.PORT

        }
    },

    development: {
        url: 'http://127.0.0.1:5000',

        // Example mail config
        // Visit http://support.ghost.org/mail for instructions
        // ```
        //  mail: {
        //      transport: 'SMTP',
        //      options: {
        //          service: 'Mailgun',
        //          auth: {
        //              user: '', // mailgun username
        //              pass: ''  // mailgun password
        //          }
        //      }
        //  },
        // ```

        database: {
            // client: 'sqlite3',
            // connection: {
            //     filename: path.join(__dirname, '/content/data/ghost-dev.db')
            // },
            client: 'postgres',
            connection: {
              host: '127.0.0.1',
              user: 'htatche',
              database: 'blog_heroku',
              port: '5432'
            },
            debug: false
        },
        server: {
            host: '127.0.0.1',
            port: 5000
        },
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    },

    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },


    // ### Testing pg
    // Used by Travis - Automated testing run through GitHub
    'testing-pg': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'pg',
            connection: {
                host     : '127.0.0.1',
                user     : 'postgres',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    }
};

module.exports = config;
