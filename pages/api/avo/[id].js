import DB from '@database';

const allAvos = async (req, res) => {
    const db = new DB();
    const id = req.query.id
    const entry = await db.getById(id);

    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'application/json')
    // res.end(JSON.stringify({data: entry}))
    res.status(200).json(entry)
    //esto es un helper que provee next es lo mismo de las
    //3 lineas arriba en una sola, devolvemo la entrada 
    //directamente sin envolverla en una propiedad data
}

export default allAvos;