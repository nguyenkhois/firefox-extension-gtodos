import { LocalStorageMethods } from 'g-jslib';

export const todosReducer = (state, action) => {
    const keyOfLocalStorage = 'gToDos';
    state === undefined ? state = LocalStorageMethods.retrieve('gToDos', {todos: []}) : null;

    switch (action.type) {
        case 'ADD_TASK':
            const stateAfterAdd = {
                ...state,
                todos: state.todos.concat(action.task)
            };
            LocalStorageMethods.store(keyOfLocalStorage, stateAfterAdd);
            return stateAfterAdd

        case 'REMOVE_TASK':
            const itemIndexForRemove = state.todos.findIndex((item) => item.id === action.task.id);
            const stateAfterRemove = {
                ...state,
                todos: state.todos.map((item, index) => index === itemIndexForRemove ? { ...item, isDeleted: true } : item)
            };

            LocalStorageMethods.store(keyOfLocalStorage, stateAfterRemove);
            return stateAfterRemove

        case 'CHECKED':
            const itemIndexForChecked = state.todos.findIndex((item) => item.id === action.task.id);
            const stateAfterChecked = {
                ...state,
                todos: state.todos.map((item, index) => index === itemIndexForChecked ? { ...item, isDone: !item.isDone } : item)
            };
            LocalStorageMethods.store(keyOfLocalStorage, stateAfterChecked);
            return stateAfterChecked

        case 'REMOVE_COMPLETED':
            const stateAfterRemoveCompleted = {
                ...state,
                todos: state.todos.map((item) => item.isDone ? { ...item, isDeleted: true } : item)
            };
            LocalStorageMethods.store(keyOfLocalStorage, stateAfterRemoveCompleted);
            return stateAfterRemoveCompleted

        case 'REMOVE_DELETED':
            const stateAfterRemoveDeleted = { 
                ...state, 
                todos: state.todos.filter((item) => !item.isDeleted)
            };
            LocalStorageMethods.store(keyOfLocalStorage, stateAfterRemoveDeleted);
            return stateAfterRemoveDeleted
        
        case 'RESTORE_DELETED':
            const itemIndexForRestore = state.todos.findIndex((item) => item.id === action.task.id);
            const stateAfterRestore = {
                ...state,
                todos: state.todos.map((item, index) => index === itemIndexForRestore ? {...item, isDeleted: false} : item)
            }
            LocalStorageMethods.store(keyOfLocalStorage, stateAfterRestore);
            return stateAfterRestore
            
        default:
            LocalStorageMethods.store(keyOfLocalStorage, state);
            return state
    }
};
