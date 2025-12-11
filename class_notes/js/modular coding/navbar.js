export function navbar() {
    return `<nav><a href="./index.html">Home</a> <a href="./signup.html">Signup</a> <a href="./login.html">Login</a> <a href="./todos.html">Todos</a> <button onclick="logout()">Logout</button></nav>`;
}
window.logout = function() {
    localStorage.removeItem('currentUser');
    window.location.href = './index.html';
};