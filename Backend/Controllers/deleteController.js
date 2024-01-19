const pool = require("../Database/connectDb.js");
const deleteController = (req, res) => {
    const userID = req.query.userID;
    pool.query(`DELETE FROM Users where UserID = ?`, [userID], (error, results) => {
        try {
            if(results)
            {
                console.log(results);
                return res.status(203).send({
                    success : true,
                    message : "User Deleted successfully"
                })
            }
            else{
                return res.status(303).send({
                    success : false,
                    message : "Cannot delete user"
                })
            }
            
        } catch (error) {
            console.log(error);
            return res.status(503).send({
                success : false,
                message : "Error in delete Controller"
            })
        }
    })
}
module.exports = deleteController