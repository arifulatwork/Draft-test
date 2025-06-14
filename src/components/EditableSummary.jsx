import React from 'react';
import { useEditMode } from '../hooks/useEditMode';

export default function EditableSummary({ initialSummary, onSave }) {
  const { isEditing, toggle } = useEditMode();
  const [text, setText] = React.useState(initialSummary);

  return (
    <div>
      {isEditing ? (
        <>
          <input value={text} onChange={e => setText(e.target.value)} />
          <button onClick={() => { onSave(text); toggle(); }}>Save</button>
        </>
      ) : (
        <>
          <span>{text}</span>
          <button onClick={toggle}>Edit</button>
        </>
      )}
    </div>
  );
}
