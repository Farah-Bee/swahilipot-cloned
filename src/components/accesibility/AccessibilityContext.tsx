"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AccessibilityContextType {
  fontSize: number;
  setFontSize: (size: number) => void;
  toggleTextSpacing: () => void;
  toggleHighContrast: () => void;
  toggleHighlightLinks: () => void;
  togglePauseAnimations: () => void;
  toggleHideImages: () => void;
  toggleDyslexiaFont: () => void;
  toggleLargeCursor: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSize] = useState(16);
  const [textSpacing, setTextSpacing] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [pauseAnimations, setPauseAnimations] = useState(false);
  const [hideImages, setHideImages] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [largeCursor, setLargeCursor] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    if (textSpacing) {
      document.documentElement.style.setProperty('--text-spacing', '1.5');
      document.documentElement.style.setProperty('--line-height', '1.8');
      document.documentElement.style.setProperty('--letter-spacing', '0.12em');
    } else {
      document.documentElement.style.removeProperty('--text-spacing');
      document.documentElement.style.removeProperty('--line-height');
      document.documentElement.style.removeProperty('--letter-spacing');
    }
  }, [textSpacing]);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    if (highlightLinks) {
      document.documentElement.classList.add('highlight-links');
    } else {
      document.documentElement.classList.remove('highlight-links');
    }
  }, [highlightLinks]);

  useEffect(() => {
    if (pauseAnimations) {
      document.documentElement.classList.add('pause-animations');
    } else {
      document.documentElement.classList.remove('pause-animations');
    }
  }, [pauseAnimations]);

  useEffect(() => {
    if (hideImages) {
      document.documentElement.classList.add('hide-images');
    } else {
      document.documentElement.classList.remove('hide-images');
    }
  }, [hideImages]);

  useEffect(() => {
    if (dyslexiaFont) {
      document.documentElement.classList.add('dyslexia-font');
    } else {
      document.documentElement.classList.remove('dyslexia-font');
    }
  }, [dyslexiaFont]);

  useEffect(() => {
    if (largeCursor) {
      document.documentElement.classList.add('large-cursor');
    } else {
      document.documentElement.classList.remove('large-cursor');
    }
  }, [largeCursor]);

  const value = {
    fontSize,
    setFontSize,
    toggleTextSpacing: () => setTextSpacing(prev => !prev),
    toggleHighContrast: () => setHighContrast(prev => !prev),
    toggleHighlightLinks: () => setHighlightLinks(prev => !prev),
    togglePauseAnimations: () => setPauseAnimations(prev => !prev),
    toggleHideImages: () => setHideImages(prev => !prev),
    toggleDyslexiaFont: () => setDyslexiaFont(prev => !prev),
    toggleLargeCursor: () => setLargeCursor(prev => !prev),
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}