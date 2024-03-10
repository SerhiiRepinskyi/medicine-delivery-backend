import Drug from "../models/drugModel.js";

const listDrugs = async (req, res) => {
  const { shop } = req.query;
  const result = await Drug.find({ shop });
  res.json(result);
};

export default {
  listDrugs,
};
