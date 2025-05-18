# cea-lite ⚡️

**Create Express App** — a lightweight CLI tool to scaffold a clean, organized Express.js project structure with ease.

> Similar to `create-react-app`, but for Express.js.

---

## Installation

```bash
npm install -g cea-lite
```

Or use directly with `npx`:

```bash
npx cea-lite init my-app
```

---

## Usage

```bash
cea-lite init <project-name> [options]
```

### Arguments

- `<project-name>` – The name of the Express app you want to create (required).

### Options

- `--folder <path>` – The path where the project will be created. Default: `.` (current directory).
- `-W, --with-folders` – Include a basic folder structure inside `src/` to organize your code better.

---

## Example

```bash
cea-lite init my-api -W --folder ./projects
```

Creates the project at `./projects/my-api` with the following folder structure:

```
my-api/
├── src/
│   ├── config/
│   ├── constants/
│   ├── controllers/
│   ├── helpers/
│   ├── interfaces/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── utils/
├── package.json
├── .env
└── ...
```

---

## Folder Structure

When using `--with-folders`, the following structure is scaffolded under `src/`:

- `config/` – Configuration files (e.g., DB, environment)
- `constants/` – App-wide constants
- `controllers/` – Request handlers and business logic
- `helpers/` – Utility helper functions
- `interfaces/` – TypeScript interfaces and types
- `middlewares/` – Express middleware functions
- `models/` – Data models and schemas
- `routes/` – Express route definitions
- `services/` – Reusable service logic
- `utils/` – General utility functions

---

## Development

If you'd like to contribute or run it locally:

```bash
git clone https://github.com/Oussema39/cea-cli.git
cd cea-cli
npm install
npm run build
npm link # Allows using 'cea-lite' locally
```

Now you can run:

```bash
cea-lite init test-app
```

---

## License

MIT

---

## Resources

- [GitHub Repository](https://github.com/Oussema39/cea-cli)
- [Report Issues](https://github.com/Oussema39/cea-cli/issues)
- [npm Package](https://www.npmjs.com/package/cea)

---

Made with ❤️ by [@Oussema39](https://github.com/Oussema39)
