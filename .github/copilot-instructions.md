# GitHub Copilot Workspace Instructions

This repository contains a Next.js TypeScript starter application for the OpenAI Responses API.

## Project Overview
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict typing
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: Zustand for global state
- **API Integration**: OpenAI Responses API with streaming support

## Key Architecture Patterns
- Use functional React components with hooks
- Implement proper TypeScript interfaces for all data structures
- Follow Next.js App Router conventions for file organization
- Use established patterns for OpenAI API integration
- Apply consistent error handling and loading states

## Development Guidelines
- Build: `npm run build`
- Dev server: `npm run dev`
- Linting: `npm run lint` 
- Environment: Copy `.env.example` to `.env` and add `OPENAI_API_KEY`

## Code Style
- Use descriptive variable and function names
- Implement proper TypeScript typing throughout
- Follow accessibility best practices
- Use existing component patterns from shadcn/ui
- Maintain consistent code formatting with ESLint

The repository includes `.copilotrc.json` files in key directories providing context-specific guidance for different parts of the codebase.