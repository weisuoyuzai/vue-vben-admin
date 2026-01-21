# Vue Vben Admin - Simplified Version

This is a simplified single-application version of vue-vben-admin with Ant Design Vue.

## Features

- ✨ Vue 3 + TypeScript + Vite
- 🎨 Ant Design Vue UI Framework
- 🔥 Tailwind CSS for styling
- 📦 All packages consolidated in src/ directory
- 🚀 Simple dev/build commands

## Quick Start

### Install dependencies

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

### Preview production build

```bash
pnpm preview
```

## Project Structure

```
├── public/             # Static assets
├── src/
│   ├── @core/          # Core UI and base packages
│   │   ├── base/       # Base design, icons, shared utilities
│   │   ├── composables # Vue composables
│   │   ├── preferences # User preferences
│   │   └── ui-kit/     # UI component kits (shadcn, layout, menu, form, tabs, popup)
│   ├── effects/        # Feature modules
│   │   ├── access/     # Access control & permissions
│   │   ├── common-ui/  # Common UI components
│   │   ├── hooks/      # Custom hooks
│   │   ├── layouts/    # Layout components
│   │   ├── plugins/    # Vue plugins
│   │   └── request/    # HTTP request utilities
│   ├── adapter/        # Component adapters
│   ├── api/            # API definitions
│   ├── constants/      # Constants
│   ├── icons/          # Icon management
│   ├── layouts/        # Application layouts
│   ├── locales/        # i18n translations
│   ├── preferences/    # App preferences
│   ├── router/         # Vue Router configuration
│   ├── store/          # Application stores
│   ├── stores/         # Pinia stores
│   ├── styles/         # Global styles
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── views/          # Page views
│   ├── app.vue         # Root component
│   ├── bootstrap.ts    # App bootstrap
│   ├── main.ts         # App entry point
│   └── preferences.ts  # Preferences config
├── index.html          # HTML entry
├── package.json        # Dependencies
├── vite.config.mts     # Vite configuration
├── tsconfig.json       # TypeScript configuration
├── postcss.config.mjs  # PostCSS configuration
└── tailwind.config.mjs # Tailwind configuration
```

## Configuration

### Path Alias

The project uses `#/` as an alias for the `src/` directory:

```ts
import { something } from '#/utils/src';
```

### Environment Variables

- `.env` - Base environment variables
- `.env.development` - Development environment variables
- `.env.production` - Production environment variables

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm typecheck` - Run TypeScript type checking

## License

MIT

## Original Project

This is a simplified version of [vue-vben-admin](https://github.com/vbenjs/vue-vben-admin).
