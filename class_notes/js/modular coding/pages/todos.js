// Simple todos file
export function fetchAndDisplayTodos() {
    var loading = document.getElementById('loading');
    var errorMsg = document.getElementById('error');
    
    loading.style.display = 'block';
    errorMsg.style.display = 'none';
    
    // Get todos from API
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(function(response) {
            return response.json();
        })
        .then(function(todos) {
            loading.style.display = 'none';
            showTodos(todos);
        })
        .catch(function(error) {
            loading.style.display = 'none';
            errorMsg.style.display = 'block';
            errorMsg.innerHTML = 'Error: Could not load todos';
        });
}

function showTodos(todos) {
    var container = document.getElementById('todosContainer');
    var html = '';
    
    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];
        html += '<div>';
        html += '<p>' + todo.title + '</p>';
        html += '<span>' + (todo.completed ? 'Done' : 'Not Done') + '</span>';
        html += '</div>';
    }
    
    container.innerHTML = html;
    container.style.display = 'block';
}

export function checkAuth() {
    var currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        alert('Please log in first!');
        window.location.href = './login.html';
        return false;
    }
    return true;
}