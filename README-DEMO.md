# GitBook Automation Demo Starter

This starter is designed for a non-technical proof-of-concept.

## What it demonstrates

1. `feature.json` acts as a simple stand-in for a product/engineering change.
2. A GitHub Action runs automatically when `feature.json` changes.
3. The action generates:
   - a mock product page,
   - a Markdown documentation page,
   - a fresh screenshot using Playwright.
4. The generated docs live under `docs/`.
5. Connect the repository to a GitBook space using Git Sync.
6. GitBook renders the Markdown and screenshot as documentation.

## Demo change to make

Edit `feature.json` in GitHub and add a new item to the `events` list, for example:

`"Candidate looking away repeatedly"`

Commit the change.

The GitHub Action will regenerate the documentation and screenshot, then commit the generated files.

## GitBook Git Sync

In GitBook, open your space and select **Set up Git Sync** / **Configure → GitHub Sync**.
Choose this repository and its `main` branch.
For the initial sync choose **GitHub → GitBook**.

The `.gitbook.yaml` file tells GitBook that the documentation is inside the `/docs` folder.
