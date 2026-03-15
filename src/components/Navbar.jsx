import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Brain, MessageCircle, SmilePlus, BookHeart, Menu, X } from 'lucide-react';
import './Navbar.css';

const links = [
    { to: '/', label: 'Home', Icon: Brain },
    { to: '/chat', label: 'AI Chat', Icon: MessageCircle },
    { to: '/mood', label: 'Mood', Icon: SmilePlus },
    { to: '/resources', label: 'Resources', Icon: BookHeart },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => setMenuOpen(false), [pathname]);

    return (
        <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
            <div className="container navbar__inner">
                {/* Logo */}
                <NavLink to="/" className="navbar__logo">
                    <div className="navbar__logo-icon">
                        <Brain size={20} strokeWidth={2.5} />
                    </div>
                    <span>Mind<span className="gradient-text">Mate</span></span>
                </NavLink>

                {/* Desktop Nav */}
                <nav className="navbar__links" aria-label="Main navigation">
                    {links.map(({ to, label, Icon }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={to === '/'}
                            className={({ isActive }) =>
                                `navbar__link${isActive ? ' navbar__link--active' : ''}`
                            }
                        >
                            <Icon size={16} />
                            {label}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="navbar__hamburger"
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile drawer */}
            <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}>
                {links.map(({ to, label, Icon }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={to === '/'}
                        className={({ isActive }) =>
                            `navbar__mobile-link${isActive ? ' navbar__mobile-link--active' : ''}`
                        }
                    >
                        <Icon size={18} />
                        {label}
                    </NavLink>
                ))}
            </div>
        </header>
    );
}
