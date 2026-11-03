const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000; 

app.use(cors({ origin: '*' })); // Allows connections from your GitHub pages
app.use(express.json());

let globalClickCount = 0;

app.get('/api/song-count', (req, res) => {
    res.json({ count: globalClickCount });
});

app.post('/api/song-count', (req, res) => {
    globalClickCount++;
    res.json({ count: globalClickCount });
});

app.listen(PORT, () => {
    console.log(`Backend server running smoothly on port ${PORT}`);
});
