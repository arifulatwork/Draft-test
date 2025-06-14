import { useState } from 'react';

export function useSummaryEditor(initialText, onSave) {
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);

  const startEdit = () => setIsEditing(true);
  const cancelEdit = () => {
    setText(initialText);
    setIsEditing(false);
  };
  const saveEdit = () => {
    onSave(text);
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
