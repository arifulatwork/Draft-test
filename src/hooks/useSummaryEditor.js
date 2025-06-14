import { useState } from 'react';

export function useSummaryEditor(initialText, onSave) {
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);

  const startEdit = () => setIsEditing(true);
  const cancelEdit = () => {
    setText(initialText); // Revert changes
    setIsEditing(false);
  };
  const saveEdit = () => {
    onSave(text); // External save handler
    setIsEditing(false);
  };

  return {
    text,
    setText,
    isEditing,
    startEdit,
    cancelEdit,
    saveEdit,
  };
}
