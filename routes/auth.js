const authRouter = require("express").Router();

authRouter.get("/", (req, res) => res.status(200).json({ msg: "test" }));

module.exports = authRouter;
