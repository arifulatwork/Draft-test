import React from 'react';
import NestedTable from './NestedTable';
import EditableSummary from './EditableSummary';

export default function TableView() {
  const tableRows = [
    { id: 'row1', colId: 'colA', summary: 'Main Summary 1' },
    { id: 'row2', colId: 'colB', summary: 'Main Summary 2' }
  ];

  return (
    <div>
      {tableRows.map(row => (
        <div key={row.id} style={{ marginBottom: '1rem' }}>
          <EditableSummary
            initialSummary={row.summary}
            onSave={newText => console.log(Saved: ${newText})}
          />
          <NestedTable rowId={row.id} colId={row.colId} />
        </div>
      ))}
    </div>
  );
}
