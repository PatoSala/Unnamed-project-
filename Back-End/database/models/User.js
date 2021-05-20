
module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';

    let cols = {
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER(21)
        },
        name: {
            type: dataTypes.STRING(255)
        },
        email: {
            type: dataTypes.STRING(255)
        },
        password: {
            type: dataTypes.STRING(255)
        },
        wpp_client: {
            type: dataTypes.STRING(500)
        },
        verified: {
            type: dataTypes.INTEGER(21)
        }
    }

    let config = {
        tableName: "users",
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);

    return User;
}