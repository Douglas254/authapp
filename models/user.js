import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// if alraedy have the model then return the user otherwise create new model called User with the userSchema above
const User = models.User || mongoose.model("User", userSchema);

export default User;
