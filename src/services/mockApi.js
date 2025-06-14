export function fetchNestedTable(rowId, colId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: ${rowId}_${colId},
        rows: [
          { id: 'r1', summary: 'Nested Summary 1' },
          { id: 'r2', summary: 'Nested Summary 2' }
        ]
      });
    }, 500);
  });
}
