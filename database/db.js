import { Sequelize,Model, DataTypes } from "sequelize";

const db=new Sequelize('isepsantafe_ingreso2024','isepsantafe_ingreso2024','Iamneo2112@',{
    host:'127.0.0.1',
    dialect:'mysql'
});

export default db;
