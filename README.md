# golden-shoe-store

Run `npm install` in the root of the folder.

You may need to navigate into the `/frontend` and `/backend` folders to install the relevant dependencies.

To seed the database with the product data: `npm run dataImport`.

To run both the frontend and backend servers: `npm run dev` in root.

You may need to update the `proxy` script in the `frontend/package.json` dependent on which port you have the db configured to.

Please create a `.env` file using the `example.env.js` as a template. I will send you the required content.

To test the Email service, please enter your email address into the Form - you should receive a mock e-mail response from the "Golden Shoe" team.

# TODO:

Frontend:

- styling
- make reusable components
- add Storybooks to project
- fix bug on Homepage: if you have a filter selected the search no longer works
- testing the pages (react-testing-library)
- extracting and unit testing functions
