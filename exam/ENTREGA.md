Here’s the standard **fork-and-pull-request workflow** for contributing to a GitHub project when you **don’t have write access**:

---

## 1. Fork the repository

1. Go to the GitHub repo you want to contribute to.
2. Click **Fork** (top-right).
3. Choose your GitHub account.

This creates **your own copy** of the repo under your account.

---

## 2. Clone your fork locally

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

---

## 3. Add the original repo as an upstream remote

This lets you pull in updates from the original project.

```bash
git remote add upstream https://github.com/<original-owner>/<repo-name>.git
```

Verify:

```bash
git remote -v
```

You should see `origin` (your fork) and `upstream` (original repo).

---

## 4. Create a new branch for your changes

Never work directly on `main` (or `master`).

```bash
git checkout -b my-feature-branch
```

Use a descriptive name:

- `fix-typo-readme`
- `add-login-validation`
- `docs-installation-update`

---

## 5. Make your changes

Edit files as needed, then check what changed:

```bash
git status
git diff
```

---

## 6. Commit your changes

```bash
git add .
git commit -m "Brief, clear description of the change"
```

Good commit messages are concise and explain _why_ the change exists.

---

## 7. Push your branch to your fork

```bash
git push origin my-feature-branch
```

---

## 8. Create the Pull Request (PR)

1. Go to **your fork** on GitHub.
2. GitHub will usually show a **“Compare & pull request”** button — click it
   _or_ click **Pull requests → New pull request**.
3. Ensure:

   - **Base repository**: original owner / original repo
   - **Base branch**: usually `main`
   - **Head repository**: your fork
   - **Compare branch**: `my-feature-branch`

4. Fill in:

   - Title (clear and descriptive)
   - Description (what changed, why, how to test)

5. Click **Create pull request**.

---

## 9. Respond to feedback (if requested)

If maintainers ask for changes:

1. Make edits locally on the **same branch**
2. Commit and push again:

   ```bash
   git commit -am "Address review feedback"
   git push origin my-feature-branch
   ```

The PR updates automatically.

---

## 10. Keep your fork up to date (recommended)

Before new work or if the PR lingers:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

---

### Optional but good practice

- Read `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md`
- Follow formatting/linting rules
- Keep PRs small and focused
- Reference issues: `Fixes #123`
