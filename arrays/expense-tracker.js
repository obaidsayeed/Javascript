  const account = {
      name: 'Account Expenses',
      expenses: [],
      income: [],
      addIncome: function(description, amount) {
          this.income.push({
              description: description,
              amount: amount
          })
      },
      addExpenses: function(description, amount) {
          this.expenses.push({
              description: description,
              amount: amount
          })
      },

      getAccountSummary: function() {
          let totalExpenses = 0;
          let totalIncome = 0;
          this.income.forEach(function(income) {
              totalIncome = totalIncome + income.amount;
          })
          this.expenses.forEach(function(expense) {
              totalExpenses = totalExpenses + expense.amount;
          })
          return `Total income is ${totalIncome} & total expenses is ${totalExpenses} and balance is ${totalIncome - totalExpenses}`;
      }
  }

  account.addExpenses('Food', 56);
  account.addExpenses('Drink', 45);
  account.addIncome('job', 100);
  account.addIncome('revenue', 100);
  console.log(account.getAccountSummary());