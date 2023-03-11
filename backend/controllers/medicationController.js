import DB from '../db/db.js';

export async function createNewMed(req, res) {
  try {
    const { name, description } = req.body;
    const medObj = [name, description];
    const med = await DB.query(
      `INSERT INTO medications (name, description) VALUES('${name}', '${description}')`
    );
    res.json(medObj);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAllMed(req, res) {
  try {
    const med = await DB.query('SELECT name, description from medications');

    res.json(med.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
