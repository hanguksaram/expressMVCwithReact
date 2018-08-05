const config = {
    production: {
        SECRET: process.env.SECRET,
        DATASBASE: process.env.MONGODB_URI
    },
    default: {
        SECRET: 'host123',
        DATABASE: 'mongodb://localhost:27017/booksShelf'
    }
}


exports.get = function get(env) {
    return config[env] || config.default
}