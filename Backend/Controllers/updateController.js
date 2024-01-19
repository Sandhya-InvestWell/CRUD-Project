const pool = require("../Database/connectDb.js")
const updateController = (req, res) => {
    const id = req.params.id;
    const {updatedName, updatedPhoneno, updatedEmail} = req.body;
    pool.query(`UPDATE Users set UserName = ?, PhoneNumber = ?, Email = ? where UserID = ?`, [updatedName, updatedPhoneno, updatedEmail, id],(err, results) => {
        try {
            if(results)
            {
                console.log(results);
                return res.status(202).send({
                    success : true,
                    message : "User Updated Successfully"
                })
            }
            else{
                return res.status(302).send({
                    success : false,
                    message : "Error in updating User"
                })
            }
        } catch (error) {
            console.log(error);
            return res.status(502).send({
                success : false,
                message : "Error in update controller"
            })
        }
    })
}
module.exports = updateController;