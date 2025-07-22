const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route to serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint (optional but recommended for Heroku)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'AI Chat App is running' });
});

// Handle 404s
app.use('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 AI Chat App running on port ${PORT}`);
    console.log(`📱 Local: http://localhost:${PORT}`);
});
