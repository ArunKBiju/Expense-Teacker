document.addEventListener('DOMContentLoaded', function() {
    var usernameElement = document.getElementById('username');
    var totalIncomeElement = document.getElementById('total-income');
    var totalExpenseElement = document.getElementById('total-expense');
    var totalSavingsElement = document.getElementById('total-savings');

    // Load user information from localStorage
    var username = localStorage.getItem('username');
    var totalIncome = parseFloat(localStorage.getItem('totalIncome')) || 0;
    var totalExpense = parseFloat(localStorage.getItem('totalExpense')) || 0;
    var totalSavings = totalIncome - totalExpense;

    // Display user information
    usernameElement.textContent = username;
    totalIncomeElement.textContent = totalIncome.toFixed(2);
    totalExpenseElement.textContent = totalExpense.toFixed(2);
    
    if (totalSavings >= 1) {
        totalSavingsElement.textContent = totalSavings.toFixed(2);
    } else {
        totalSavingsElement.textContent = 'You have no savings till now';
    }

    // Logout button
    document.getElementById('logout').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    // Delete account button
    document.getElementById('delete-account').addEventListener('click', function() {
        if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            // Clear all user data
            localStorage.clear();
            // Redirect to index.html
            window.location.href = 'index.html';
        }
    });
});
