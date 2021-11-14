# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

(\*￣(エ)￣) add files\
ヽ(✿ ﾟ ▽ ﾟ)ノ a great achievement\
.....((/- -)/ fix bugs or modify files

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run server`

Runs the server in [http://localhost:5000](http://localhost:5000)

export sixeleven_sixelevenPrivateKey="privateKey"

# 6-Eleven


6-Eleven is a MERN stack e-commerce web application

## Features

For application page preview, please check out the front end [README.md](client/README.md).

✅   Implemented

◽    To Be Implemented

| Feature | Description |
| - | - |
| Authentication | ✅ User Authentication with bcrypt <br/> ✅ Google Sign In <br /> ◽ Password Change & Recovery |
| Authorization | ✅ User Authorization with JWT and the Refresh Token Rotation technique. <br/> Two tokens: **Access Token** and **Refresh Token**, are used for authorization: <ul><li>Access token is a short-lived (2m) token used to access the user-specific resources. Access token is stored in-memory. </li><li>Refresh token is a much longer lived (3 days) token used to refresh the access token. Refresh tokens are sent as an HttpOnly cookie.</li></ul> Sending the refresh token as a HttpOnly cookie can prevent XSS attacks. However, as cookies are sent along with every request, it will result in the application vulnerable to CSRF. To solve this, the refresh token is rotated - replaced by a refresh token - each time the user asks for access tokens. This way, the refresh token is effectively a cryptographic nounce. |
| Airbnb Style Form Vlidation | ✅ Interactive form validation to provide rich user experience |
| Shopping Cart | ✅ Shopping Cart for anonymous and registered user. <br/> The shopping cart behaves in the following ways: <ul><li>When the user is NOT logged in: the cart information is persisted to local storage. The cart information will not lose on page refresh or close and re-enter the page.</li><li>When the user sign up: all the cart information will be automatically added to the new user account</li><li>When the user is logged in: cart information will be retrieved from the server. The user's cart information will be identical regardless of on which device or geographical location the user is accessing the website.</li></ul> ◽ Redis as the cache for shopping cart to speed up the application <br /> ◽️ Checkout usingStripe Payments|
| User Personalization | ◽ Set app themes <br/> ◽ Change Profile Picture <br/> ◽ Log out different logging sessions (with device information)  <br/> ◽ Disconnect from external service |
| Sellers Support | ◽️ Registered use can go through a process to become a seller and post listings |
| Search Bar | ◽️ Incorporate Apache Solr as the search engine to provide searching and filtering functionalities |

## Running the Application Locally

It takes some 15 - 20 minutes amount to set up the project to run locally.

To start:

- Clone the repository to your local machine.
- In the command line, change the working directory into the project base folder.

### Set Up the Database

- Set up a mongoDB Atlas Cluster and create a database. The name of the cluster, database, and database user can be of your own choosing.
  - Step by step setup guide from mongodb's official documentation: [Get Started with Atlas](https://docs.atlas.mongodb.com/getting-started/).
- Import data from JSON: `cd` into `/api/db`. For each JSON file, run the following command. Note: you'll need to replace the content within the `< >` bracket with your own credentials.
  - Details about getting the connection string: [Connect to Your Atlas Cluster](https://docs.atlas.mongodb.com/tutorial/connect-to-your-cluster/#connect-to-your-atlas-cluster).

```bash
mongoimport --uri "mongodb+srv://<db-user-name>:<password>@<cluster name>.mongodb.net/<database-name>" --drop=<file-name>.json
```

### Install the Dependencies

- Change the working directory to the project base folder.
- Install all the dependencies for both the frontend and backend applications by running the following commands:

```bash

npm install
cd backend
npm install
```




### Run the Applications

- Change the working directory to the project base folder.
- Run the following commands to start the applications:

```bash
cd api
npm run dev # to start the backend
cd ../client
npm start # to start the frontend
```

- Access `localhost:3000` from your browser.
