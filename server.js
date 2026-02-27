const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

const API_KEY = 'YOUR_FIRSTMAIL_API_KEY'; // Replace with your real key
const BASE_URL = 'https://api.firstmail.ltd/v1';

app.use(express.static('public'));

// Endpoint to get all emails
app.get('/api/emails', async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/messages`, {
            headers: { 'Authorization': `Bearer ${API_KEY}` }
        });
        res.json(response.data);
    } catch (e) {
        res.status(500).json({ error: "Failed to fetch mail" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
