const { registerUserService } = require("../services/registerPracticumService")

const registerUser = async (req, res) => {
    try {
        const user = await registerUserService(
          req.body.name,
          req.body.nim,
          req.body.className,
          req.body.email,
          req.body.noHp,
          req.body.gender,
          req.body.faculty,
          req.body.year,
          req.body.major,
          req.body.document,
          req.body.github
        );
    
        return res.status(201).json({
          status: true,
          message: `Account created`,
          data: user,
        });
      } catch (error) {
        return res.status(400).json({
          status: false,
          message: error.message,
          data: null,
        });
      }
}

module.exports = {
  registerUser
}