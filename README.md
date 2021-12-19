# 6-Eleven

6-Eleven is a MERN stack e-commerce web application

## Features

For application page preview, please check out the front end [README.md](client/README.md).

✅ Implemented

◽ To Be Implemented

| Feature              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Authentication       | ✅ User Authentication with bcrypt <br/> ✅ Google Sign In <br /> ◽ Password Change & Recovery                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Authorization        | ◽ User Authorization with JWT and the Refresh Token Rotation technique. <br/> Two tokens: **Access Token** and **Refresh Token**, are used for authorization: <ul><li>Access token is a short-lived (2m) token used to access the user-specific resources. Access token is stored in-memory. </li><li>Refresh token is a much longer lived (3 days) token used to refresh the access token. Refresh tokens are sent as an HttpOnly cookie.</li></ul> Sending the refresh token as a HttpOnly cookie can prevent XSS attacks. However, as cookies are sent along with every request, it will result in the application vulnerable to CSRF. To solve this, the refresh token is rotated - replaced by a refresh token - each time the user asks for access tokens. This way, the refresh token is effectively a cryptographic nounce. |
| Shopping Cart        | ✅ Shopping Cart for anonymous and registered user. <br/> The shopping cart behaves in the following ways: <ul><li>When the user is NOT logged in: the cart information is persisted to local storage. The cart information will not lose on page refresh or close and re-enter the page.</li><li>When the user sign up: all the cart information will be automatically added to the new user account</li><li>When the user is logged in: cart information will be retrieved from the server. The user's cart information will be identical regardless of on which device or geographical location the user is accessing the website.</li></ul> ✅ Redis as the cache for shopping cart to speed up the application <br /> ◽️ Checkout usingStripe Payments                                                                         |
| User Personalization | ◽ Set app themes <br/> ◽ Change Profile Picture <br/> ◽ Log out different logging sessions (with device information) <br/> ◽ Disconnect from external service                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Sellers Support      | ◽️ Registered use can go through a process to become a seller and post listings                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Search Bar           | ◽️ Incorporate Apache Solr as the search engine to provide searching and filtering functionalities                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Chat                 | ◽ Customers can chat with seller                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Confirm Email                 | ✅ When finishing registration, an email will send to user email to confirm email address existed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## Running the Application Locally

It takes some 15 - 20 minutes amount to set up the project to run locally.

To start:

- Clone the repository to your local machine.
- In the command line, change the working directory into the project base folder.

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
npm run redis
cd backend
npm start # to start the backend
cd ../
npm start # to start the frontend
```

- Access `localhost:3000` from your browser.
