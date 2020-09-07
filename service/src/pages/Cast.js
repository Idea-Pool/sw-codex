import React, { useState, useEffect } from 'react';

function Cast() {
    const [castList, setCastList] = useState([]);

    const fetchCast = async () => {
        const cast = await (await fetch('/api/cast')).json();
        setCastList(cast.cast);
    };

    useEffect(() => { fetchCast(); }, []);

    return (
        <div onLoad={fetchCast}>
            <h1>Cast</h1>
            {castList.length > 0 && <table>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {castList.map((cast, i) => (
                        <tr key={i}>
                            <td>{cast.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>}
        </div>
    );
}

export default Cast;