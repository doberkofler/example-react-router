import express from 'express';
import path from 'node:path';

const app = express();
const port = 3000;

// Request logger
app.use((req, res, next) => {
	const now = new Date().toISOString();
	console.log(`[${now}] ${req.method} ${req.originalUrl}`);
	next();
});

// Configure proper MIME types for JavaScript modules before the static middleware
app.use((req, res, next) => {
	if (req.path.endsWith('.js')) {
		res.type('application/javascript');
	}
	next();
});

// Serve static files from the build directory
app.use('/', express.static(path.resolve('build')));

// Catch all 404 - Route not found
app.use((req, res) => {
	console.error(`Not Found: ${req.originalUrl}`);
	res.status(404).send('Not Found');
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
