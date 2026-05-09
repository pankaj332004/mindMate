<div align="center">

# 🧠💚 MindMate

**Your Personal, Judgment-Free Mental Wellness Companion**

Building a safe space for Indian youth to navigate academic pressure, family expectations, and everyday anxiety.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-mindmate--alpha.vercel.app-34d399?style=for-the-badge)](https://mindmate-alpha.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Groq](https://img.shields.io/badge/AI-Llama_3.3_via_Groq-f55036?style=flat-square)](https://groq.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

</div>

---

## 📌 Problem Statement

> **200 million+** Indian youth are affected by mental health issues, yet **83%** don't seek help due to stigma. — *WHO & NIMHANS Reports*

Being a student or young adult in India is incredibly stressful. Between JEE/NEET exams, board results, career anxiety, family expectations, and relationship issues, it can feel like you have no one to talk to without being judged.

**MindMate** is an AI companion built specifically to listen. It is not here to preach or diagnose you — it is here to be a warm, empathetic friend when you need one most.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 💬 **AI Chat Companion** | An empathetic chatbot powered by Llama 3.3 (70B) via Groq that validates your feelings before offering guidance |
| 📊 **Mood Tracker** | Log your mood daily with a 5-point emoji scale, add notes, and track emotional patterns over time |
| 🚨 **Emergency SOS Button** | A globally accessible pulse-animated button that directly dials the iCall crisis helpline (9152987821) |
| 📚 **Resource Library** | Curated helplines (iCall, Vandrevala, Snehi), breathing exercises, and self-care tips |
| 🔒 **Fully Anonymous** | No sign-up, no login, no personal data stored on any server — your conversations stay private |
| 📱 **Responsive Design** | Works beautifully on desktop, tablet, and mobile with a modern glassmorphism UI |

---

## 🧠 How the AI Works

MindMate uses **prompt engineering** to make the AI culturally aware and empathetic:

```
System Prompt Highlights:
├── 🎯 Tone: Warm, conversational — like a caring older sibling
├── 🇮🇳 Context: Understands JEE/NEET pressure, family dynamics, career anxiety
├── 💜 Approach: Validates emotions FIRST, then gently offers perspective
├── 🚨 Safety: Detects crisis language → immediately provides iCall helpline
├── 📏 Concise: 2–4 short paragraphs max to avoid overwhelming the user
└── ⚠️ Boundaries: Never diagnoses, prescribes, or replaces professional care
```

The full conversation history is sent with each request, giving the AI contextual awareness across the entire session.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | React 18 | Component-based UI with hooks (`useState`, `useEffect`, `useRef`) |
| **Build Tool** | Vite 6 | Lightning-fast HMR and optimized production builds |
| **Routing** | React Router v6 | Client-side routing with `NavLink` active states |
| **AI Model** | Llama 3.3 70B via Groq SDK | Ultra-fast inference (~200ms) with free-tier access |
| **Icons** | Lucide React | Clean, consistent SVG icon library |
| **Styling** | Vanilla CSS + CSS Custom Properties | Full design system with glassmorphism, animations, and responsive layouts |
| **Deployment** | Vercel | Automatic deployments from GitHub |
| **Storage** | localStorage | Client-side mood data persistence (zero-server architecture) |

---

## 📂 Project Structure

```
mindmate/
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Responsive nav with scroll-blur + mobile drawer
│   │   ├── Navbar.css
│   │   ├── ChatBubble.jsx      # Reusable message bubble with avatars + loading dots
│   │   ├── ChatBubble.css
│   │   ├── SOSButton.jsx       # Global pulse-animated crisis call button
│   │   └── SOSButton.css
│   ├── pages/
│   │   ├── Landing.jsx         # Hero section + stats + feature grid + CTA
│   │   ├── Landing.css
│   │   ├── Chat.jsx            # AI chat with Groq SDK + rate-limit handling
│   │   ├── Chat.css
│   │   ├── MoodTracker.jsx     # 5-point mood logger + stats dashboard
│   │   ├── MoodTracker.css
│   │   ├── Resources.jsx       # Helplines + breathing exercise + self-care tips
│   │   └── Resources.css
│   ├── App.jsx                 # Router config + global SOS overlay
│   ├── main.jsx                # React DOM entry point
│   └── index.css               # Global design system (CSS variables, glass-card, animations)
│
├── .env.example                # Template for API key configuration
├── index.html                  # HTML entry with SEO meta + Google Fonts
├── package.json                # Dependencies and scripts
└── vite.config.js              # Vite + React plugin config
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- A free [Groq API Key](https://console.groq.com/keys)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/pankaj332004/mindMate.git
cd mindMate

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# Open .env and add your Groq API key:
# VITE_GROQ_API_KEY=gsk_your_secret_api_key_here

# 4. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173** 🎉

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                    User's Browser                    │
│                                                     │
│  ┌─────────┐  ┌──────────┐  ┌────────────────────┐ │
│  │ Landing  │  │ AI Chat  │  │   Mood Tracker     │ │
│  │  Page    │  │  Page    │  │   (localStorage)   │ │
│  └─────────┘  └────┬─────┘  └────────────────────┘ │
│                     │                                │
│  ┌─────────┐       │        ┌────────────────────┐ │
│  │Resources│       │        │  SOS Button        │ │
│  │  Page   │       │        │  (Global Overlay)  │ │
│  └─────────┘       │        └────────┬───────────┘ │
│                     │                 │              │
└─────────────────────┼─────────────────┼──────────────┘
                      │                 │
                      ▼                 ▼
              ┌──────────────┐  ┌──────────────┐
              │   Groq API   │  │  tel: iCall  │
              │  (Llama 3.3) │  │  9152987821  │
              └──────────────┘  └──────────────┘
```

---

## 🎨 Design Philosophy

- **Glassmorphism** — Semi-transparent cards with `backdrop-filter: blur()` for a modern, calming aesthetic
- **CSS Custom Properties** — 20+ design tokens for colors, spacing, shadows, and transitions
- **Micro-Animations** — `fadeInUp`, `pulse-glow`, and `dot-bounce` for a living, responsive feel
- **Gradient Accents** — Lavender → Blue → Teal gradient used throughout for brand identity
- **Dark Theme** — Designed for late-night use when users are most likely to need support

---

## 🔮 Roadmap

**Near-Term**
- [ ] 📊 Visual mood trend charts (bar/line charts for weekly & monthly patterns)
- [ ] 💾 Chat history persistence across sessions
- [ ] 🌙 Dark / Light mode toggle

**Mid-Term**
- [ ] 🔐 Optional user authentication (Firebase/Supabase) for cross-device sync
- [ ] 🛡️ Backend API proxy to secure the Groq API key
- [ ] 🌐 Multilingual support — Hindi, Tamil, Marathi, and more via i18next
- [ ] 📱 Progressive Web App (PWA) for offline access and mobile installation

**Long-Term**
- [ ] 🧘 Animated guided breathing / meditation timer
- [ ] 🧠 Real-time sentiment analysis to proactively detect crisis situations
- [ ] 📈 AI-generated weekly wellness reports
- [ ] 🤝 Anonymous, moderated peer-support community forum
- [ ] 🎙️ Voice input using Web Speech API

---

## 🤝 Contributing

Contributions are welcome! If you'd like to help improve MindMate:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## ⚠️ Important Disclaimer

> **MindMate is an experimental AI tool and is NOT a substitute for professional mental health care, therapy, or medical advice.**
>
> If you or someone you know is in severe distress or experiencing a crisis, please seek immediate help from a qualified professional.

### 📞 Crisis Helplines (India)

| Helpline | Phone | Hours |
|---|---|---|
| **iCall** (TISS Mumbai) | 9152987821 | Mon–Sat: 8 AM – 10 PM |
| **Vandrevala Foundation** | 1860-2662-345 | 24/7 |
| **Snehi** | 044-24640050 | Mon–Fri: 8 AM – 10 PM |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with 💜 for Indian youth who deserve to be heard.**

*If this project helped you, consider giving it a ⭐ on GitHub!*

</div>
