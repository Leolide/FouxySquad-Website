# Fouxy Squad Community Website

## Overview

This is a community website for "Fouxy Squad," a London-based design community. The application is built as a full-stack web application with a React frontend and Express.js backend, designed to showcase the community, display events, and provide ways for visitors to connect and join.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend, backend, and shared code:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom Fouxy brand colors
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing
- **Animations**: Framer Motion for smooth animations
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Development**: tsx for TypeScript execution
- **Build**: esbuild for production bundling

### Shared Code Architecture
- **Schema**: Centralized database schema and validation using Drizzle ORM and Zod
- **Type Safety**: Shared TypeScript types between frontend and backend

## Key Components

### Database Schema
- **Users**: Basic user management with username/password
- **Events**: Community events with details, dates, participants, and Luma integration
- **Community Stats**: Aggregate statistics (members, events, social followers)
- **Gallery Images**: Photo gallery linked to events

### Frontend Components
- **Navigation**: Sticky navigation with smooth scrolling
- **Hero Section**: Main landing area with community introduction
- **Community Section**: Statistics and member information
- **Events Timeline**: Visual timeline of past and upcoming events
- **Gallery**: Image showcase with event photos
- **Social Section**: Social media integration and community links
- **CTA Section**: Call-to-action for joining the community

### Backend Storage
- **Memory Storage**: In-memory storage implementation for development
- **Database Storage**: PostgreSQL storage via Drizzle ORM
- **API Routes**: RESTful endpoints for events, community stats, and gallery

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **API Processing**: Express.js routes handle requests and interact with storage layer
3. **Data Storage**: Storage interface abstracts database operations
4. **Response**: JSON responses sent back to frontend
5. **UI Updates**: React components re-render with new data

The application uses a repository pattern with an `IStorage` interface that can be implemented for different storage backends (currently memory and database implementations).

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React ecosystem (React DOM, hooks)
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Components**: Extensive Radix UI component library
- **Animations**: Framer Motion for UI animations
- **HTTP Client**: Built-in fetch with TanStack Query wrapper
- **Routing**: Wouter for lightweight routing

### Backend Dependencies
- **Server**: Express.js with middleware for JSON parsing and CORS
- **Database**: Drizzle ORM with PostgreSQL driver
- **Validation**: Zod for schema validation
- **Development**: tsx for TypeScript execution, nodemon-like functionality

### Database
- **Provider**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle with migrations support
- **Connection**: Environment-based DATABASE_URL configuration

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with HMR and React Fast Refresh
- **Backend**: tsx with file watching for automatic restarts
- **Database**: Drizzle migrations with push command for schema sync

### Production Build
- **Frontend**: Vite build outputs to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Static Assets**: Express serves built frontend files in production
- **Environment**: NODE_ENV-based configuration switching

### Architecture Decisions

**Database Choice**: PostgreSQL was chosen for its reliability and JSON support, with Neon providing serverless scaling. Drizzle ORM provides type-safe database operations while maintaining flexibility.

**Frontend Framework**: React with TypeScript provides a robust, type-safe development experience. Vite offers fast development builds and excellent TypeScript support.

**Styling Approach**: Tailwind CSS with custom CSS variables allows for consistent theming while maintaining the flexibility to customize the Fouxy brand colors throughout the application.

**Component Library**: shadcn/ui built on Radix UI primitives provides accessible, customizable components that match the design requirements while maintaining good UX practices.

**State Management**: TanStack Query handles server state management, reducing complexity compared to traditional Redux patterns while providing excellent caching and synchronization features.

The application is designed to be easily extensible, with clear separation of concerns and a modular architecture that supports both development and production deployments.