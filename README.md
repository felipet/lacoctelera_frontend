<div text-align="center">
  <h1>La Coctelera (<i>frontend</i>)</h1>
  <p>
    <strong>
    La Coctelera is a simple web service in which cocktail recipes are collected and openly shared.
    </strong>
  </p>
  <p>
  </div>

---

> [!Warning]
> This service is in an early stage of development.

This repository includes the frontend side of La Coctelera web service. The backend side of
the service shall be found [here][lacoctelera_backend]. The service's frontend is developed in JavaScript using React library and Tailwind CSS framework.

# Build & Deploy

**_Currently, only local deployment is supported._**

## Dependencies

In order to run this service, following dependencies are needed:

- **Node.js**. The latest LTS version installation guidelines found [here][node-js-install].

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

To view the project in your browser follow the next URL:
http://localhost:5173/ingredient

## Functionality

Sends a new ingredient to the app's database.

[lacoctelera_backend]: https://github.com/felipet/lacoctelera_backend
[node-js-install]: https://nodejs.org/en
