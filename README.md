
# Touchpoint Core Main

## Structure

The project now uses a single Next.js codebase from the repository root:

- `app/` - App Router pages and API routes
- `components/` - website and admin UI components
- `hooks/` - shared React hooks
- `lib/` - client services, Supabase client, and server utilities
- `models/` - MongoDB models
- `public/` - static assets
- `scripts/` - utility scripts
- `types/` - shared TypeScript types

## Project info

**URL**: https://lovable.dev/projects/5db50a53-1fbf-45b4-bf1b-e01220174850

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/5db50a53-1fbf-45b4-bf1b-e01220174850) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project root.
cd touchpointcore-main

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Create your runtime env file.
cp .env.example .env

# Step 5: Start the unified Next.js application.
npm run dev
```

The Next.js server now reads env from the root `.env`. Configure:

- `MONGODB_URI`
- `MONGODB_DB_NAME`
- `JWT_SECRET`
- optional PageSpeed and mail keys
- MinIO connection values for image uploads
- optional `NEXT_PUBLIC_ADMIN_EMAIL`
- optional `NEXT_PUBLIC_ADMIN_PASSWORD`
- optional `NEXT_PUBLIC_API_BASE` if the frontend should call a different host

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Next.js
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- MongoDB
- MinIO

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/5db50a53-1fbf-45b4-bf1b-e01220174850) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
