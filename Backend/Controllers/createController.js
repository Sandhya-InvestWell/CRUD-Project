const pool = require("../Database/connectDb.js");

const createController = (req, res) => {
    const {UserID, UserName, PhoneNumber, Email} = req.body;
    pool.query(`INSERT INTO Users (UserID, UserName, PhoneNumber, Email) VALUES (?, ?, ?, ?)`, [UserID, UserName, PhoneNumber, Email], (error, results, fields) => {
        try {
            if (results)
            {
                console.log(results);
                return res.status(200).send({
                    success : true, 
                    message : "User created successfully"
                })
            }
            else{
                return res.status(300).send({
                    success : false,
                    message : "Error in creating user"
                })
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                success : false, 
                message : "Problem in create controller"
            })
        }
    });
};

module.exports = createController;
