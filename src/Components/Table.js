// src/components/Table.js
import React from 'react';
import './Table.css'; // Include your styling here

const Table = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
