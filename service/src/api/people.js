exports.fetchPeople = async page => {
    return await (await fetch(`/api/people?page=${page}`)).json();
};

exports.favoritePeople = async name => {
    try {
        const response = await fetch(`/api/people/favorite/${name}`, { method: 'POST' });
        return response.status < 300;
    } catch (e) {
        return false;
    }
};

exports.unfavoritePeople = async name => {
    try {
        const response = await fetch(`/api/people/favorite/${name}`, { method: 'DELETE' });
        return response.status < 300;
    } catch (e) {
        return false;
    }
};