const { pool } = require("./config/db");

const getUsers = async (req, res) => {
     try {
        const [result] = await pool.query('SELECT * FROM users');
        res.status(200).json(result);
     }
     catch (error) {        
        res.status(500).json({ message: error.message });
     }}

module.exports = getUsers;