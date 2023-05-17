var fs = require('fs');

var roomData = JSON.parse(fs.readFileSync('./data/roomData.json', 'utf8'));

/* GET travel view */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Travlr Getaways', roomData });
   };
   module.exports = {
    rooms
   };