# TITLE: My Transactions Manager App

# About the App
This project is a simple React application that helps you manage transactions. The app allows you to add, search, display and delete transactions using a local JSON server as the backend.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Table of Contents
 - Features
 - Installation
 - Usage
 - Components
 - Contributing
 - License
 
 ## Features
With the App you can:
  . Add Transactions: Easily add new transactions using a form.
  . Search Transactions: Filter through the list of transactions with the search bar.    
  .View Transactions: View the list of your transactions displayed as a table.
  .Delete a tansaction: delete a transaction from the table with the delete button.
  
  ## Installation
To set up this project locally, follow these steps:

Prerequisites
1) Node.js and npm: Make sure you have Node.js and npm installed. You can download them from nodejs.org

2) JSON Server: This app uses JSON Server to simulate a backend. Install it globally using the command below in your terminal:
     npm install -g json-server

Steps
1.Clone the Repository:
 git clone https://github.com/yourusername/transaction-manager-app.git

2.Navigate to the Project Directory:
   cd transaction-manager-app

3.Install Dependencies:  
  npm install

4. Start the JSON Server:
  json-server --watch db.json --port 3000

5.Run the React App:
  npm start

The app should now be running at `http://localhost:3000`  

## Usage
Once the app is running, you can:

 - Add new transactions by filling out the form.
 - Use the search bar to filter transactions based on your search term.
 - View all transactions in a tabular format.

## Components
 .**App**: The main component that holds the state and renders other components.
 .**Header**: Displays the header of the application.
 .**SearchBar**: A component for the search input field.
 .**TransactionForm**: A form for adding new transactions.
 .**TransactionTable**: Displays a list of transactions in a table format which can be deleted.

 ## Contributing 
If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

 ## License
This project is licensed under the MIT License. See the LICENSE file for details.
