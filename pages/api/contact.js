// /api/conatct
import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json({ message: "Invalid Input." });
    }

    // Store the message in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        "mongodb://localhost:27017/nextjsblog"
      );
    } catch (error) {
      return res.status(500).json({ message: "Could not connect to Database" });
    }

    // const db = client.db("nextjsblog"); //can directly pass a db name
    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      return res.status(500).json({ message: "Could not insert message" });
    }

    client.close();

    res
      .status(201)
      .json({ message: "Message stored successfully.", message: newMessage });
  }
}

export default handler;
