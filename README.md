# Welcome to Voyant - Your AI-Powered Health Companion

**Project**: Voyant Waitlist
**Description**: A modern waitlist application for Voyant, the AI-powered mobile health chat app

## Getting Started

### Development
```bash
npm install
npm run dev
```

### Building for Production
```bash
npm run build
npm run preview
```

## Features

- **Email Collection**: Collect waitlist emails with immediate confirmation
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- **Backend Integration**: Supabase database with Edge Functions
- **Email Service**: Resend integration for automated emails
- **Responsive Design**: Mobile-first approach with beautiful animations

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Backend**: Supabase (PostgreSQL + Edge Functions)
- **Email**: Resend API
- **Deployment**: Vercel
- **Domain**: Custom domain support

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── main.tsx       # App entry point
```

## Deployment

The app is automatically deployed to Vercel when you push to the main branch.

## Custom Domain

This project supports custom domains and is currently configured for `voy4nt.com`.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is proprietary to Voyant.
