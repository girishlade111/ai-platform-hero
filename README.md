# AI Platform Hero

> A powerful AI-powered platform built with Next.js 15, React 19, and TypeScript with real-time analytics.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

---

## 📋 Table of Contents

- [System Architecture](#system-architecture)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Project Stats](#project-stats)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## 🏗️ System Architecture

```mermaid
flowchart TB
    subgraph Client["Frontend Layer (Next.js 15)"]
        UI[React 19 Components]
        Hooks[React Hook Forms]
        State[State Management]
        Pages[Pages & Routes]
    end

    subgraph UI_Lib["UI Component Libraries"]
        Radix[Radix UI Primitives]
        Shadcn[Shadcn UI Components]
        Lucide[Lucide Icons]
        Recharts[Recharts Visualization]
        Carousel[Embla Carousel]
    end

    subgraph Backend["API Layer (Next.js API Routes)"]
        Routes[API Routes]
        Middleware[Middleware]
        Handlers[Request Handlers]
    end

    subgraph Integrations["External Integrations"]
        Analytics[Analytics]
        Theme[next-themes]
    end

    subgraph Styling["Styling Layer"]
        Tailwind[Tailwind CSS]
        CVA[class-variance-authority]
        Utils[Utility Functions]
    end

    subgraph Validation["Validation Layer"]
        Zod[Zod Schema]
        Resolvers[Form Resolvers]
    end

    UI --> Radix
    UI --> Shadcn
    UI --> Lucide
    UI --> Recharts
    UI --> Hooks
    UI --> State
    
    Routes --> UI
    Middleware --> Routes
    Hooks --> Zod
    Zod --> Resolvers
    
    Analytics --> Client
    Theme --> Client
    
    Tailwind --> UI_Lib
    CVA --> UI_Lib
    Utils --> UI_Lib
```

### Architecture Highlights

- **🖥️ Frontend Layer**: React 19 components with Hooks and state management
- **📚 Component Libraries**: Radix UI, Shadcn UI, Lucide Icons, Recharts
- **🔙 API Layer**: Next.js API routes with middleware support
- **🎨 Styling**: Tailwind CSS with class-variance-authority for variants
- **✅ Validation**: Zod schema validation with form resolvers
- **📊 Integrations**: Analytics and next-themes for theming

---

## ✨ Features

### 🔑 Core Features

- **🚀 Modern Tech Stack** — Built with Next.js 15, React 19, and TypeScript
- **📱 Responsive Design** — Fully responsive UI with Tailwind CSS
- **🌙 Dark/Light Mode** — Theme switching with next-themes
- **📊 Data Visualization** — Interactive charts with Recharts
- **♿ Accessibility** — Full accessibility support via Radix UI
- **📈 Analytics** — Real-time analytics
- **🔒 Type Safety** — Full TypeScript support with strict mode
- **⚡ Fast Performance** — Optimized with Next.js automatic optimization

### 🎨 UI Components

| Component | Description |
|-----------|-------------|
| **Accordion** | Collapsible content panels with smooth animations |
| **Alert Dialog** | Confirmation dialogs for destructive actions |
| **Avatar** | User profile images with fallback support |
| **Aspect Ratio** | Maintain aspect ratios for media |
| **Checkbox** | Boolean input controls with indeterminate state |
| **Collapsible** | Expandable/collapsible content sections |
| **Context Menu** | Right-click context menus |
| **Dialog** | Modal windows with backdrop and animations |
| **Dropdown Menu** | Dropdown menus with nested items |
| **Hover Card** | Preview cards on hover interactions |
| **Label** | Accessible form labels |
| **Menubar** | Horizontal menu bar navigation |
| **Navigation Menu** | Navigation bars with dropdowns |
| **Popover** | Floating content with positioning |
| **Progress** | Progress indicators with animations |
| **Radio Group** | Single selection from options |
| **Scroll Area** | Custom styled scrollbars |
| **Select** | Dropdown selection with search |
| **Separator** | Visual dividers |
| **Slider** | Range input with custom styling |
| **Switch** | Toggle switches with labels |
| **Tabs** | Tabbed navigation interface |
| **Toast** | Notification toasts with actions |
| **Toggle** | Binary state buttons |
| **Toggle Group** | Grouped toggle buttons |
| **Tooltip** | Hover tooltips with positioning |

### 📝 Form Handling

- **React Hook Form** — Performant form management with minimal re-renders
- **Zod Validation** — Schema-based validation with type inference
- **Form Resolvers** — Type-safe form validation
- **Input Validation** — Real-time input validation
- **Error Handling** — Form-level and field-level error display

### 📊 Data Visualization

- **Line Charts** — Time-series data visualization
- **Bar Charts** — Categorical data comparison
- **Pie Charts** — Distribution visualization
- **Area Charts** — Cumulative data visualization
- **Custom Charts** — Recharts for custom visualizations

### 🛠️ Additional Features

- **Geist Font** — Modern sans-serif font
- **Date Handling** — date-fns for date manipulation
- **Command Palette** — CMDK for command interfaces
- **OTP Input** — Input OTP for verification codes
- **Drawer** — Vaul drawer component
- **Sonner Toasts** — Modern toast notifications

---

## 💻 Tech Stack

### 🔧 Core Technologies

| Technology | Version | Purpose | Status |
|------------|---------|---------|--------|
| **Next.js** | 15.2.4 | React Framework | ✅ Stable |
| **React** | 19.x | UI Library | ✅ Stable |
| **TypeScript** | 5.x | Type Safety | ✅ Stable |
| **Node.js** | 22.x | Runtime | ✅ Stable |

### 🎨 UI & Styling

| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | 3.4.x | Utility-first CSS |
| **Radix UI** | 1.2.x | UI Primitives |
| **Shadcn UI** | Latest | Component Library |
| **Lucide React** | 0.454.x | Icon Library |
| **Recharts** | 2.15.x | Charts |
| **Embla Carousel** | 8.5.x | Carousel |

### 📝 Form & Validation

| Technology | Version | Purpose |
|------------|---------|---------|
| **React Hook Form** | 7.54.x | Form Management |
| **Zod** | 3.24.x | Schema Validation |
| **@hookform/resolvers** | 3.9.x | Form Resolvers |
| **CMDK** | 1.0.x | Command Palette |

### 🛠️ Utilities

| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind Merge** | 2.5.x | Class Merging |
| **Class Variance Authority** | 0.7.x | Class Variants |
| **Date-fns** | 4.1.x | Date Utilities |
| **Sonner** | 1.7.x | Toasts |
| **Vaul** | 0.9.x | Drawer |
| **Input OTP** | 1.4.x | OTP Input |
| **React Day Picker** | 9.8.x | Date Picker |
| **React Resizable Panels** | 2.1.x | Resizable Panels |

### 📊 Analytics & Themes

| Technology | Version | Purpose |
|------------|---------|---------|
| **Analytics** | 1.3.x | Analytics |
| **next-themes** | 0.4.x | Theme Management |

### 📦 Build Tools

| Technology | Version | Purpose |
|------------|---------|---------|
| **PostCSS** | 8.5.x | CSS Processing |
| **Autoprefixer** | 10.4.x | CSS Vendor Prefixes |
| **Tailwind Animate** | 1.0.x | Animation Utilities |

---

## 🚀 Getting Started

### ✅ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or later
  ```bash
  node --version
  ```

- **npm** 9.x or later (or **yarn** / **pnpm**)
  ```bash
  npm --version
  ```

- **Git** for version control
  ```bash
  git --version
  ```

### 📥 Installation

```bash
# Clone the repository
git clone https://github.com/your-repo/ai-platform-hero.git

# Navigate to the project directory
cd ai-platform-hero

# Install dependencies (with legacy peer deps for React 19)
npm install --legacy-peer-deps

# Start development server
npm run dev
```

### 🌐 Access the Application

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Configuration

### Next.js Configuration

Located in `next.config.mjs`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // Ignore ESLint during builds
  },
  typescript: {
    ignoreBuildErrors: true,   // Ignore TypeScript errors during builds
  },
  images: {
    unoptimized: true,        // Enable unoptimized images
  },
}

