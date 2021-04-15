# AND Digital Tech Test - golden-shoe-store

Clone this repo using the `git clone` command.

Run `npm install` in the root of the folder.

You may need to navigate into the `/frontend` folder to install the relevant dependencies.

Back in the root:

    - to seed the database with the product data: `npm run dataImport`.

    - to run both the frontend and backend servers: `npm run dev`.

    - create a `.env` file using the `example.env.js` as a template. I will send you the required content.

You may need to update the `proxy` script in the `frontend/package.json` dependent on which port you have the db configured to.

To test the Email service, please enter your email address into the Form on the `Contact Us` section of the website - you should receive an e-mail response from the "Golden Shoe" team.

# TODO:

Frontend:

- styling
- make reusable components
- add Storybooks to project
- fix bug on Homepage: if you have a filter selected the search no longer works
- testing the pages (react-testing-library)
- extracting and unit testing functions

Backend:

- testing

# Tech Used

Frontend:

- react
- redux && redux thunk
- axios
- JWT
- react-google-login
- styled-components

Backend:

- node
- express
- monogo-db && mongoose
- bcryptjs
- jsonwebtoken
- nodemailer && sendgrid
