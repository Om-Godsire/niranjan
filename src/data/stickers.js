// Configuration for Niranjan's floating photo stickers
// Symmetrically balanced: 3 on the left, 3 on the right with equal vertical intervals (32% spacing)
// You can replace images anytime in public/images/niranjan-1.png to niranjan-6.png

export const INITIAL_STICKERS = [
  // --- LEFT SIDE COLUMN (Top, Middle, Bottom) ---
  {
    id: "sticker-1",
    src: "/images/niranjan-1.png",
    name: "Niranjan (The Birthday Boy)",
    badge: "Birthday Boy 🎂",
    subtext: "100% Main Character",
    rotation: -5,
    tapeColor: "#FEF08A", // Butter yellow washi tape
    tapeAngle: -3,
    initialPosition: { x: 3, y: 6 }, // Left Top
    mobilePosition: { x: 2, y: 2 },
    floatDuration: 5.5,
    floatDistance: 12,
    hasBalloon: true,
    balloonColor: "#BAE6FD",
    pinType: "tape"
  },
  {
    id: "sticker-2",
    src: "/images/niranjan-2.png",
    name: "Niranjan (Aura Infinite)",
    badge: "Main Character ✨",
    subtext: "Suspiciously Photogenic",
    rotation: 4,
    tapeColor: "#BBF7D0", // Mint green washi tape
    tapeAngle: 3,
    initialPosition: { x: 3.5, y: 38 }, // Left Middle (32% below top)
    mobilePosition: { x: 2, y: 40 },
    floatDuration: 6.0,
    floatDistance: 12,
    hasBalloon: false,
    balloonColor: "#FED7AA",
    pinType: "pin"
  },
  {
    id: "sticker-3",
    src: "/images/niranjan-3.png",
    name: "Niranjan (Unstoppable)",
    badge: "Bro Level: 100 👑",
    subtext: "Built Different",
    rotation: -3,
    tapeColor: "#FED7AA", // Peach washi tape
    tapeAngle: -4,
    initialPosition: { x: 3, y: 70 }, // Left Bottom (32% below middle)
    mobilePosition: { x: 2, y: 78 },
    floatDuration: 5.0,
    floatDistance: 12,
    hasBalloon: false,
    balloonColor: "#FED7AA",
    pinType: "tape"
  },

  // --- RIGHT SIDE COLUMN (Top, Middle, Bottom) ---
  {
    id: "sticker-4",
    src: "/images/niranjan-4.png",
    name: "Niranjan (The Legend)",
    badge: "Certified Legend ⭐",
    subtext: "Aura +10,000",
    rotation: 5,
    tapeColor: "#FEF08A", // Butter yellow washi tape
    tapeAngle: 4,
    initialPosition: { x: 82, y: 6 }, // Right Top
    mobilePosition: { x: 62, y: 2 },
    floatDuration: 5.8,
    floatDistance: 12,
    hasBalloon: true,
    balloonColor: "#FEF08A",
    pinType: "pin"
  },
  {
    id: "sticker-5",
    src: "/images/niranjan-5.png",
    name: "Niranjan (The Star)",
    badge: "Happy Birthday! 🎈",
    subtext: "Another Year Cooler",
    rotation: -4,
    tapeColor: "#FECDD3", // Coral washi tape
    tapeAngle: -3,
    initialPosition: { x: 81.5, y: 38 }, // Right Middle (32% below top)
    mobilePosition: { x: 62, y: 40 },
    floatDuration: 6.2,
    floatDistance: 12,
    hasBalloon: false,
    balloonColor: "#FBCFE8",
    pinType: "tape"
  },
  {
    id: "sticker-6",
    src: "/images/niranjan-6.png",
    name: "Niranjan (The VIP)",
    badge: "VIP Birthday Aura ⚡",
    subtext: "100% Niranjan-Approved",
    rotation: 4,
    tapeColor: "#E9D5FF", // Lavender washi tape
    tapeAngle: 3,
    initialPosition: { x: 82, y: 70 }, // Right Bottom (32% below middle)
    mobilePosition: { x: 62, y: 78 },
    floatDuration: 5.4,
    floatDistance: 12,
    hasBalloon: false,
    balloonColor: "#BBF7D0",
    pinType: "pin"
  }
];
