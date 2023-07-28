import { Schema, model } from "mongoose";
import { Storage } from "../interfaces";

const storageSchema = new Schema<Storage>(
  {
    fileName: {
      type: String,
    },
    path: {
      type: String,
    },
    isUser: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

storageSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    return ret;
  },
});

const StorageModel = model("Storage", storageSchema);

export { StorageModel };
