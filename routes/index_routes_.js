const express = require("express")
const router = express.Router();
const con = require("../controller/controllers.js");
const upload = require("../middleware/multer_midddleware.js");

router.get("/", con.movieDefaultCon);
router.post("/addMovieToList", upload.single("posterName"), con.addMovieToList);
router.get("/editMovie/:id", con.editMovie);
router.post("/updateMovie/:id", upload.single("posterName"), con.updateMovie);
router.get("/daleteMovie/:id", con.daleteMovie);


module.exports = router;