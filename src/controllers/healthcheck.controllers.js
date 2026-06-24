import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const healthcheck = asyncHandler(async (req, res) => {
  const dbState = mongoose.connection.readyState;
  const isDbConnected = dbState === 1;

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        server: "UP",
        database: {
          status:isDbConnected ? "UP" : "DOWN",
          state: dbState,
        },
      },
      "Server is running successfully",
    ),
  );
});

export { healthcheck };
