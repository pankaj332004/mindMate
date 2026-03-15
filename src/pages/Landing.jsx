import React from 'react';
import { Link } from 'react-router-dom';
import {
    Brain, MessageCircle, ShieldCheck, Clock, Sparkles,
    Heart, Star, ArrowRight, ChevronDown
} from 'lucide-react';
import './Landing.css';

const features = [
    {
        Icon: ShieldCheck,
        color: 'teal',
        title: 'Fully Anonymous',
        desc: 'No sign-up, no personal data stored. Your conversations stay private—always.',
    },
    {
        Icon: Brain,
        color: 'purple',
        title: 'AI-Powered Empathy',
        desc: 'Powered by Google Gemini, trained to respond with warmth, patience, and non-judgement.',
    },
    {
        Icon: Clock,
        color: 'blue',
        title: 'Available 24 / 7',
        desc: 'Stress at 2 AM? Anxiety before exams? MindMate is always here—day or night.',
    },
    {
        Icon: Heart,
        color: 'rose',
        title: 'Built for Indian Youth',
        desc: 'Understands academic pressure, family expectations, and the unique challenges you face.',
    },
    {
        Icon: Sparkles,
        color: 'amber',
        title: 'Mood Tracking',
        desc: 'Log how you feel every day. Spot patterns, celebrate progress, understand yourself better.',
    },
    {
        Icon: Star,
        color: 'teal',
        title: 'Curated Resources',
        desc: 'Helplines, breathing exercises, and self-help tips—all in one calm space.',
    },
];

const colorMap = {
    teal: { bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.2)', icon: '#34d399' },
    purple: { bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.2)', icon: '#a78bfa' },
    blue: { bg: 'rgba(96,165,250,0.1)', border: 'rgba(96,165,250,0.2)', icon: '#60a5fa' },
    rose: { bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.2)', icon: '#f472b6' },
    amber: { bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.2)', icon: '#fbbf24' },
};

export default function Landing() {
    return (
        <main className="landing">
            {/* ── Hero ── */}
            <section className="hero section">
                <div className="hero__glow-1" aria-hidden />
                <div className="hero__glow-2" aria-hidden />
                <div className="container hero__inner">
                    <div className="hero__badge fade-in">
                        <span className="tag tag-purple">
                            <Sparkles size={12} />
                            Hackathon 2025 · PS1 – Youth Mental Wellness
                        </span>
                    </div>

                    <h1 className="hero__heading fade-in-2">
                        You don't have to face it{' '}
                        <span className="gradient-text">alone</span>
                    </h1>

                    <p className="hero__sub fade-in-3">
                        MindMate is your anonymous, AI-powered mental wellness companion—
                        built for <strong>Indian youth</strong> navigating stress, anxiety, and
                        the pressure to succeed.
                    </p>

                    <div className="hero__actions fade-in-4">
                        <Link to="/chat" className="btn btn-primary pulse-glow" id="hero-cta">
                            <MessageCircle size={18} />
                            Start Chatting – It's Free
                        </Link>
                        <Link to="/resources" className="btn btn-ghost" id="hero-resources">
                            Explore Resources
                        </Link>
                    </div>

                    {/* Scroll cue */}
                    <div className="hero__scroll-cue">
                        <ChevronDown size={20} className="hero__chevron" />
                    </div>
                </div>
            </section>

            {/* ── Stats Strip ── */}
            <section className="stats-strip">
                <div className="container stats-strip__inner">
                    {[
                        { value: '200M+', label: 'Indian youth affected by mental health issues' },
                        { value: '83%', label: 'Don\'t seek help due to stigma' },
                        { value: '24/7', label: 'Availability, zero wait time' },
                    ].map(({ value, label }) => (
                        <div className="stat-item" key={value}>
                            <span className="stat-value gradient-text">{value}</span>
                            <span className="stat-label">{label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Features Grid ── */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="tag tag-purple">Features</span>
                        <h2 style={{ marginTop: 16 }}>
                            Everything you need to feel{' '}
                            <span className="gradient-text">supported</span>
                        </h2>
                        <p className="section-sub">
                            No judgment. No cost. No login. Just a safe space to be heard.
                        </p>
                    </div>

                    <div className="features-grid">
                        {features.map(({ Icon, color, title, desc }) => {
                            const c = colorMap[color] || colorMap.purple;
                            return (
                                <div
                                    className="glass-card feature-card"
                                    key={title}
                                    style={{ '--card-bg': c.bg, '--card-border': c.border, '--icon-color': c.icon }}
                                >
                                    <div className="feature-card__icon">
                                        <Icon size={22} />
                                    </div>
                                    <h3 className="feature-card__title">{title}</h3>
                                    <p className="feature-card__desc">{desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ── */}
            <section className="section">
                <div className="container">
                    <div className="cta-banner glass-card">
                        <div className="cta-banner__glow" aria-hidden />
                        <div className="cta-banner__content">
                            <h2>
                                Ready to take the first step?
                            </h2>
                            <p>
                                Start a confidential conversation with MindMate right now.
                                Your wellbeing matters—and you deserve support.
                            </p>
                            <Link to="/chat" className="btn btn-primary" id="cta-banner-btn">
                                Talk to MindMate
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Footer ── */}
            <footer className="footer">
                <div className="container footer__inner">
                    <div className="navbar__logo" style={{ color: 'var(--clr-text-muted)' }}>
                        <div className="navbar__logo-icon" style={{ width: 28, height: 28 }}>
                            <Brain size={14} />
                        </div>
                        MindMate
                    </div>
                    <p className="footer__disclaimer">
                        MindMate is an AI assistant and <strong>not</strong> a substitute for
                        professional mental health care. If you are in crisis, please call{' '}
                        <strong>iCall: 9152987821</strong>.
                    </p>
                </div>
            </footer>
        </main>
    );
}
