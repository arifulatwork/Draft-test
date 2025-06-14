import React from 'react';

export default function Toolbar({ onChange }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>Filter: </label>
      <input onChange={e => onChange(e.target.value)} />
    </div>
  );
}
