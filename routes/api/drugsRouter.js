import express from "express";

import drugsCtrl from "../../controllers/drugsController.js";

const drugsRouter = express.Router();

drugsRouter.get("/", drugsCtrl.listDrugs);

export default drugsRouter;
