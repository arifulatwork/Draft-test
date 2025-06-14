import React from 'react';
import { useNestedTable } from '../hooks/useNestedTable';
import EditableSummary from './EditableSummary';

export default function NestedTable({ rowId, colId }) {
  const { table, loading } = useNestedTable(rowId, colId);

  if (loading) return <p>Loading nested table...</p>;
  if (!table) return null;

  return (
    <div style={{ paddingLeft: 20 }}>
      {table.rows.map(row => (
        <EditableSummary
          key={row.id}
          initialSummary={row.summary}
          onSave={newText => console.log(Saved: ${newText})}
        />
      ))}
    </div>
  );
}
