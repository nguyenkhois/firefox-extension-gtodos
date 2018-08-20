export const deletedTasksActions = {
    removeDeleted: () => ({ type: 'REMOVE_DELETED' }),
    restoreDeleted: (item) => ({ type: 'RESTORE_DELETED', task: item })
};