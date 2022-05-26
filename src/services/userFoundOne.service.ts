import { Request } from "express";

const userFoundOndeService = (req: Request) => {
  const foundOne = req.user;

  return foundOne;
};

export default userFoundOndeService;
