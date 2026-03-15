import React, { useState, useRef, useEffect } from 'react';
import Groq from 'groq-sdk';
import { Send, RefreshCw, AlertTriangle, Sparkles } from 'lucide-react';
import ChatBubble from '../components/ChatBubble';
import './Chat.css';

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const SYSTEM_PROMPT = `You are MindMate, a warm, empathetic, and non-judgmental AI mental wellness companion designed specifically for Indian youth aged 14–25.

Your core principles:
- Speak in a friendly, conversational tone—like a caring older sibling or mentor
- Acknowledge emotions before offering advice; always validate feelings first
- Be sensitive to Indian cultural context: academic pressure (JEE/NEET/boards), family expectations, career anxiety, relationship issues, social media stress
- Encourage professional help when needed, but never dismiss or minimize the person's feelings
- Use simple, clear language. Avoid clinical jargon
- Keep responses concise (2–4 short paragraphs max) so they don't feel overwhelming
- Occasionally ask a gentle follow-up question to keep the conversation going
- Never diagnose, prescribe, or replace professional mental health care
- If someone expresses thoughts of self-harm or suicide, immediately and compassionately provide the iCall helpline: 9152987821 and encourage them to reach out

Start every new conversation with a warm, welcoming greeting that makes the person feel safe.`;

const WELCOME = {
    role: 'assistant',
    content: "Hey there 👋 I'm MindMate, your personal mental wellness companion. This is a safe, judgment-free space — you can share anything on your mind.\n\nWhether you're feeling stressed about exams, struggling with relationships, or just need someone to talk to, I'm here 💜\n\nHow are you feeling today?",
};

export default function Chat() {
    const [messages, setMessages] = useState([WELCOME]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const chatRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll on new message
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages, loading]);

    const sendMessage = async () => {
        const text = input.trim();
        if (!text || loading) return;
        if (!API_KEY) {
            setError('Missing Groq API key. Please add VITE_GROQ_API_KEY to your .env file.');
            return;
        }

        setError('');
        setInput('');
        const userMsg = { role: 'user', content: text };
        const newMessages = [...messages, userMsg];
        setMessages(newMessages);
        setLoading(true);

        try {
            const groq = new Groq({ apiKey: API_KEY, dangerouslyAllowBrowser: true });

            // Build valid history
            const apiMessages = [
                { role: 'system', content: SYSTEM_PROMPT },
                ...newMessages
            ];

            const chatCompletion = await groq.chat.completions.create({
                messages: apiMessages,
                model: 'llama-3.3-70b-versatile',
                temperature: 0.8,
                max_tokens: 512,
            });

            const responseText = chatCompletion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

            setMessages(prev => [...prev, { role: 'assistant', content: responseText }]);
        } catch (err) {
            console.error(err);
            // Parse retry delay from 429 rate-limit errors
            const retryMatch = err.message?.match(/Please retry in (\d+)/);
            if (retryMatch) {
                const secs = retryMatch[1];
                setError(`Rate limit reached — please wait ${secs} seconds and try again.`);
            } else {
                setError(`Error: ${err.message || 'Something went wrong. Check the console for details.'}`);
            }
        } finally {
            setLoading(false);
            inputRef.current?.focus();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const resetChat = () => {
        setMessages([WELCOME]);
        setInput('');
        setError('');
        inputRef.current?.focus();
    };

    return (
        <div className="chat-page">
            {/* Header */}
            <div className="chat-header">
                <div className="container chat-header__inner">
                    <div className="chat-header__info">
                        <div className="chat-status-dot" title="Online" />
                        <div>
                            <h1 className="chat-header__title">
                                <Sparkles size={18} style={{ color: 'var(--clr-primary)' }} />
                                MindMate AI
                            </h1>
                            <p className="chat-header__sub">Always here for you · Powered by Google Gemini</p>
                        </div>
                    </div>
                    <button className="btn btn-ghost chat-reset-btn" onClick={resetChat} title="New conversation" id="chat-reset">
                        <RefreshCw size={16} />
                        New Chat
                    </button>
                </div>
            </div>

            <div className="chat-messages" ref={chatRef} aria-live="polite">
                <div className="container chat-messages__inner">
                    {messages.map((msg, i) => (
                        <ChatBubble key={i} role={msg.role} text={msg.text} content={msg.content} />
                    ))}
                    {loading && <ChatBubble role="assistant" isLoading />}
                </div>
            </div>

            {/* Error */}
            {error && (
                <div className="chat-error container">
                    <AlertTriangle size={16} />
                    {error}
                </div>
            )}

            {/* Input Area */}
            <div className="chat-input-area">
                <div className="container chat-input__inner">
                    <textarea
                        id="chat-input"
                        ref={inputRef}
                        className="input chat-input"
                        placeholder="Share what's on your mind… (Enter to send)"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        rows={2}
                        disabled={loading}
                        aria-label="Message input"
                    />
                    <button
                        className="btn btn-primary chat-send-btn"
                        onClick={sendMessage}
                        disabled={loading || !input.trim()}
                        id="chat-send"
                        aria-label="Send message"
                    >
                        <Send size={18} />
                    </button>
                </div>
                <p className="chat-disclaimer container">
                    MindMate is an AI and not a substitute for professional help.
                    Crisis? Call <strong>iCall: 9152987821</strong>
                </p>
            </div>
        </div>
    );
}
