const express = require('express');

const app = express();

app.get('/beta', function (request, response) {
    response.send({
        "stat":"done",
        "code":"beta"
    });
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});
