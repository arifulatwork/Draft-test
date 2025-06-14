import { useEffect, useState } from 'react';
import { fetchNestedTable } from '../services/mockApi';

export function useNestedTable(rowId, colId) {
  const [loading, setLoading] = useState(false);
  const [table, setTable] = useState(null);

  useEffect(() => {
    if (!rowId || !colId) return;
    setLoading(true);
    fetchNestedTable(rowId, colId).then(data => {
      setTable(data);
      setLoading(false);
    });
  }, [rowId, colId]);

  return { table, loading };
}

