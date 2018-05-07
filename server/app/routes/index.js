var path = require('path');
module.exports = app => {
 


    app.all('/*', (req, res) => {
        res.sendFile(path.join(app.get('clientPath'), '/src/index.html'));
    });


};