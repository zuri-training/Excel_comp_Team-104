const { Client } = require('pg');

const db = new Client({
    host: "ec2-54-229-217-195.eu-west-1.compute.amazonaws.com",
    user: "xnyekaqlmtlvhe",
    password: "ee0848668a13c5708d18f6936128be7f46bc75dd5201631284fb4d6fce245e1d",
    database: "d9kcg1k0j791ml",
    port: "5432"
});

module.exports = db;