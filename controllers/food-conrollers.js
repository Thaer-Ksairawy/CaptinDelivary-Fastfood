import DB from "../models/food-models.js"



export const getAllData = async (req, res) =>  {

    try {
      const allData = await DB.findAll();
      res.json({
        data: allData,
        element: allData[0],
        message: allData ? "1" : "0",
      });
    } catch (error) {
      res.json({ data: [], element: {}, message: "2" });
    }
  };