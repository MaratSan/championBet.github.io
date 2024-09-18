import React, { useState } from 'react';

// Интерфейс задачи
interface Todo {
    id: number;
    name: string;
}

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');
    const [deleteClickCount, setDeleteClickCount] = useState<{ [key: number]: number }>({});
    const [notification, setNotification] = useState<string | null>(null);
    const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

    // Функция добавления задачи
    const addTodo = () => {
        if (newTodo.length > 15) {
            setTodos([...todos, { id: Date.now(), name: '' }]);
        } else {
            setTodos([...todos, { id: Date.now(), name: newTodo }]);
        }
        setNewTodo('');
    };

    // Функция удаления задачи
    const deleteTodo = (id: number) => {
        const count = deleteClickCount[id] || 0;
        if (count >= 1) {
            setTodos(todos.filter(todo => todo.id !== id));
            const newDeleteClickCount = { ...deleteClickCount };
            delete newDeleteClickCount[id];
            setDeleteClickCount(newDeleteClickCount);
        } else {
            setNotification('Task successfully deleted (but it isn’t actually gone yet)');
            setDeleteClickCount({ ...deleteClickCount, [id]: count + 1 });
        }
    };

    // Функция открытия модального окна для редактирования
    const openEditModal = (todo: Todo) => {
        setEditingTodo(todo);
    };

    // Функция сохранения изменений
    const saveTodo = (newName: string) => {
        if (editingTodo) {
            setTodos(todos.map(todo => (todo.id === editingTodo.id ? { ...todo, name: newName } : todo)));
            setEditingTodo(null); // Закрываем модальное окно
        }
    };

    // Закрытие модального окна без сохранения
    const closeEditModal = () => {
        setEditingTodo(null);
    };

    return (
        <div style={styles.container}>
            <h1>Todo App</h1>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter todo"
                    style={styles.input}
                />
                <button onClick={addTodo} style={styles.button}>Add</button>
            </div>
            {newTodo.length > 15 && (
                <p style={{ color: 'red' }}>Name must be 15 characters or less</p>
            )}
            {notification && <p style={{ color: 'green' }}>{notification}</p>}
            <TodoList todos={todos} onDelete={deleteTodo} onEdit={openEditModal} />

            {editingTodo && (
                <EditModal
                    todo={editingTodo}
                    onSave={saveTodo}
                    onClose={closeEditModal}
                />
            )}
        </div>
    );
};

interface TodoListProps {
    todos: Todo[];
    onDelete: (id: number) => void;
    onEdit: (todo: Todo) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onEdit }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDelete={() => onDelete(todo.id)} onEdit={() => onEdit(todo)} />
            ))}
        </ul>
    );
};

interface TodoItemProps {
    todo: Todo;
    onDelete: () => void;
    onEdit: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onEdit }) => {
    return (
        <li style={styles.todoItem}>
            <span>{todo.name || '(No Name)'}</span>
            <button onClick={onEdit} style={styles.button}>Edit</button>
            <button onClick={onDelete} style={styles.button}>Delete</button>
        </li>
    );
};

// Модальное окно для редактирования
interface EditModalProps {
    todo: Todo;
    onSave: (newName: string) => void;
    onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({ todo, onSave, onClose }) => {
    const [newName, setNewName] = useState(todo.name);

    return (
        <div style={styles.modalOverlay}>
            <div style={styles.modal}>
                <h2>Edit Todo</h2>
                <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    style={styles.input}
                />
                <div style={styles.modalButtons}>
                    <button onClick={() => onSave(newName)} style={styles.button}>Save</button>
                    <button onClick={onClose} style={styles.button}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

// Стили для централизации и оформления
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center' as 'center',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        marginBottom: '20px',
    },
    input: {
        width: '200px',
        marginBottom: '10px',
    },
    button: {
        width: '100px',
        marginBottom: '10px',
    },
    todoItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
    },
    modalOverlay: {
        position: 'fixed' as 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center' as 'center',
    },
    modalButtons: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '20px',
    },
};

export default TodoApp;