export default nextConfig
```

### TypeScript Configuration

Located in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "target": "ES6",
    "skipLibCheck": true,
    "strict": true,              // ✅ Strict mode enabled
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",          // Preserve JSX for Next.js
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]            // Path alias
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Tailwind Configuration

Located in `tailwind.config.js`:

- **Content paths**: All relevant source files
- **Theme extension**: Custom colors and animations
- **Plugins**: tailwindcss-animate

---

## 📊 Project Stats

### 📦 Package Statistics

| Metric | Value |
|--------|-------|
| **Total Dependencies** | 240+ packages |
| **Production Dependencies** | 50+ |
| **Development Dependencies** | 7 |

### 💻 Code Quality

| Feature | Status |
|---------|--------|
| **TypeScript** | ✅ Strict mode enabled |
| **ESLint** | ✅ Configured with Next.js rules |
| **Prettier** | ✅ Compatible |
| **Bundle Optimization** | ✅ Enabled |

### 🏗️ Build Information

| Feature | Value |
|---------|-------|
| **Framework** | Next.js 15 (App Router) |
| **Build Target** | Server/Client components |
| **Output** | Standalone mode |
| **Images** | Unoptimized |

---

## 🚀 Deployment

### Deployment

The project can be deployed to any hosting platform:

**To deploy**: Run `npm run build` and deploy the output to your hosting provider

### Manual Deployment

```bash
# Build the project
npm run build

