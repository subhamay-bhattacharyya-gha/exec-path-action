# Scan AWS Services Action

![Release](https://github.com/subhamay-bhattacharyya-gha/exec-path-action/actions/workflows/release.yaml/badge.svg)&nbsp;![Commit Activity](https://img.shields.io/github/commit-activity/t/subhamay-bhattacharyya-gha/exec-path-action)&nbsp;![Last Commit](https://img.shields.io/github/last-commit/subhamay-bhattacharyya-gha/exec-path-action)&nbsp;![Release Date](https://img.shields.io/github/release-date/subhamay-bhattacharyya-gha/exec-path-action)&nbsp;![Repo Size](https://img.shields.io/github/repo-size/subhamay-bhattacharyya-gha/exec-path-action)&nbsp;![File Count](https://img.shields.io/github/directory-file-count/subhamay-bhattacharyya-gha/exec-path-action)&nbsp;![Issues](https://img.shields.io/github/issues/subhamay-bhattacharyya-gha/exec-path-action)&nbsp;![Top Language](https://img.shields.io/github/languages/top/subhamay-bhattacharyya-gha/exec-path-action)&nbsp;![Commit Activity Monthly](https://img.shields.io/github/commit-activity/m/subhamay-bhattacharyya-gha/exec-path-action)&nbsp;![Custom Endpoint](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/bsubhamay/a43519ed07b7fcb270a07a7d1bc9e29d/raw/exec-path-action.json?)

## 📦 Overview

**Determine Execution Path** is a GitHub Action that analyzes your repository to decide which top-level services or infrastructure-as-code (IaC) components should be executed, based on the files modified in a pull request or commit. It takes as input a list of modified files and a summary of services used, then outputs a structured object indicating which areas (IaC, Lambda, Glue, State Machine, Lambda Layer) require execution.

Use this action in CI workflows to automate conditional deployments, optimize build steps, or enforce compliance based on code changes.

---

## ✅ Features

- Detects changes in top-level directories: `cfn`, `tf`, `sls`, `sam`, `lambda`, `glue`, `state-machine`, `lambda-layer`
- Determines if infrastructure (IaC) or specific AWS services need to be executed
- Outputs a structured JSON object (`execution-path`) with boolean flags for each service/component
- Appends a markdown summary table to the GitHub Actions summary

---

## 📤 Outputs

| Name             | Description                                                      |
|------------------|------------------------------------------------------------------|
| `execution-path` | JSON object showing which top-level services/areas need execution |

### Example Output

```json
{
  "IaC": true,
  "lambda": false,
  "glue": true,
  "state-machine": false,
  "lambda-layer": true
}
```

---

## 🚀 Example Usage

```yaml
name: Determine Execution Path

on:
  push:
    branches: [main]

jobs:
  determine-execution-path:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Determine Execution Path
        id: execpath
        uses: subhamay-bhattacharyya-gha/exec-path-action@main
        with:
          files-modified: path/to/repo-changes.json
          services-used: path/to/services-used.json

      - name: Print Execution Path
        run: echo "Execution Path: ${{ steps.execpath.outputs.execution-path }}"
```

---

## 🛠 Local Development

To test or develop this action locally:

1. Clone the repo
2. Run `node main.js` from the project root
3. Ensure the expected folders (`lambda/src`, `glue/script`, etc.) exist for testing
4. Review the console output for service detection results

You can also test it inside a GitHub workflow by referencing the action locally:

```yaml
- name: Test Local Action
  uses: ./  # Use local path for testing
```

---

## 🤝 Contributing

We welcome contributions! You can help by:

- Reporting bugs
- Suggesting features
- Writing docs
- Submitting PRs

Check out the [CONTRIBUTING.md](./CONTRIBUTING.md) guide to get started. Please also read our [Code of Conduct](./CODE_OF_CONDUCT.md).

---

## 🕘 Version History

See [CHANGELOG.md](./CHANGELOG.md) for release notes.

Latest versions:

- `v1.0.1`: Added pre-commit hooks
- `v1.0.0`: Initial release

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
