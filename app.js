// require express js
const express = require('express');
//create an instance of express
const app = express();
//set the port
const port = process.env.PORT || 3000;
// serve static files
const path = require('path');
app.use('/', express.static(path.join(__dirname, 'dist')));

// listen on port  
app.listen(port, () => {
    console.log(`Listenting on: http://localhost:${port}`);
    console.log(`HLS on: http://localhost:${port}/live/video/playlist.m3u8`);
});