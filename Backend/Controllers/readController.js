const pool = require("../Database/connectDb.js");

const readController = (req, res) => {
    pool.query("SELECT * FROM Users AS Sol", (error, results, fields) => {
        try {
            if (results){
                console.log(results);
                return res.status(201).send({
                    success : true,
                    message : "Successfully get userData",
                    results
                })
            }
            else{
                return res.status(301).send({
                    success : false,
                    message : "Error in getting users"
                })
            }
            
        } catch (error) {
            console.log(error);
            return res.status(501).send({
                success: false,
                message : "Error in read Controller"
            })
        }
    });
}
module.exports = readController