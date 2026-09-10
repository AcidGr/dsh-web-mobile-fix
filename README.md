# dsh-web-mobile-fix
[![awesome · DSH plugin](https://awesome-dsh-plugin.com/badge.svg)](https://awesome-dsh-plugin.com)

**English** | [简体中文](README.zh.md)

Mobile layout fixes for the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) Web UI.

A pure client-side CSS overlay that repairs the worst mobile breakages on narrow (≤700px viewport) screens, without touching any product source:

- Settings panel becomes a full-screen column layout instead of a squeezed desktop layout
- Sidebar opens floating instead of squeezing the conversation
- Settings nav tabs fit on a single horizontal row
- Composer action bar fits on a single row without wrapping or layering

## How it works

The plugin ships a browser half (`exports["./client"]`, declared via `dsh.client.platform: "web"`), discovered by the client-modules scanner and loaded from the boot manifest. It injects one `<style>` tag with `@media (max-width: 700px)` overrides targeting the product's stable `data-slot` attributes, and removes the tag on unload — fully reversible.

## Requirements

- DeepSeek Harness Web profile (`dsh --profile web`), any recent 0.1.x release
- Selectors target product slot contracts; they are stable within a version line but may need small updates after a major product revamp

## Install

### Method 1: Ask your DSH Agent (Easiest 🤖)

Just send this repository link directly to your DSH web chat and say:
> "Install this plugin for me: https://github.com/AcidGr/dsh-web-mobile-fix"

Your DSH coding agent will automatically execute the installation command and set everything up for you.

### Method 2: CLI Install (Recommended)

Install from npm:

```sh
dsh plugin --profile web add dsh-web-mobile-fix
```

(Or install directly from GitHub:

```sh
dsh plugin --profile web add github:AcidGr/dsh-web-mobile-fix
```
)

After installation, simply refresh your browser.

### Method 3: Manual install (no pnpm / offline)

```sh
PROFILE="$DSH_HOME/profiles/web"                 # adjust DSH_HOME and profile name
mkdir -p "$PROFILE/plugins" "$PROFILE/node_modules/@dsh-profile"
cp -r dsh-web-mobile-fix "$PROFILE/plugins/mobile-fix"
ln -sfn ../../plugins/mobile-fix "$PROFILE/node_modules/@dsh-profile/mobile-fix"
# append to $PROFILE/cordis.patch.yml:
#   - insert:
#       - id: mobile-fix
#         name: '@dsh-profile/mobile-fix'
```

## Verify

Open the Web UI on a phone or resize your browser to mobile width (≤700px):
- Click the whale logo to open the sidebar: it will smoothly open as an overlay drawer without squeezing your conversation content, and taps outside will collapse it;
- The composer bar tools and the send button stay on a single row without wrapping or layering;
- The settings modal displays as a full-screen vertical layout with scrollable tabs.

## Rollback

- Bundle install: `dsh plugin --profile web remove dsh-web-mobile-fix`
- Manual install: delete the `mobile-fix` insert block from `cordis.patch.yml` (the plugin dir can stay or go)

No product source is modified; upgrades do not overwrite it.

## License

MIT
