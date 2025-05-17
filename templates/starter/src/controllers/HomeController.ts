import { RequestHandler } from "express";

export const getHome: RequestHandler = async (req, res) => {
  try {
    return res.status(200).send("Hello Fellow Developer!");
  } catch (error: any) {
    console.error("HuggingFace Error:", error.message);
    res
      .status(500)
      .json({ error: `Something went wrong ${JSON.stringify(error)}` });
  }
};
