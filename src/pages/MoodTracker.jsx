import React, { useState, useEffect } from 'react';
import { SmilePlus, Frown, Meh, Smile, Laugh, Trash2, TrendingUp } from 'lucide-react';
import './MoodTracker.css';

const MOODS = [
    { emoji: '😭', label: 'Terrible', value: 1, color: '#f87171', Icon: Frown },
    { emoji: '😕', label: 'Not Great', value: 2, color: '#fb923c', Icon: Meh },
    { emoji: '😐', label: 'Okay', value: 3, color: '#fbbf24', Icon: Meh },
    { emoji: '🙂', label: 'Good', value: 4, color: '#34d399', Icon: Smile },
    { emoji: '😄', label: 'Amazing', value: 5, color: '#a78bfa', Icon: Laugh },
];

const STORAGE_KEY = 'mindmate_mood_log';

function getToday() {
    return new Date().toISOString().split('T')[0];
}

function loadLog() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch { return []; }
}

function saveLog(log) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(log));
}

export default function MoodTracker() {
    const [log, setLog] = useState(loadLog);
    const [selected, setSelected] = useState(null);
    const [note, setNote] = useState('');
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        // Pre-select today's mood if logged
        const todayEntry = log.find(e => e.date === getToday());
        if (todayEntry) setSelected(todayEntry.value);
    }, []);

    const handleLog = () => {
        if (!selected) return;
        const today = getToday();
        const mood = MOODS.find(m => m.value === selected);
        const newEntry = { date: today, value: selected, label: mood.label, emoji: mood.emoji, note };
        const updated = [newEntry, ...log.filter(e => e.date !== today)];
        setLog(updated);
        saveLog(updated);
        setNote('');
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const deleteEntry = (date) => {
        const updated = log.filter(e => e.date !== date);
        setLog(updated);
        saveLog(updated);
    };

    const avgMood = log.length
        ? (log.reduce((s, e) => s + e.value, 0) / log.length).toFixed(1)
        : null;
    const avgMoodLabel = avgMood
        ? MOODS.find(m => m.value === Math.round(Number(avgMood)))?.label
        : null;

    return (
        <div className="mood-page">
            <div className="container">
                <div className="mood-header section">
                    <span className="tag tag-teal">
                        <SmilePlus size={12} />
                        Daily Check-In
                    </span>
                    <h1 style={{ marginTop: 16 }}>
                        How are you feeling <span className="gradient-text">today?</span>
                    </h1>
                    <p>
                        Take 30 seconds to log your mood. Small check-ins add up to big self-awareness.
                    </p>
                </div>

                {/* Mood Picker */}
                <div className="glass-card mood-picker-card">
                    <div className="mood-emojis">
                        {MOODS.map((mood) => (
                            <button
                                key={mood.value}
                                id={`mood-${mood.value}`}
                                className={`mood-btn${selected === mood.value ? ' mood-btn--active' : ''}`}
                                onClick={() => setSelected(mood.value)}
                                style={{ '--mood-color': mood.color }}
                                aria-label={mood.label}
                                aria-pressed={selected === mood.value}
                            >
                                <span className="mood-btn__emoji">{mood.emoji}</span>
                                <span className="mood-btn__label">{mood.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Note */}
                    <textarea
                        className="input mood-note"
                        placeholder="Add a note (optional) — What's going on today?"
                        value={note}
                        onChange={e => setNote(e.target.value)}
                        rows={2}
                        id="mood-note"
                    />

                    <div className="mood-actions">
                        <button
                            className="btn btn-primary"
                            onClick={handleLog}
                            disabled={!selected}
                            id="mood-log-btn"
                        >
                            {saved ? '✓ Logged!' : 'Log My Mood'}
                        </button>
                        {saved && (
                            <span className="mood-saved-msg" style={{ color: 'var(--clr-secondary)' }}>
                                Mood saved 💜
                            </span>
                        )}
                    </div>
                </div>

                {/* Stats */}
                {log.length > 0 && (
                    <div className="mood-stats">
                        <div className="glass-card mood-stat-card">
                            <TrendingUp size={22} style={{ color: 'var(--clr-primary)' }} />
                            <div>
                                <div className="mood-stat-value">{avgMood}</div>
                                <div className="mood-stat-label">Avg mood · {avgMoodLabel}</div>
                            </div>
                        </div>
                        <div className="glass-card mood-stat-card">
                            <SmilePlus size={22} style={{ color: 'var(--clr-secondary)' }} />
                            <div>
                                <div className="mood-stat-value">{log.length}</div>
                                <div className="mood-stat-label">Days logged</div>
                            </div>
                        </div>
                        <div className="glass-card mood-stat-card">
                            <span style={{ fontSize: '1.4rem' }}>{MOODS.find(m => m.value === Math.round(Number(avgMood)))?.emoji}</span>
                            <div>
                                <div className="mood-stat-value">
                                    {MOODS.find(m => m.value === Math.max(...log.map(l => l.value)))?.emoji}  →  {MOODS.find(m => m.value === Math.min(...log.map(l => l.value)))?.emoji}
                                </div>
                                <div className="mood-stat-label">Best → Hardest</div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Log History */}
                {log.length > 0 && (
                    <div className="mood-history">
                        <h2 style={{ marginBottom: 20, fontSize: '1.3rem' }}>Your Mood Log</h2>
                        <div className="mood-log-list">
                            {log.map(entry => {
                                const mood = MOODS.find(m => m.value === entry.value);
                                return (
                                    <div key={entry.date} className="glass-card mood-log-item" style={{ '--mood-color': mood?.color }}>
                                        <div className="mood-log-item__left">
                                            <span className="mood-log-item__emoji">{entry.emoji}</span>
                                            <div>
                                                <div className="mood-log-item__label">{entry.label}</div>
                                                <div className="mood-log-item__date">{new Date(entry.date + 'T12:00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}</div>
                                                {entry.note && <div className="mood-log-item__note">"{entry.note}"</div>}
                                            </div>
                                        </div>
                                        <button
                                            className="mood-delete-btn"
                                            onClick={() => deleteEntry(entry.date)}
                                            aria-label="Delete entry"
                                            title="Delete"
                                        >
                                            <Trash2 size={15} />
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {log.length === 0 && (
                    <div className="mood-empty">
                        <p>No mood logs yet. Log your first mood above! 💜</p>
                    </div>
                )}
            </div>
        </div>
    );
}
