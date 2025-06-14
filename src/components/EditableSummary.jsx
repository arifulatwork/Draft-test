import React from 'react';
import { useSummaryEditor } from '../hooks/useSummaryEditor';
import { usePermissions } from '../hooks/usePermissions';

export default function EditableSummary({ initialSummary, onSave, tableId }) {
  const {
    text,
    setText,
    isEditing,
    startEdit,
    cancelEdit,
    saveEdit,
  } = useSummaryEditor(initialSummary, onSave);

  const { canEdit } = usePermissions('admin', tableId, 't1'); // Lets Check dummy preparation

  return (
    <div>
      {isEditing ? (
        <>
          <input value={text} onChange={e => setText(e.target.value)} />
          <button onClick={saveEdit}>Save</button>
          <button onClick={cancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          <span>{text}</span>
          {canEdit && <button onClick={startEdit}>Edit</button>}
        </>
      )}
    </div>
  );
}
