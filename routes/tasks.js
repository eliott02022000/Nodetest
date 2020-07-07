const express = require('express'),
      router = express.Router(),
      sql = require('../database');

router.post('/task', (request, response) => {

    if (request.session.tasks instanceof Array) {
        request.session.tasks.push(request.body.name)
    } else {
        request.session.tasks = [ request.body.name ]
    }

    response.redirect('/')
    
})

module.exports = router