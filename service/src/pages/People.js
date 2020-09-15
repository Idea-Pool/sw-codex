import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import { Star, StarFill } from 'react-bootstrap-icons';
import { fetchPeople, favoritePeople, unfavoritePeople } from '../api/people';
import Alert from '../components/Alert';

function People() {
    const [peopleList, setPeopleList] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        const fetchCast = async () => {
            const people = await fetchPeople(currentPage);
            setPeopleList(people);
        };

        fetchCast();
    }, [currentPage]);

    const showAlert = (type, message) => {
        setAlert({ type, message });
    };
    const hideAlert = () => {
        setAlert(null);
    };

    const favorite = async name => {
        if (await favoritePeople(name)) {
            setPeopleList(await fetchPeople(currentPage));
            showAlert('success', `Favorited ${name}`);
        } else {
            showAlert('danger', `Could not favorite ${name}`);
        }
    };
    const unfavorite = async name => {
        if (await unfavoritePeople(name)) {
            setPeopleList(await fetchPeople(currentPage));
            showAlert('success', `Unfavorited ${name}`);
        } else {
            showAlert('danger', `Could not unfavorite ${name}`);
        }
    };

    let table = <div className="justify-content-md-center">
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    </div>;
    let pagination = <div></div>;

    const { results: people, count } = peopleList;
    if (Array.isArray(people) && people.length > 0) {
        table = <Table striped bordered hover>
            <thead>
                <tr>
                    <th>F*</th>
                    <th>Name</th>
                    <th>Birth year</th>
                    <th>Height (cm)</th>
                    <th>Mass (kg)</th>
                </tr>
            </thead>
            <tbody>
                {people.map((person, i) => (
                    <tr key={i}>
                        <td width="50">{person.favorite ? <StarFill onClick={() => unfavorite(person.name)} /> : <Star onClick={() => favorite(person.name)} />}</td>
                        <td>{person.name}</td>
                        <td align="right">{person.birth_year}</td>
                        <td align="right">{person.height}</td>
                        <td align="right">{person.mass}</td>
                    </tr>
                ))}
            </tbody>
        </Table>;

        const maxPage = Math.ceil(count / 10);

        const first = () => setCurrentPage(1);
        const last = () => setCurrentPage(maxPage);
        const next = () => setCurrentPage(currentPage + 1);
        const prev = () => setCurrentPage(currentPage - 1);

        pagination = <Pagination>
            <Pagination.First disabled={currentPage === 1} onClick={first} />
            <Pagination.Prev disabled={currentPage === 1} onClick={prev} />
            {Array.from({ length: maxPage }).map((_, i) => (
                <Pagination.Item key={i} active={i + 1 === currentPage} onClick={() => setCurrentPage(i + 1)}>{i + 1}</Pagination.Item>
            ))}
            <Pagination.Next disabled={currentPage === maxPage} onClick={next} />
            <Pagination.Last disabled={currentPage === maxPage} onClick={last} />
        </Pagination>;
    }

    return (
        <div>
            <h1>People</h1>
            {table}
            {pagination}
            {alert ? <Alert type={alert.type} message={alert.message} onClose={hideAlert} /> : <div />}
        </div>
    );
}

export default People;