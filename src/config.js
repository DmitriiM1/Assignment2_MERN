/*
name: Dmitrii Mitin,
id: 301255191,
date: June 17, 2024
*/
const config={
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    mongoUri: process.env.MONGODB_URI || "mongodb://localhost:27017/Marketplace"
}

module.exports = config;