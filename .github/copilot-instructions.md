## Repo snapshot

- This is a small React + Storybook template (Chromatic's intro template). Key folders: `src/`, `src/components/`, `src/stories/`, `.storybook/`, and `public/`.
- Build tooling: Vite (dev/build), Storybook (storybook dev/build), TypeScript. See `package.json` scripts: `dev`, `build`, `preview`, `storybook`, `build-storybook`, `init-msw`.

## What to know up-front

- Storybook runs separately from the app. Use `npm run storybook` (or `yarn storybook`) to start Storybook on port 6006. Stories live under `src/components/*/*.stories.*` and `src/stories/`.
- Vite runs the app with `npm run dev`. App entry is `src/main.tsx` which mounts `App` from `src/App.tsx`.
- Tests are wired to Vitest with a Storybook addon plugin configured in `vite.config.ts` (see `storybookTest` plugin). Tests may run in a browser environment (Playwright) under the `storybook` test project.

## Project-specific conventions (important for changes)

- TypeScript + ESM. Files use .ts/.tsx and "type": "module" in package.json. Prefer import/export syntax and the existing tsconfig files.
- Story files and docs: `*.stories.tsx` and `.mdx` pages are used for docs (`src/stories/Configure.mdx` is an example). When adding components, include a story next to the component:
  - component: `src/components/MyComponent/MyComponent.tsx`
  - styles: `src/components/MyComponent/mycomponent.css`
  - story: `src/components/MyComponent/MyComponent.stories.tsx`
- Static assets (fonts, images) belong under `public/` or `src/assets` referenced by stories; Storybook `staticDirs` may be needed for additional directories.

## Common tasks & commands (explicit)

- Start dev app: `npm run dev` (uses Vite)
- Build app: `npm run build`
- Preview build: `npm run preview`
- Run Storybook locally: `npm run storybook` (dev server on 6006)
- Build Storybook static site: `npm run build-storybook`
- Initialize MSW service worker for Storybook: `npm run init-msw` (writes to `public/`)

## Patterns and examples to follow

- Components should be small, presentational-first, and have stories that demonstrate primary props. See `src/components/Button/Button.stories.tsx` for a story layout example.
- Keep CSS colocated with the component (the template uses simple CSS files next to components). Storybook stories import the component's CSS where needed.
- If a component requires providers (theme, router, context), add decorators to the story file or to `.storybook/preview.*` rather than modifying Storybook's global app code.

## Integration points & gotchas

- Storybook and Vite both rely on ESM and the project's TypeScript configuration. Avoid CommonJS require() in new code.
- `vite.config.ts` registers the Storybook Vitest plugin; tests for stories run in a browser environment. If adding unit tests, ensure they are compatible with the plugin config or add a separate Vitest project.
- The template declares `packageManager: "yarn@4.9.2"` — contributors may use Yarn v4 (berry) or npm, but CI may expect yarn. Respect existing lockfiles if present.

## Files to open when debugging or extending

- `package.json` — scripts and deps
- `vite.config.ts` — dev/test configuration
- `.storybook/` — Storybook config (preview, manager, webpack/vite configs)
- `src/components/*` — component source, CSS, and stories
- `src/stories/Configure.mdx` — example docs page and usage of static assets

## Read-only reference project in workspace

- This workspace may contain a second project `learnstorybook-code` (a full example). Treat it as read-only: do not modify files in that folder.
- Use it to copy patterns, stories, and test examples. Useful files (if present): `learnstorybook-code/package.json`, `learnstorybook-code/README.md`, `learnstorybook-code/src/**`.

## Minimal examples to reference

- App entry: `src/main.tsx` mounts `src/App.tsx`.
- Story example: `src/components/Button/Button.stories.tsx` (use this shape when creating new stories).

## Safety & behavior rules for AI edits

- Do not change package manager settings (e.g., `.yarnrc.yml`) or upgrade major tool versions without explicit user instruction.
- Prefer safe, minimal edits: add new files, update component and story files, or fix clear type/syntax errors. Large refactors require a human reviewer.
- When adding tests, follow the existing Vitest configuration and add a small story-based test where appropriate.

If anything here is unclear or you'd like more detail (CI, release, or contributor workflow), tell me which area to expand and I'll update this file.
