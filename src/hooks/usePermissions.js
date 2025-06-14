export function usePermissions(userRole, tableId, editTableId) {
  const canEdit = userRole === 'admin' && tableId === editTableId;
  return { canEdit };
}
