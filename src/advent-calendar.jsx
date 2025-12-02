import React, { useState, useEffect } from 'react';
import { Heart, Lock } from 'lucide-react';

const AdventCalendar = () => {
  const [openedWindows, setOpenedWindows] = useState(() => {
    // Load previously opened windows from localStorage
    const saved = localStorage.getItem('openedWindows');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedWindow, setSelectedWindow] = useState(null);

  // Update current date every minute to handle day changes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Save opened windows to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('openedWindows', JSON.stringify([...openedWindows]));
  }, [openedWindows]);

  // Using local images from the public/images folder
  // Name your photos: day1.jpg, day2.jpg, day3.jpg, etc. (or .png, .jpeg)
  const images = {
    1: `${process.env.PUBLIC_URL}/images/day1.JPG`,
    2: `${process.env.PUBLIC_URL}/images/day2.jpg`,
    3: `${process.env.PUBLIC_URL}/images/day3.jpg`,
    4: `${process.env.PUBLIC_URL}/images/day4.jpg`,
    5: `${process.env.PUBLIC_URL}/images/day5.jpg`,
    6: `${process.env.PUBLIC_URL}/images/day6.jpg`,
    7: `${process.env.PUBLIC_URL}/images/day7.JPG`,
    8: `${process.env.PUBLIC_URL}/images/day8.jpg`,
    9: `${process.env.PUBLIC_URL}/images/day9.jpg`,
    10: `${process.env.PUBLIC_URL}/images/day10.jpg`,
    11: `${process.env.PUBLIC_URL}/images/day11.JPG`,
    12: `${process.env.PUBLIC_URL}/images/day12.jpg`,
    13: `${process.env.PUBLIC_URL}/images/day13.jpg`,
    14: `${process.env.PUBLIC_URL}/images/day14.jpg`,
    15: `${process.env.PUBLIC_URL}/images/day15.jpg`,
    16: `${process.env.PUBLIC_URL}/images/day16.jpg`,
    17: `${process.env.PUBLIC_URL}/images/day17.JPG`,
    18: `${process.env.PUBLIC_URL}/images/day18.jpg`,
    19: `${process.env.PUBLIC_URL}/images/day19.jpg`,
    20: `${process.env.PUBLIC_URL}/images/day20.jpg`,
    21: `${process.env.PUBLIC_URL}/images/day21.jpg`,
    22: `${process.env.PUBLIC_URL}/images/day22.jpg`,
    23: `${process.env.PUBLIC_URL}/images/day23.jpg`,
    24: `${process.env.PUBLIC_URL}/images/day24.JPG`,
    25: `${process.env.PUBLIC_URL}/images/day25.jpg`,
  };

    const captions = {
    1: "Najini zacetkiiii:)",
    2: "Buzzcut in smekanje",
    3: "My favorite badly cut mullet boi",
    4: "Odkar sva skup mam bolso zobno higieno",
    5: "Klasika, nerabm sploh komentirat pomoje",
    6: "Waw waw very cool",
    7: "Blond brki ti bols stojijo",
    8: "We look beautiful",
    9: "Sea shananigans",
    10: "Tle sm ti rekla da te ljubim",
    11: "Zate bi si se razbila glavo",
    12: "Zobiji part 2 - post zurka edition",
    13: "Morjeee ampak pozimi (aka better)",
    14: "The things i do for you <3",
    15: "Man bun Tomi throwbackkk",
    16: "Koktejlcki in ljubav",
    17: "Poleg tebe moj biggest achievement",
    18: "TIRONAAA (tle manjkajo se prjatucki)",
    19: "Coolest peeps on the block",
    20: "Moja najljubsa stvar ever",
    21: "Kdaj spet???",
    22: "Skoda da nisva res vseh listov v muzejih prebrala;)",
    23: "Ur mini you - annoying you",
    24: "Ena lepa pred koncem",
    25: "Najin najljubsi dan. Rada te mam!",
  };

  const canOpen = (day) => {
    const today = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    // Only in December and only on or after the day
    return currentMonth === 11 && today >= day;
  };

  const handleWindowClick = (day) => {
    if (canOpen(day)) {
      setOpenedWindows(prev => new Set([...prev, day]));
      setSelectedWindow(day);
    }
  };

  const closeModal = () => {
    setSelectedWindow(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0e0e] via-[#2d1414] to-[#1a0e0e] p-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-rose-500 rounded-full blur-3xl"></div>
      </div>

      {/* Snow effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-60"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: Math.random() * 2 + 's'
            }}
          />
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Montserrat:wght@300;400;500&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .window-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .window-card:hover:not(.locked) {
          transform: translateY(-8px) scale(1.05);
        }

        .window-card.locked:hover {
          transform: scale(0.98);
        }

        .shimmer {
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255,255,255,0.3) 50%, 
            transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-red-300 to-rose-200 mb-4" 
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Advent Calendar
          </h1>
          <p className="text-amber-100/80 text-xl flex items-center justify-center gap-2"
             style={{ fontFamily: "'Montserrat', sans-serif" }}>
            25 days of memories <Heart className="w-5 h-5 text-red-300 animate-pulse" style={{animation: 'heartbeat 2s ease-in-out infinite'}} /> just for you
          </p>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-5 gap-6 mb-8">
          {[...Array(25)].map((_, index) => {
            const day = index + 1;
            const isOpen = openedWindows.has(day);
            const isLocked = !canOpen(day);

            return (
              <div
                key={day}
                onClick={() => handleWindowClick(day)}
                className={`window-card aspect-square rounded-2xl cursor-pointer relative overflow-hidden group ${
                  isLocked ? 'locked' : ''
                }`}
                style={{
                  background: isOpen 
                    ? `linear-gradient(135deg, rgba(239, 68, 68, 0.3) 0%, rgba(251, 191, 36, 0.3) 100%)`
                    : `linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #7f1d1d 100%)`,
                  boxShadow: isLocked 
                    ? '0 4px 20px rgba(0,0,0,0.3)' 
                    : '0 8px 32px rgba(251, 191, 36, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Shimmer effect on hover for unlocked windows */}
                {!isLocked && !isOpen && (
                  <div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}

                {/* Window content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  {isLocked ? (
                    <>
                      <Lock className="w-8 h-8 text-amber-200/40 mb-2" />
                      <span className="text-5xl font-bold text-amber-200/40"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {day}
                      </span>
                    </>
                  ) : isOpen ? (
                    <div className="w-full h-full relative">
                      <img 
                        src={images[day]} 
                        alt={`Day ${day}`}
                        className="w-full h-full object-cover rounded-xl opacity-60"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl font-bold text-white drop-shadow-lg"
                              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          {day}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <span className="text-6xl font-bold text-amber-200 group-hover:scale-110 transition-transform"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {day}
                      </span>
                      <span className="text-sm text-amber-200/80 mt-2"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Click to open
                      </span>
                    </>
                  )}
                </div>

                {/* Decorative corner stars for unlocked windows */}
                {!isLocked && !isOpen && (
                  <>
                    <div className="absolute top-2 right-2 text-amber-300/40 text-2xl">✦</div>
                    <div className="absolute bottom-2 left-2 text-amber-300/40 text-2xl">✦</div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Modal for opened window */}
        {selectedWindow && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-4xl w-full bg-gradient-to-br from-[#2d1414] to-[#1a0e0e] rounded-3xl p-8 border border-amber-200/20"
              onClick={(e) => e.stopPropagation()}
              style={{
                animation: 'fadeIn 0.3s ease-out',
                boxShadow: '0 25px 50px rgba(0,0,0,0.5), 0 0 100px rgba(251, 191, 36, 0.2)'
              }}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-amber-200 hover:text-amber-100 text-4xl font-light"
              >
                ×
              </button>
              
              <div className="text-center mb-6">
                <h2 className="text-5xl font-bold text-amber-200 mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  December {selectedWindow}
                </h2>
                <div className="flex items-center justify-center gap-2 text-amber-100/60">
                  <Heart className="w-4 h-4" />
                  <span style={{ fontFamily: "'Montserrat', sans-serif" }}>A special memory</span>
                  <Heart className="w-4 h-4" />
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-square max-w-2xl mx-auto">
                <img 
                  src={images[selectedWindow]} 
                  alt={`Day ${selectedWindow}`}
                  className="w-full h-full object-cover"
                  style={{boxShadow: '0 10px 40px rgba(0,0,0,0.3)'}}
                />
              </div>

              <p className="text-center mt-6 text-amber-100/70 italic"
                 style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {captions[selectedWindow]}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdventCalendar;