const router = require('express').Router();
const path = require('path');


// connects to notes page

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

// connects to home page

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})





module.exports = router;





