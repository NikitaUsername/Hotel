const path = require('path');
const Sequelize = require('sequelize');
const Views = require('./Views');
const { db } = require(path.resolve(root + '/src/database.js'));

const Rooms = db.define('rooms', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    placesQty: {
        type: Sequelize.INTEGER,
    },
    viewId: {
        type: Sequelize.INTEGER,
    },
    price:{
        type: Sequelize.DECIMAL(20,2),
    },
    image: {
        type: Sequelize.STRING,
    },
    deletedAt: {
        type: Sequelize.DATE,
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
    updatedAt: {
        type: Sequelize.DATE,
    },
});

Rooms.belongsTo(Views, { foreignKey: 'viewId' });
module.exports = Rooms;