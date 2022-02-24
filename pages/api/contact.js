// /api/conatct

function handler(req, res) {
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
    console.log(newMessage);

    res
      .status(201)
      .json({ message: "Message stored successfully.", message: newMessage });
  }
}

export default handler;
