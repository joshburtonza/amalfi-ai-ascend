import React, { useState, useEffect } from 'react';

interface GooeyTextProps {
  words: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
}

export const GooeyText: React.FC<GooeyTextProps> = ({
  words,
  morphTime = 0.9,
  cooldownTime = 0.25,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [morph, setMorph] = useState(0);
  const [cooldown, setCooldown] = useState(cooldownTime);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      setCooldown((prev) => {
        if (prev > 0) {
          return prev - 0.016;
        }

        setMorph((m) => {
          let newMorph = m;
          if (m < morphTime) {
            newMorph += 0.016;
          } else {
            setCooldown(cooldownTime);
            setCurrentIndex((i) => (i + 1) % words.length);
            return 0;
          }
          return newMorph;
        });

        return prev;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [words.length, morphTime, cooldownTime]);

  const fraction = morph / morphTime;
  const currentWord = words[currentIndex];
  const nextWord = words[(currentIndex + 1) % words.length];
  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b));

  return (
    <div className={`relative inline-block ${className}`}>
      <span className="invisible select-none" aria-hidden="true">
        {longestWord}
      </span>
      <span
        className="absolute inset-0 flex items-center justify-center"
        style={{
          filter: `blur(${Math.min(8 / fraction - 8, 100)}px)`,
          opacity: `${Math.pow(fraction, 0.4) * 100}%`,
        }}
      >
        {currentWord}
      </span>
      <span
        className="absolute inset-0 flex items-center justify-center"
        style={{
          filter: `blur(${Math.min(8 / (1 - fraction) - 8, 100)}px)`,
          opacity: `${Math.pow(1 - fraction, 0.4) * 100}%`,
        }}
      >
        {nextWord}
      </span>
    </div>
  );
};
