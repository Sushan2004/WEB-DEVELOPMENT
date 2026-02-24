function createBankAccount(owner, initialBalance) {
    let balance = initialBalance; // closure (private)

    return {
        owner: owner, // exposed property

        deposit(amount) {
            if (amount <= 0) {
                throw new Error("Deposit amount must be positive.");
            }
            balance += amount;
            return balance;
        },

        withdraw(amount) {
            if (amount > balance) {
                throw new Error("Insufficient funds.");
            }
            balance -= amount;
            return balance;
        },

        getBalance() {
            return balance;
        }
    };
}

// 🔹 Demo
const acc = createBankAccount('SAM', 20);

console.log(acc.deposit(15));   // balance: 35
console.log(acc.withdraw(10));  // balance: 25
console.log(acc.owner);         // "SAM"
console.log(acc.getBalance());  // 25
