import React, { useContext } from 'react';
import { useNestedTable } from '../hooks/useNestedTable';
import EditableSummary from './EditableSummary';
import { TableFilterContext } from '../context/TableFilterContext';

export default function NestedTable({ rowId, colId }) {
  const { table, loading } = useNestedTable(rowId, colId);
  const filter = useContext(TableFilterContext);

  if (loading) return <p>Loading nested table...</p>;
  if (!table) return null;

  const filteredRows = table.rows.filter(row =>
    row.summary.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ paddingLeft: 20 }}>
      {filteredRows.map(row => (
        <EditableSummary
          key={row.id}
          initialSummary={row.summary}
          tableId="t1"
          onSave={(text) => alert('Saved: ' + text)}
        />
      ))}
    </div>
  );
}
