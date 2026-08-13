# Lion Ride Gh Website

Professional Next.js website for Lion Ride Gh, an electric bicycle and tricycle company in Tema, Accra, Ghana.

## Features

- Home, Products, About Us, Contact, and Order pages
- Supabase-powered backend for enquiries and order submissions
- Cloudinary-ready image delivery
- Tailwind CSS styling with brand colours
- Ready for Vercel deployment

## Install

1. Copy `.env.example` to `.env.local`.
2. Set your Supabase and Cloudinary environment variables.
3. Install packages:

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Supabase Recommendations

Create two tables in Supabase:

- `enquiries` with fields: `id`, `name`, `email`, `phone`, `message`, `created_at`
- `orders` with fields: `id`, `name`, `email`, `phone`, `subject`, `message`, `created_at`

Set row-level security policies to allow inserts from server-side requests using the service role key.

## Cloudinary

Images are generated using the Cloudinary SDK. Add your Cloudinary credentials to `.env.local`.

## Deployment

Deploy to Vercel by connecting the repository and setting the same environment variables in Vercel.
