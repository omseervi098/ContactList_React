
# Contact List
- Contactlist using ReactJS and hooks
- used ```https://jsonplaceholder.typicode.com/users``` to fetch contacts


## File Structure
* Main Component ```App.js```
  * ```List.js``` has List Component which has group of contact having delete and edit button and some information. 
  * ```Edit.js``` has Edit Component which has modal to update contact.
  * ```Add.js``` has Add Component which has modal to add contact to List Component.


## Features 
* Fetch and show users from the api - https://jsonplaceholder.typicode.com/users
* ```Add a contact```, make a POST call to the above url (from where you are fetching) and save the contact in react state. (This is be a dummy request).
* ```Update a contact```, make a PUT call to the above url. (Again this is a dummy call).
* ```Delete a contact```, make a DELETE call to the above url. (Again this is a dummy call)

## Demo

Deployed on Vercel

Link to Website : https://contactjs.vercel.app/


## Tech Stack

* **Client:** ReactJS, Hooks


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
