import express from 'express';
import path from 'node:path';

const app = express();
const port = 3000;

// Configure proper MIME types for JavaScript modules before the static middleware
app.use((req, res, next) => {
	if (req.path.endsWith('.mjs') || req.path.endsWith('.js')) {
		res.type('application/javascript');
	}
	next();
});

// Serve static files from the React app
app.use('/public', express.static(path.resolve('build')));

// Handle React Router routes
app.get('/{*splat}', (req, res) => {
	res.sendFile(path.resolve(path.join('build', 'index.html')));
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
