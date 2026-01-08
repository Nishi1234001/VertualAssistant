AI-Powered Voice & Text Virtual Assistant
A simple, voice-first web assistant that accepts spoken or typed queries, returns natural language answers (text + speech), and lets users save notes and manage profiles. Built to be easy to run and review.

Problem statement

Many students and professionals need quick, hands-free access to short answers and lightweight task automation (save a note, fetch a saved item) while multitasking. This assistant accepts voice or text, uses an LLM to generate context-aware responses, and provides text + speech output so users can interact without typing.

Tech stack & AI

Frontend: React (Web Speech API for STT, browser TTS for speech output)

Backend: Node.js + Express (API, auth, file uploads)

LLM: Google Gemini (used for natural language generation; adapter layer in backend)

Auth & storage: JWT for auth; user data in MongoDB / SQLite (configurable)

Media uploads: Multer + Cloudinary

Deployment: Render (or any hosting provider)

Note: The LLM adapter makes it easy to swap to Azure AI Foundry or AWS Bedrock.

Architecture (short)

Browser (React + Web Speech API) → Backend (Express: auth, /api/query, notes, upload) → LLM Provider (Google Gemini)
Optional: Vector DB (Pinecone/FAISS/Azure Cognitive Search) for Retrieval-Augmented Generation (RAG).

How to run (basic)

1. Clone the repository.
2. Install dependencies for frontend and backend using npm install.
3. Add required environment variables (LLM API key, JWT secret, database URI).
4. Start the backend server.
5. Start the frontend application and open it in the browser.
