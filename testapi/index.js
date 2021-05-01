const express = require('express');


const app = new express();
const start = new Date();

app.get('/', (req, res) => {
	const millis = Date.now() - start;
	const minutes = Math.floor(millis / 60000);

	if (minutes % 2 === 0) {
		res.sendStatus(200);
	} else {
		req.socket.end();
	}
});



app.listen(process.env.PORT || 3000, (err) => {
	if (err) console.err(err);
})
