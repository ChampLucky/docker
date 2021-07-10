const express = require('express');
const app = express();
const HOST = '0.0.0.0'
const PORT = 80

app.get('/',(req,res) => {
   res.json({
	players: ['billy','tom','jerry','riddle','harry','ema']
	});
});


app.listen(PORT,HOST);
console.log(`listening on http://${HOST}:${PORT}`);

