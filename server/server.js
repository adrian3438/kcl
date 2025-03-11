// eslint-disable-next-line @typescript-eslint/no-require-imports
const { createServer } = require('http');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const express = require('express');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const next = require('next');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    const httpServer = createServer(server);

    server.get('/api/lang', (req, res) => {
        const lang = req.query.lang;

        // lang이 없거나 잘못된 경우 기본값 설정
        if (!lang || typeof lang !== 'string') {
            return res.status(400).json({ error: 'Invalid language parameter' });
        }

        const filePath = path.join(__dirname, 'locale', lang, 'language.json');

        // 파일이 존재하는지 먼저 확인
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ error: 'Language file not found' });
        }

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('File read error:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            try {
                res.json(JSON.parse(data));
            } catch (parseErr) {
                console.error('JSON Parse Error:', parseErr);
                return res.status(500).json({ error: 'Invalid JSON format' });
            }
        });
    });


    server.all('*', (req, res) => {
        return handle(req, res);
    });

    const port = process.env.PORT || 3000;


    httpServer.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
