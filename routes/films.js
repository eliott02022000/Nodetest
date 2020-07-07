const express = require('express'),
      router = express.Router(),
      sql = require('../database');

router.get('/films/:id(\\d+)', (request, response) => {
    
    sql.query(`SELECT * FROM films WHERE id_film = ${request.params.id}`, (err, result) => {

        if (result[0]) {
            response.render('film', {
                film: result[0],
            });
        } else {
            response.redirect('/404')
        }

    })

})

router.delete('/films/:id(\\d+)', (request, response) => {
    
    sql.query(`DELETE FROM films WHERE id_film = ${request.params.id}`, (err, result) => {

        response.json({status: 200})

        request.io.sockets.emit('films', {
            type: "DELETE",
            id_film: request.params.id
        })

    })

})

module.exports = router