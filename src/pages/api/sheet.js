// File: src/app/api/sheet.js

import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    // Ensure the API only accepts POST requests
    return res.status(405).json({ message: "Method Not Allowed", success: false });
  }

  try {
    const { name, email, message } = req.body; // Destructure the request body

    const auth = new google.auth.GoogleAuth({
      credentials: {
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A1:C1", // Ensure range corresponds with the columns (A, B, C for name, email, message)
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, email, message]], // Use the destructured values
      },
    });

    res.status(200).json({
      message: "Data appended successfully!",
      success: true,
      data: response.data, // Add the response data for debugging purposes
    });

  } catch (error) {
    console.error("Error appending data to Google Sheets:", error);
    res.status(500).json({
      message: "Error appending data to Google Sheets",
      success: false,
      error: error.message, // Provide error details for better debugging
    });
  }
}
