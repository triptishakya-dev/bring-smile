import { dbConnect } from "@/lib/dbConnect";
import donationModel from "@/Models/donationModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    console.log("Connecting TO Database");
    await dbConnect();
    console.log("Connected to Database");

    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const panCard = formData.get("panCard");
    const location = formData.get("location");
    const amount = formData.get("amount");
    const message = formData.get("message");
    const paymentMethod = formData.get("paymentMode");







    console.log(name);
    console.log(email);
    console.log(mobile);
    console.log(panCard);
    console.log(location);
    console.log(amount);
    console.log(paymentMethod);
    console.log(message)

    // Validate required fields
    if (!name || !email || !mobile || !panCard || !location  || !amount  || !paymentMethod  || !message) {
      return NextResponse.json(
        {
          message:
            "All fields are required: name, email, mobile, panCard, location, amount, paymentMethod, message",
        },
        { status: 400 }
      );
    }

   

    // Create new user
    const newUser = new donationModel({
      name,
      email,
      mobile,
      panCard,
      location,
      message,
      amount,
      paymentMethod,
    });

    const savedUser = await newUser.save();

   

    const response = NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
        user: {
          id: savedUser._id,
          name: savedUser.name,
          email: savedUser.email,
          mobile: savedUser.mobile,
          location: savedUser.location,
          amount: savedUser.amount,
          panCard: savedUser.panCard,
          message: savedUser.message,
          paymentMethod: savedUser.paymentMethod,


        },
      },
      { status: 201 }
    );

 

    return response;
  } catch (error) {
    console.error("Error:", error);

    // Handle duplicate key error (MongoDB)
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "User already exists with this email or mobile number" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

function generateToken(user) {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1w" });
}
