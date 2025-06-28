import { dbConnect } from "@/lib/dbConnect";
import donationModel from "@/Models/donationModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    console.log("Incoming POST request to donation endpoint...");

    // Connect to the database
    await dbConnect();

    // Parse the request body
    const body = await req.json();
    const {
      fullName,
      emailaddress,
      panCard,
      phonenumber,
      amount,
      paymentMethod,
      razorpay_order_id,
      razorpay_payment_id,
    } = body;


    console.log({
      fullName,
      emailaddress,
      panCard,
      phonenumber,
      amount,
      paymentMethod,
      razorpay_order_id,
      razorpay_payment_id,
    });

    const donationAmount = amount || 1000;
    const receiptNo = `BRSM-${Date.now()}`;
    const date = new Date().toLocaleDateString();

    // Create a new donation entry in the database
    const donation = await donationModel.create({
      name: fullName,
      email: emailaddress,
      panCard,
      mobile: phonenumber,
      amount: donationAmount,
      paymentMethod,
      razorpay_order_id,
      razorpay_payment_id,
    });

    console.log("Thank-you email sent successfully:");
    return NextResponse.json(
      { message: "Donation successful", donation },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing donation:", error);
    return NextResponse.json(
      { message: "Donation failed", error: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    console.log("Incoming GET request to donation endpoint...");

    // Fetch all donation entries from the database
    const donations = await donationModel.find();

    // If no donations found, return an empty array
    if (donations.length === 0) {
      return NextResponse.json(
        { message: "No donations found" },
        { status: 404 }
      );
    }
    console.log(donations);
    return NextResponse.json({ donations }, { status: 200 });
  } catch (error) {
    console.error("Error fetching donations:", error);
    return NextResponse.json(
      { message: "Failed to fetch donations", error: "Internal server error." },
      { status: 500 }
    );
  }
}
