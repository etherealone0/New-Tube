# New-Tube

A modern YouTube clone built with Next.js, featuring video upload, streaming, and management capabilities.

## 🚀 Features

- **Video Management**: Upload, edit, and manage videos through a studio interface
- **User Authentication**: Secure authentication powered by Clerk
- **Video Streaming**: Video processing and streaming with Mux
- **Responsive Design**: Modern UI built with Tailwind CSS and shadcn/ui components
- **Database**: PostgreSQL with Drizzle ORM
- **File Uploads**: Thumbnail and video uploads with UploadThing
- **Real-time Updates**: tRPC for type-safe API calls
- **Categories**: Organize videos by categories
- **Studio Dashboard**: Content creator dashboard for managing videos

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Clerk
- **Video Processing**: Mux
- **File Uploads**: UploadThing
- **API**: tRPC with React Query
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ or Bun
- PostgreSQL database
- Clerk account for authentication
- Mux account for video processing
- UploadThing account for file uploads

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd new-tube
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="your-postgresql-url"

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
   CLERK_SECRET_KEY="your-clerk-secret-key"
   CLERK_SIGNING_SECRET="your-clerk-signing-secret"

   # Mux Video Processing
   MUX_TOKEN_ID="your-mux-token-id"
   MUX_TOKEN_SECRET="your-mux-token-secret"
   MUX_WEBHOOK_SECRET="your-mux-webhook-secret"

   # UploadThing
   UPLOADTHING_SECRET="your-uploadthing-secret"
   UPLOADTHING_APP_ID="your-uploadthing-app-id"

   # Redis (for rate limiting)
   UPSTASH_REDIS_REST_URL="your-redis-url"
   UPSTASH_REDIS_REST_TOKEN="your-redis-token"
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   # or
   bun run db:push
   ```

5. **Seed categories (optional)**
   ```bash
   npm run seed:categories
   # or
   bun run seed:categories
   ```

6. **Run the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── (auth)/            # Authentication pages
│   ├── (home)/            # Public home pages
│   ├── (studio)/          # Studio/creator dashboard
│   └── api/               # API routes and webhooks
├── components/            # Reusable UI components
├── db/                    # Database schema and connection
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── modules/               # Feature modules
│   ├── categories/        # Category management
│   ├── home/              # Home page features
│   ├── studio/            # Studio dashboard
│   └── videos/            # Video management
└── trpc/                  # tRPC configuration
```

## 🎯 Key Features

### Video Studio
- Upload videos with drag-and-drop interface
- Edit video details (title, description, thumbnail)
- Manage video visibility (public/private)
- Real-time video processing status
- Custom thumbnail uploads

### Video Management
- Categorize videos
- Video duration tracking
- Automated thumbnail generation
- Preview generation for hover effects

### User Experience
- Responsive design for all devices
- Dark/light mode support
- Infinite scroll for video lists
- Real-time notifications with Sonner

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema
- `npm run db:studio` - Open Drizzle Studio

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Make sure to set up all the required environment variables in your deployment platform.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📞 Support

If you have any questions or need help, please open an issue or contact the maintainers.