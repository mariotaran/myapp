const createMisura = (request, response) => {
    const { misura } = request.body

    pool.query('INSERT INTO misure (misura) VALUES ($1, $2)', [misura], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Misura registrata: ${result.insertId}`)
    })
}