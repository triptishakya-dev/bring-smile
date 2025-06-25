import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Donor name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/.+@.+\..+/, "Please enter a valid email address"],
    },
    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      match: [/^\d{10}$/, "Please enter a valid 10-digit mobile number"],
    },
    amount: {
      type: Number,
      required: [true, "Donation amount is required"],
      min: [1, "Donation amount must be at least 1"],
    },
    paymentMethod: {
      type: String,
      enum: ["online", "offline"],
      required: [true, "Payment method is required"],
    },
    panCard: {
      type: String,
      default: "",
      match: [/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Enter a valid PAN card number"],
    },
    location: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields
  }
);

// Prevent model overwrite in development
export default mongoose.models.Donation || mongoose.model("Donation", donationSchema);
