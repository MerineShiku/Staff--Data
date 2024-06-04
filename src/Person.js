import React from 'react';

const Person = ({ name, title, children }) => {

    const items = [
        { id: 25, name: 'Alice', job: 'Engineer' },
        { id: 6, name: 'Bob', job: 'Designer' },
        { id: 56, name: 'Charlie', job: 'Teacher' },
        { id: 62, name: 'Dave', job: 'Developer' }
    ];

    const getImageUrl = (id) => `https://randomuser.me/api/portraits/thumb/men/${id}.jpg`;

    return (
        <div >
            {items.map((item) => (
                <div key={item.id} className="person">
                    <img src={getImageUrl(item.id)} alt={`${item.name}'s avatar`} />
                    <div>
                        <h4>{item.name}</h4>
                        <h5>{item.job}</h5>
                        {children}
                        
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Person;
