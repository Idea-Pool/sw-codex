const { getPeople } = require('../swapi');

exports.peopleGet = async (req, res) => {
    const { page } = req.query;
    const result = await getPeople(page || 1);
    res.send(result);
}