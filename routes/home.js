const express = require('express'),
      router = express.Router(),
      sql = require('../database');

router.get('/', (request, response) => {

    console.log(request.isFrench())

    sql.query("SELECT * FROM films LIMIT 20", (err, result) => {
        if (err) throw err;

        response.render('index', {
            name: 'Juan',
            data: (request.session.tasks || []),
            films: result
        });

    });

})

module.exports = router