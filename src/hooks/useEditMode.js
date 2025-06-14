import { useState } from 'react';

export function useEditMode(defaultState = false) {
  const [isEditing, setIsEditing] = useState(defaultState);
  const toggle = () => setIsEditing(prev => !prev);
  return { isEditing, toggle, setIsEditing };
}
