import DB from '../db/db.js';

export async function createNewPet(req, res) {
  try {
    const { name, dob, client_email, isarchived } = req.body;
    const petObj = [name, dob, client_email, isarchived];
    const pet = await DB.query(
      `INSERT INTO pets (name, dob, client_email, isarchived) VALUES('${name}', '${dob}', '${client_email}', '${isarchived}')`
    );
    res.json(petObj);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAllPets(req, res) {
  try {
    const pets = await DB.query(
      'SELECT name, dob, client_email, isarchived from pets'
    );

    res.json(pets.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
