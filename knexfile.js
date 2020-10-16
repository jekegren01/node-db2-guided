module.exports = {
    client: "sqlite3",  // specify the DBMS
    useNullAsDefault: true,  // This is a flag required for SQlite
    connection: {
        filename: "./data/produce.db3",  // location of the database file
    },
}