# Start the production server
npm start
```

### Docker Deployment (Optional)

```dockerfile
# Use Node.js 18 Alpine
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy project files
COPY . .

# Build the project
RUN npm run build

# Expose port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
```

### Docker Commands

```bash
# Build the image
docker build -t ai-platform-hero .

# Run the container
docker run -p 3000:3000 ai-platform-hero
```

---

## 📁 Project Structure

```
ai-platform-hero/
├── .next/                  # Next.js build output
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/            # React components
│   ├── ui/               # UI components
│   └── ...              # Other components
├── lib/                   # Utility functions
├── public/               # Static assets
├── package.json          # Dependencies
├── next.config.mjs       # Next.js config
├── tsconfig.json         # TypeScript config
├── tailwind.config.js   # Tailwind config
├── postcss.config.js     # PostCSS config
└── README.md            # This file
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint on the project |

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# ==========================================
# Analytics Configuration
# ==========================================

# Analytics (optional)
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id

# ==========================================
# API Configuration
# ==========================================

# Add your API keys here as needed
# API_KEY=your_api_key

# ==========================================
# Database Configuration
# ==========================================

# DATABASE_URL=postgresql://user:password@localhost:5432/db

# ==========================================
# Authentication
# ===========================================

# NEXTAUTH_SECRET=your_secret
# NEXTAUTH_URL=http://localhost:3000
```

---

## 🔧 Troubleshooting

### Common Issues

#### 1. Peer Dependency Conflicts

```bash
# Solution: Use --legacy-peer-deps
npm install --legacy-peer-deps
```

#### 2. TypeScript Errors

```bash
# The project is configured to ignore TypeScript errors during build
# For strict checking, remove ignoreBuildErrors from next.config.mjs
```

#### 3. ESLint Errors

```bash
# The project is configured to ignore ESLint during builds
# For strict linting, remove ignoreDuringBuilds from next.config.mjs
```

#### 4. Port Already in Use

```bash
# Find and kill the process using port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- -p 3001
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

Please read the [contributing guidelines](CONTRIBUTING.md) first.

---

## 📄 License

MIT License - See [LICENSE](LICENSE) for details.

---

## 🆘 Support

For issues and feature requests, please [open an issue](https://github.com/your-repo/ai-platform-hero/issues).

---

*Built with ❤️ using Next.js and React*