# Диплом курса «Базовый JavaScript в браузере»

## Описание

Video walkthrough (click the image):

[![BHJ Diploma](https://img.youtube.com/vi/zXOyBIajWsM/0.jpg)](https://www.youtube.com/watch?v=zXOyBIajWsM)

This is a JavaScript App for tracking the finances.

App has following functionality:

1. **Registration.** Registers new user in an application. 

2. **Authorization.** Authorizes user in an application.

3. **Log Out.** Logs out user from an application.

4. **Creating account.** 

5. **Deleting account.**

6. **Creating a transactions.** 

7. **Deleting transactions.**

## How to start

To start an app the local server needed "http://localhost:8000". 
[How to run local server](./md/server.md)

To run server use the following command `npm run start`. In this case the server runs using `nodemon` starting the file `index.js`

While connected to local server the working directory is *public/js*.

## Files structure:

- js/
    - __api/__ (connection with server, API requests)
        - __Account.js__ (manage the accounts)
        - __createRequest.js__ (API requests, responses)
        - __Entity.js__ (Basic class for accounts, users и incomes/expenses)
        - __Transaction.js__ (manages income and expenses)
        - __User.js__ (registration/authorization/logging in)
    - ui/
        - forms/ (app forms)
            - __AsyncForm.js__ (Basic class for all form. Uses mostly for modal windows)
            - __CreateAccountForm.js__ (form for creating a new account)
            - __CreateTransactionForm.js__ (form for creating a new income/expense)
            - __LoginForm.js__ (log in form)
            - __RegisterForm.js__ (registration form)
        - pages/ (app pages)
            - __TransactionPage.js__ (page of transactions of particular account)
        - widgets/
            - __AccountsWidget.js__ (widget for managing accounts)
            - __TransactionsWidget.js__ (widget for managing transactions)
            - __UserWidget.js__ (widget for current user)
        - __Modal.js__ (basic class for all modal windows)
        - __Sidebar.js__ (class for side window)
    - __App.js__ (App class)
    