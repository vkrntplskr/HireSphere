# HireSphere

HireSphere is an AI-powered platform designed to help users prepare for job interviews. It simulates realistic voice-based interviews using AI agents, generates dynamic questions based on specific roles and tech stacks, and provides detailed, actionable feedback to improve candidate performance.

## 🚀 Features

-   **AI Voice Interviewer:** Real-time voice interaction with an AI agent powered by Vapi.
-   **Dynamic Interview Generation:** Custom interviews generated based on:
    -   Job Role
    -   Experience Level
    -   Tech Stack
    -   Focus Area (Behavioral, Technical, or Mixed)
-   **Instant Feedback:** Automated analysis of the interview transcript using Google Gemini to score:
    -   Communication Skills
    -   Technical Knowledge
    -   Problem Solving
    -   Cultural Fit
    -   Confidence & Clarity
-   **User Dashboard:** Track past interviews, view scores, and revisit feedback.
-   **Secure Authentication:** User management via Firebase Authentication (Email/Password & Google OAuth).
## 📂 Project Structure

```text
├── app/                # Next.js App Router pages and layouts
│   ├── (auth)/         # Authentication routes (sign-in, sign-up)
│   ├── (root)/         # Main application routes (dashboard, interview)
│   ├── api/            # API routes (Vapi generation, etc.)
│   └── globals.css     # Global styles (Tailwind configuration)
├── components/         # Reusable React components
│   ├── ui/             # UI primitives (buttons, inputs, etc.)
│   └── ...             # Feature components (Agent, InterviewCard, etc.)
├── constants/          # Static data and mapping configurations
├── firebase/           # Firebase client and admin configurations
├── lib/                # Utility functions and server actions
│   ├── actions/        # Server Actions for DB and Auth
│   └── vapi.sdk.ts     # Vapi SDK initialization
├── public/             # Static assets (images, icons)
└── types/              # TypeScript type definitions
```

## 🛠️ Tech Stack

-   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) & [CLSX](https://github.com/lukeed/clsx)
-   **Database & Auth:** [Firebase](https://firebase.google.com/) (Firestore & Auth)
-   **AI & Voice:**
    -   [Vapi](https://vapi.ai/) (Voice AI Infrastructure)
    -   [Google Gemini](https://deepmind.google/technologies/gemini/) (via Vercel AI SDK)
-   **Forms:** React Hook Form & Zod
-   **UI Components:** Radix UI primitives & Lucide React icons

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:

-   Node.js (v18.17 or later)
-   npm or yarn

You will also need accounts for:
-   **Firebase** (Project with Auth and Firestore enabled)
-   **Vapi.ai** (For voice agent capabilities)
-   **Google AI Studio** (For Gemini API key)

## 📦 Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/hiresphere.git](https://github.com/your-username/hiresphere.git)
    cd hiresphere
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root directory and add the following variables:

    ```env
    # Firebase Client SDK
    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

    # Firebase Admin SDK (Service Account)
    FIREBASE_PROJECT_ID=your_project_id
    FIREBASE_CLIENT_EMAIL=your_service_account_email
    FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."

    # Vapi.ai Configuration
    NEXT_PUBLIC_VAPI_WEB_TOKEN=your_public_key
    NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_assistant_or_workflow_id

    # Google Gemini AI
    GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

📄 License
This project is for educational and portfolio purposes.


