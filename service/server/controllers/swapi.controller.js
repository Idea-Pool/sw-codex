const { getPeople } = require('../swapi');

const favorites = [];

exports.peopleGet = async (req, res) => {
    const { page } = req.query;
    const result = await getPeople(page || 1);
    result.results.forEach(cast => {
        cast.favorite = favorites.includes(cast.name);
    });
    res.send(result);
}

const JAR_JAR = 'Jar Jar Binks';

exports.favoritePeoplePost = async (req, res) => {
    const { name } = req.params;
    if (name !== JAR_JAR) {
        return res.status(418).send({ error: `Not ${JAR_JAR}` });
    }
    const idx = favorites.indexOf(name);
    if (idx === -1) {
        favorites.push(name)
    }
    res.send({});
}

exports.unfavoritePeopleDelete = async (req, res) => {
    const { name } = req.params;
    const idx = favorites.indexOf(name);
    if (idx > -1) {
        favorites.splice(idx, 1)
    }
    res.send({});
}