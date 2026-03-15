import React, { useState } from 'react';
import { Phone, ExternalLink, Wind, Heart, BookOpen, Star, ChevronDown, ChevronUp } from 'lucide-react';
import './Resources.css';

const HELPLINES = [
    {
        name: 'iCall',
        org: 'TISS Mumbai',
        phone: '9152987821',
        hours: 'Mon–Sat: 8 AM – 10 PM',
        desc: 'Professional counseling for students, young adults, and working professionals.',
        color: '#a78bfa',
    },
    {
        name: 'Vandrevala Foundation',
        org: '24/7 Helpline',
        phone: '1860-2662-345',
        hours: '24 hours, 7 days',
        desc: 'Free mental health support and crisis counseling in multiple languages.',
        color: '#34d399',
    },
    {
        name: 'Snehi',
        org: 'Mental Health NGO',
        phone: '044-24640050',
        hours: 'Mon–Fri: 8 AM – 10 PM',
        desc: 'Emotional support via phone for people in distress or feeling suicidal.',
        color: '#60a5fa',
    },
    {
        name: 'iDontMind',
        org: 'Digital Mental Health',
        phone: null,
        web: 'https://idontmind.com',
        hours: 'Online platform',
        desc: 'Peer support community, mental health resources, and professional therapy matching.',
        color: '#f472b6',
    },
];

const BREATHING_STEPS = [
    { label: 'Inhale', duration: '4 seconds', emoji: '🫁', color: '#a78bfa' },
    { label: 'Hold', duration: '4 seconds', emoji: '🤫', color: '#fbbf24' },
    { label: 'Exhale', duration: '4 seconds', emoji: '💨', color: '#34d399' },
    { label: 'Hold', duration: '4 seconds', emoji: '🤫', color: '#60a5fa' },
];

const TIPS = [
    { emoji: '🚶', title: '5-Minute Walk', desc: 'A short walk can reduce cortisol levels and bring fresh perspective. Even indoors works!' },
    { emoji: '✍️', title: 'Journaling', desc: 'Write 3 things you\'re grateful for or just dump your thoughts on paper. It clears mental clutter.' },
    { emoji: '📵', title: 'Phone Detox', desc: 'Give yourself 30 mins of screen-free time before bed. Blue light disrupts sleep and amplifies anxiety.' },
    { emoji: '💧', title: 'Hydrate', desc: 'Even mild dehydration can worsen mood and concentration. Keep water nearby throughout the day.' },
    { emoji: '🎵', title: 'Music Therapy', desc: 'Listening to calm or uplifting music for 10 minutes measurably reduces stress hormones.' },
    { emoji: '🌿', title: 'Ground Yourself', desc: 'The 5-4-3-2-1 method: Name 5 things you can see, 4 feel, 3 hear, 2 smell, 1 taste. Centers your mind.' },
];

function CollapsibleBreathing() {
    const [open, setOpen] = useState(false);
    return (
        <div className="breathing-box glass-card">
            <button className="breathing-toggle" onClick={() => setOpen(o => !o)} id="breathing-toggle">
                <div className="breathing-toggle__left">
                    <Wind size={20} style={{ color: 'var(--clr-accent)' }} />
                    <div>
                        <div className="breathing-toggle__title">Box Breathing Exercise</div>
                        <div className="breathing-toggle__sub">A simple technique to calm anxiety in 2 minutes</div>
                    </div>
                </div>
                {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {open && (
                <div className="breathing-steps">
                    {BREATHING_STEPS.map((step, i) => (
                        <div className="breathing-step" key={i} style={{ '--step-color': step.color }}>
                            <span className="breathing-step__emoji">{step.emoji}</span>
                            <div>
                                <div className="breathing-step__label">{step.label}</div>
                                <div className="breathing-step__dur">{step.duration}</div>
                            </div>
                        </div>
                    ))}
                    <p className="breathing-tip">
                        Repeat this cycle 4 times. Works great before exams, presentations, or whenever anxiety spikes.
                    </p>
                </div>
            )}
        </div>
    );
}

export default function Resources() {
    return (
        <div className="resources-page">
            <div className="container">
                {/* Header */}
                <div className="resources-header section">
                    <span className="tag tag-blue">
                        <BookOpen size={12} />
                        Help &amp; Resources
                    </span>
                    <h1 style={{ marginTop: 16 }}>
                        You are not <span className="gradient-text">alone</span>
                    </h1>
                    <p style={{ maxWidth: 520, margin: '12px auto 0' }}>
                        Real humans are ready to help. These helplines are free, confidential,
                        and staffed by trained counselors who understand what you're going through.
                    </p>
                </div>

                {/* Helplines */}
                <section style={{ marginBottom: 64 }}>
                    <h2 style={{ marginBottom: 24, fontSize: '1.25rem' }}>
                        <Phone size={18} style={{ display: 'inline', marginRight: 8, color: 'var(--clr-secondary)' }} />
                        Helplines &amp; Support
                    </h2>
                    <div className="helplines-grid">
                        {HELPLINES.map(h => (
                            <div className="glass-card helpline-card" key={h.name} style={{ '--hline-color': h.color }}>
                                <div className="helpline-card__accent" />
                                <div className="helpline-card__body">
                                    <div className="helpline-card__top">
                                        <div>
                                            <div className="helpline-card__name">{h.name}</div>
                                            <div className="helpline-card__org">{h.org}</div>
                                        </div>
                                        <div className="helpline-card__hours">{h.hours}</div>
                                    </div>
                                    <p className="helpline-card__desc">{h.desc}</p>
                                    <div className="helpline-card__actions">
                                        {h.phone && (
                                            <a href={`tel:${h.phone}`} className="btn btn-primary helpline-btn" id={`call-${h.name.replace(/\s/g, '-')}`}>
                                                <Phone size={15} />
                                                {h.phone}
                                            </a>
                                        )}
                                        {h.web && (
                                            <a href={h.web} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" id={`web-${h.name.replace(/\s/g, '-')}`}>
                                                <ExternalLink size={15} />
                                                Visit Website
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Breathing Exercise */}
                <section style={{ marginBottom: 64, maxWidth: 700, margin: '0 auto 64px' }}>
                    <h2 style={{ marginBottom: 20, fontSize: '1.25rem' }}>
                        <Wind size={18} style={{ display: 'inline', marginRight: 8, color: 'var(--clr-accent)' }} />
                        Quick Techniques
                    </h2>
                    <CollapsibleBreathing />
                </section>

                {/* Self-Help Tips */}
                <section style={{ marginBottom: 80 }}>
                    <h2 style={{ marginBottom: 24, fontSize: '1.25rem' }}>
                        <Star size={18} style={{ display: 'inline', marginRight: 8, color: 'var(--clr-amber)' }} />
                        Daily Self-Care Tips
                    </h2>
                    <div className="tips-grid">
                        {TIPS.map(tip => (
                            <div className="glass-card tip-card" key={tip.title}>
                                <span className="tip-card__emoji">{tip.emoji}</span>
                                <h3 className="tip-card__title">{tip.title}</h3>
                                <p className="tip-card__desc">{tip.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Bottom reminder */}
                <div className="resources-reminder glass-card">
                    <Heart size={24} style={{ color: '#f472b6' }} />
                    <div>
                        <h3>Remember: Asking for help is a sign of strength</h3>
                        <p>
                            Mental health is just as important as physical health. There is no shame in seeking
                            support — it's one of the bravest things you can do for yourself. 💜
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
