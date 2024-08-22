<div text-align="center">
  <h1>La Coctelera (<i>frontend</i>)</h1>
  <p>
    <strong>
    La Coctelera is a simple web service in which cocktail recipes are collected and openly shared.
    </strong>
  </p>
  <p>

---

> [!Warning]
> This service is in an early stage of development.

This repository includes the frontend side of La Coctelera web service. The backend side of
the service shall be found [here][lacoctelera_backend]. The service's frontend is developed in JavaScript using React library and Tailwind CSS framework.

# Build & Deploy

**_Currently, only local deployment is supported._**

## Dependencies

In order to run this service, following dependencies are needed:

- **Node.js \***. The latest LTS version installation guidelines found [here][node-js-install].

After installing Node.js, install the rest of dependencies specified in package.json file simply running

```bash
$ npm install
```

from the root of the project's directory.

## Start

To start a development server, run:

```bash
$ npm run dev
```

To view the project in your browser follow the default URL:
http://localhost:5173/

If this server port is already being used, follow VITE's instruction in the terminal. It will automatically try the next available port.
To change server port manually consult Vite [documentation][vite-config]

## Version 0.9

The earliest version of La Coctelera app includes:

- A homepage with tested GET request (displays different types of vodka from the app's database as default)
- About page with dummy text

- Share your recipe page with tested POST request .To check your POST request status go to console, or insert a new type of vodka and look for it on the homepage.

[lacoctelera_backend]: https://github.com/felipet/lacoctelera_backend
[node-js-install]: https://nodejs.org/en
[vite-config]: https://vitejs.dev/config/server-options
