<div align="center">
  <h1>🧠💚 MindMate</h1>
  <p><strong>Your Personal, Judgment-Free Mental Wellness Companion</strong></p>
  <p>Building a safe space for Indian youth to navigate academic pressure, family expectations, and everyday anxiety.</p>

  <a href="https://mindmate-alpha.vercel.app"><b>View Live App</b></a> | <a href="#-getting-started"><b>Installation</b></a>
</div>

---

## 🌟 What is MindMate?

Being a student or young adult in India can be incredibly stressful. Between JEE/NEET exams, board results, career anxiety, and relationship issues, it can feel like you have no one to talk to without being judged.

**MindMate** is an AI companion built specifically to listen. It is not here to preach or diagnose you—it is here to be a warm, empathetic friend when you need one most.

### ✨ Key Features You'll Love
- 💬 **Always-Listening AI:** An empathetic chatbot powered by cutting-edge AI (Llama 3.3) that validates your feelings first.
- 📉 **Mood Tracker:** Keep an eye on how you are feeling day-to-day to better understand your emotional patterns.
- 🚨 **Emergency SOS Button:** A globally accessible pulse button that connects you immediately to the iCall crisis helpline.
- 📚 **Resource Library:** Curated articles and trusted links for mental health support.

---

## � Getting Started (For Beginners!)

Want to run MindMate on your own computer? It's easy! You don't need any special equipment, just follow these steps.

### What you need first:
1. **Node.js**: The engine that runs React. [Download it here](https://nodejs.org/) and install it.
2. **A Free API Key**: This is what gives the AI its brain!
   - Go to [Groq Console](https://console.groq.com/keys)
   - Create a free account.
   - Click "Create API Key" and copy the long string of text. Keep it secret!

### Installation Steps
Open your computer's terminal (or command prompt) and type these commands one by one:

**1. Download the code**
\`\`\`bash
git clone https://github.com/pankaj332004/mindMate.git
cd mindMate
\`\`\`

**2. Install the necessary tools**
\`\`\`bash
npm install
\`\`\`

**3. Give it the API Key**
Create a new file in the main folder called exactly `.env`. Open it in any text editor and paste your API key like this:
\`\`\`env
VITE_GROQ_API_KEY=gsk_your_secret_api_key_here
\`\`\`

**4. Start the App!**
\`\`\`bash
npm run dev
\`\`\`
*(It will give you a link like `http://localhost:5173`. Click it, and MindMate will open in your browser!)*

---

## 📂 How the Code Works (For Developers)
Curious about how it is built? Here is a quick map of the project files so you can start contributing!

\`\`\`
mindmate/
├── src/                    
│   ├── components/         # Small, reusable LEGO blocks (Navbar, SOSButton, ChatBubbles)
│   ├── pages/              # The main screens (Landing, Chat, MoodTracker, Resources)
│   ├── App.jsx             # The traffic cop that handles routing between pages
│   ├── main.jsx            # Where the app actually boots up
│   └── index.css           # Global colors and styles
│
├── .env.example            # A blank template to show where API keys go
├── package.json            # The "ingredient list" of software needed to run this
└── vite.config.js          # Settings for Vite (the tool that bundles the app)
\`\`\`
**Tech Stack Used:** React 18, Vite, React Router, TailwindCSS/Vanilla CSS, Lucide React (Icons), Groq SDK.

---

## 🔮 What's Next (Roadmap)
We are always improving MindMate! Here is what we plan to build next:
- [ ] **Visual Progress Analytics:** Beautiful charts showing mood trends over weeks/months.
- [ ] **User Authentication:** Allow users to create accounts to save their mood history over time.
- [ ] **Multilingual Support:** Add regional Indian languages (Hindi, Marathi, Tamil, etc.) for wider accessibility.
- [ ] **Community Forums:** A moderated, anonymous peer-support section.

---

## ⚠️ Important Disclaimer
**MindMate is an experimental AI tool and is NOT a substitute for professional mental health care, therapy, or medical advice.** 

If you or someone you know is in severe distress or experiencing a crisis, please seek immediate help from a qualified professional.

📞 **Crisis Helpline (India):** Call iCall at **9152987821**
