import React from 'react';
import { Brain, User } from 'lucide-react';
import './ChatBubble.css';

export default function ChatBubble({ role, text, content, isLoading }) {
    const isBot = role === 'assistant' || role === 'model';
    const messageText = text || content;

    return (
        <div className={`bubble-row ${isBot ? 'bubble-row--bot' : 'bubble-row--user'}`}>
            {/* Avatar */}
            <div className={`bubble-avatar ${isBot ? 'bubble-avatar--bot' : 'bubble-avatar--user'}`}>
                {isBot ? <Brain size={16} strokeWidth={2.5} /> : <User size={16} strokeWidth={2.5} />}
            </div>

            {/* Bubble */}
            <div className={`bubble ${isBot ? 'bubble--bot' : 'bubble--user'}`}>
                {isLoading ? (
                    <div className="loading-dots" aria-label="Typing…">
                        <span /><span /><span />
                    </div>
                ) : (
                    <p className="bubble__text">{messageText}</p>
                )}
            </div>
        </div>
    );
}
