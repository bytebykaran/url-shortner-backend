import mongoose, { Schema } from "mongoose";
import { nanoid } from "nanoid";
const urlSchema = new Schema(
  {
    originalUrl: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    shortCode: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    customAlias:{
      type:Boolean,
      default:false
    },
    expiresAt:{
      type:Date,
      default:null
    },
    clicks: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    createdBy:{
      type:Schema.Types.ObjectId,
      ref:"User",
      required:true
    }
  },

  { timestamps: true },
);

export const Url = mongoose.model("Url", urlSchema);
