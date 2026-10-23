# Mosaik starter · Vue

A standalone **Vue + TypeScript + Vite** application using the published Mosaik design system. Use GitHub's **Use this template** button to create your own repository, then install and run it independently.

## Requirements

- Node.js 24.15 or later in the 24 LTS line; `.node-version` selects Node 24. Node 26 is also supported.
- npm (the lockfile is committed).
- A GitHub personal access token (classic) with **read:packages**, because Mosaik packages are hosted on GitHub Packages. Public GitHub npm packages still require registry authentication.

## Install and run

Set `MOSAIK_PACKAGES_TOKEN` in your shell using your own package-read token. Do not commit its value. The checked-in `.npmrc` maps the package scope to GitHub Packages. `.npmrc.auth` contains only an environment-variable reference for authentication; select it as the npm user configuration below.

```sh
export MOSAIK_PACKAGES_TOKEN='<your read:packages token>'
export NPM_CONFIG_USERCONFIG="$PWD/.npmrc.auth"
npm ci
npm run dev
```

Use the local URL printed by the development server. The sample demonstrates Mosaik components, Joy theme initialization, Lucide icons and a counter controlled by this application's own code.

A `.env` file alone is not sufficient for `npm ci`: npm reads the registry credential before Vite or Angular loads application environment files. Export the variable in the shell or supply it through your development environment's secret manager. The token is not used by browser code.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Check source and configuration |
| `npm run typecheck` | Check TypeScript and framework templates |
| `npm test` | Run the counter behavior test |
| `npm run build` | Create a production build |
| `npm run preview` | Serve the production build locally |

Run `npm run build` before `npm run preview`.

## Make it your own

- Start with `src/App.vue` for the example UI and local state.
- `src/mosaik.ts` initializes the public Mosaik runtime, Joy theme and Lucide icon names.
- `src/styles.css` contains the responsive sample layout using Mosaik theme tokens.
- The HTML entry loads Nunito from Google Fonts; applications with an offline or self-hosted font policy can replace that link.

The example adapts the Mosaik Studio catalog recipe `recipe-empty-state-card--with-action`, validated through Mosaik Beta. Its counter is local UI state; no backend or Studio connection is required.

## Independent maintenance

This repository has its own framework/toolchain versions, Mosaik package pins, lockfile and CI. It does not depend on an Nx workspace, a Mosaik checkout, the Studio API or a shared Mosaik release workflow.

Framework and toolchain upgrades remain independent of Mosaik dependency updates: update this starter, regenerate its lockfile with npm and run all verification commands. The application package is private to prevent accidental npm publication.

Direct and transitive Mosaik packages use one exact release in the manifest and lockfile. The earlier core override is no longer needed following the published casing fix tracked in [the packaging issue](https://github.com/RueDeRennes/mosaik/issues/770).

## Mosaik updates

`.github/dependabot.yml` checks for updates every day at 04:37 UTC, including weekends, and groups `@pixel-brewery/mosaik-*` updates into one pull request. Updates retain exact package versions and include the committed `package-lock.json`. This replaces manual edits to each Mosaik dependency while keeping framework/toolchain updates separate.

Each update pull request still requires review, approval and merge. No automatic merge is configured. CI checks require consistent Mosaik versions alongside the existing lint, type/template checks, counter behavior test and production build.

For automatic GitHub Packages authentication, grant this repository **Read** access under every required Mosaik package's **Package settings → Manage Actions access**. Repeat this for each starter or repository created from a template. No long-lived Dependabot token is needed. See [GitHub's automatic registry access documentation](https://docs.github.com/en/code-security/concepts/supply-chain-security/automatic-dependabot-access-to-github-registries).

Keep `.github/dependabot.yml` on the repository's default branch and enable Dependabot version updates. The package access grants above are required for updates to run.

Authentication is kept in `.npmrc.auth` so Dependabot sees only the registry mapping in `.npmrc` and can use its automatic GitHub Packages credentials. Local npm commands and CI select `.npmrc.auth` with `NPM_CONFIG_USERCONFIG`; keep its token value in the environment.

Mosaik packages bypass the default Dependabot cooldown, so a newly published release is eligible at the next daily check.

## Continuous integration

The repository's CI runs a clean `npm ci`, lint, typecheck, behavior tests and production build. The update checks also verify consistent Mosaik package versions in the manifest and lockfile. CI uses its own GitHub Actions token with `contents: read` and `packages: read`; the package access grants described above apply to both CI and Dependabot. No reusable personal credential is stored in the workflow.

CI only verifies the application. It does not publish packages, create release tags or deploy a website.

## Current published-package limitations

Mosaik's supported root entry points retain a large core component/style graph even for this small example. Production entry bundles are currently approximately 14–16 MB before transfer compression. This starter preserves the supported APIs; it does not patch dependencies or suppress component registration. See [the package-boundary issue](https://github.com/RueDeRennes/mosaik/issues/964).

Published dependency source maps currently refer to sources absent from the installed packages, so tests can emit third-party source-map warnings. They do not prevent the verification commands from passing. See [the source-map issue](https://github.com/RueDeRennes/mosaik/issues/963).

## License

[MIT](LICENSE).
