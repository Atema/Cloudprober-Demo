const express = require('express');


const app = new express();
const start = new Date();

app.get('/', (req, res) => {
	const millis = Date.now() - start;
	const seconds = Math.floor(millis / 1000);

	if (seconds % 2 === 0) {
		res.sendStatus(200);
	} else {
		res.sendStatus(404);
	}
});



app.listen(process.env.PORT || 3000, (err) => {
	if (err) console.err(err);
})
