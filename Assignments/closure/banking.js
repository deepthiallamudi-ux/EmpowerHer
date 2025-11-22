
function createBankAccount() {
    let balance = 0;

    function deposit(amount) {
        if (amount > 0) {
            balance += amount;
            console.log(`Deposited: ${amount}`);
        } else {
            console.log("Deposit amount must be positive");
        }
    }

    function withdraw(amount) {
        if (amount > balance) {
            console.log("Insufficient balance");
            return false;
        }
        if (amount > 0) {
            balance -= amount;
            console.log(`Withdrew: ${amount}`);
            return true;
        } else {
            console.log("Withdrawal amount must be positive");
            return false;
        }
    }

    // Return object with methods (balance is private due to closure)
    return {
        deposit,
        withdraw,
    };
}

// Example Usage:
const account = createBankAccount();
account.deposit(500);      // Output: Deposited: 500. Current balance: 500
account.withdraw(200);     // Output: Withdrew: 200. Current balance: 300
account.withdraw(400);     // Output: Insufficient balance
console.log(account.balance); // Output: undefined (balance is private)




