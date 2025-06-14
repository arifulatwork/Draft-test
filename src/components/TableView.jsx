import React, { useContext } from 'react';
import NestedTable from './NestedTable';
import EditableSummary from './EditableSummary';
import { TableFilterContext } from '../context/TableFilterContext';

export default function TableView() {
  const filter = useContext(TableFilterContext);

  const tableRows = [
    { id: 'row1', colId: 'colA', summary: 'Main Summary 1' },
    { id: 'row2', colId: 'colB', summary: 'Main Summary 2' }
  ];

  const filteredRows = tableRows.filter(row =>
    row.summary.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {filteredRows.map(row => (
        <div key={row.id} style={{ marginBottom: '1rem' }}>
          <EditableSummary
            initialSummary={row.summary}
            tableId="t1"
            onSave={(newText) => alert('Saved: ' + newText)}
          />
          <NestedTable rowId={row.id} colId={row.colId} />
        </div>
      ))}
    </div>
  );
}
