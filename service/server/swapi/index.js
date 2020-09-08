const fetch = require('node-fetch');

const API_HOST = 'https://swapi.dev/api' || ProcessingInstruction.env.API_HOST;

const fetchAPI = async path => {
    const response = await fetch(`${API_HOST}${path}`);
    return await response.json();
};

module.exports.getPeople = async (page = 1) => {
    let path = '/people/';
    if (page) {
        path += `?page=${page}`;
    }
    return await fetchAPI(path);
};