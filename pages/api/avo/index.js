import DB from '../../../database/db';

const allAvos = async (req, res) => {
    const db = new DB();
    const allEntries = await db.getAll();
    const length = allEntries.length;

    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'application/json')
    // res.end(JSON.stringify({length, data: allEntries}))
    res.status(200).json( {data: allEntries, length} )
}

export default allAvos;

//Creamos una api dentro de la carpeta api, esto no se debe cambiar
//y dentro funcionan como la carpeta pages,
//al ir al http://localhost:3000/api/avo tendremos la respuesta de 
//esta función allAvos. (o nuestra api)
// si el setHeader esta mal escrito descarga la data o da 404