// Simple display function
export function displayTodos(todos) {
    var container = document.getElementById('todosContainer');
    var html = '';
    
    if (!todos || todos.length === 0) {
        container.innerHTML = '<p>No todos found!</p>';
        return;
    }
    
    html += '<h2>Your Todos</h2>';
    
    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];
        html += '<div style="border: 1px solid black; padding: 10px; margin: 5px;">';
        html += '<p><strong>Todo #' + todo.id + '</strong></p>';
        html += '<p>' + todo.title + '</p>';
        
        if (todo.completed) {
            html += '<p style="color: green;">Completed</p>';
        } else {
            html += '<p style="color: red;">Not Completed</p>';
        }
        
        html += '</div>';
    }
    
    container.innerHTML = html;
    container.style.display = 'block';
}

export function setTodos(todos) {
    // Simple function - not needed for basic version
}