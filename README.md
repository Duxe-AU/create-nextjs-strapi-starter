# NextJS + Strapi

Note: Please ensure you have installed [nodejs](https://nodejs.org/en/download/)

This is the official documentation for the NextJS + Strapi Template project. Built with NextJS v13.5.6 using the new App Router, and Strapi v4.12.5 for content management.

To preview and run the project on your device:

1) Open project folder in [Visual Studio Code](https://code.visualstudio.com/download)
2) In the terminal, run `npm run setup` to setup dependencies for both frontend and backend
3) Generate an `.env` file in both the root directory and the backend folder. You'll find a `.env.sample` file within each of these folders. To configure your environment correctly, duplicate the content of each `.env.sample` file into its respective `.env` file.
4) Run `npm run dev:backend` to start Strapi server. After starting, the create account page will automatically appear in your browser. If not, go to [http://localhost:1337/admin](http://localhost:1337/admin) and setup a new admin account.
5) After creating an account and logging in to the Strapi Admin dashboard, reate an API Token. Navigate to Settings -> API Tokens and click on the `Create new API Token.

    Here are our Token Settings

    - Name: Public API Token Content
    - Description: Access to public content
    - Token duration: Unlimited
    - Token type: Full access

    After saving, make sure to copy the generated token and set it as the value for the `NEXT_PUBLIC_STRAPI_API_TOKEN` variable inside the `.env` file in the root directory.

    The token disappears when you navigate out of the page.

6) Stop the server and run `npm run seed` in the terminal to start seeding data into Strapi.
7) When the seeding is complete, run `npm run dev` to start the development servers. This will run both the NextJS and Strapi instances concurrently.
8) Go to [http://localhost:3000](http://localhost:3000) to open the local website.
