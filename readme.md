# cea-lite ⚡️

**Create Express App** — a lightweight CLI tool to scaffold a clean, organized Express.js project structure with ease.

> Similar to `create-react-app`, but for Express.js.

---

## 📦 Installation

Install globally via npm:

```bash
npm install -g cea-lite
```

Or use directly with `npx` without installing:

```bash
npx cea-lite init my-app
```

---

## Usage

### Initialize a new Express project

```bash
cea-lite init <project-name> [options]
```

#### Arguments

- `<project-name>` – The name of your Express app (required).

#### Options

- `-D, --target-dir <path>` – Directory path where the project will be created. Default: current directory (`.`).
- `-W, --with-folders` – Scaffold a basic folder structure inside `src/`.
- `-T, --template <name>` – Choose a project template to use (default: `starter`).

---

## Templates Support

The CLI now supports multiple project templates hosted remotely.

### List available templates

To see which templates are available, run:

```bash
cea list
```

This command fetches and displays all remote templates you can choose from.

### Use a specific template

To initialize your project with a specific template, use the `--template` option:

```bash
cea init my-app -T starter
```

If no template is specified, the default `starter` template will be used.

---

## Example

```bash
cea init my-api -W -D ./projects -T starter
```

This will create the project at `./projects/my-api` with the following folder structure:

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

## 🛠 Folder Structure (when using `--with-folders`)

- `config/` – Configuration files (e.g., database, environment)
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

To contribute or run locally:

```bash
git clone https://github.com/Oussema39/cea-cli.git
cd cea-cli
npm install
npm run build
npm link  # Link the CLI globally on your machine
```

You can now run:

```bash
cea-lite init test-app
```

---

## License

ISC

---

## Resources

- [GitHub Repository](https://github.com/Oussema39/cea-cli)
- [Report Issues](https://github.com/Oussema39/cea-cli/issues)
- [npm Package](https://www.npmjs.com/package/cea)

---

Made with 💛

---
