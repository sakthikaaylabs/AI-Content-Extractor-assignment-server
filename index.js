const express = require("express");
const cors = require("cors");
const axios = require("axios");
const unfluff = require("unfluff");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const HF_API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn";

app.post("/api/extract", async (req, res) => {
    const { url } = req.body;

    try {
        const response = await axios.get(url);
        const data = unfluff(response.data);
        const text = data.text.slice(0, 2000);

        const hfResponse = await axios.post(HF_API_URL, 
            { inputs: text },
            {
                headers: {
                    Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
                    "Content-Type": "application/json",
                }
            }
        );

        const hfData = hfResponse.data;

        if (hfData.error) {
            console.error("HuggingFace error:", hfData.error);
            return res.status(500).json({ error: hfData.error });
        }

        res.json({
            title: data.title,
            summary: hfData[0]?.summary_text || "No summary generated",
        });
    } catch (err) {
        console.error("Error:", err.message);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});
