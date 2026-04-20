import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";

interface ServiceHeroSplitProps {
  title: string;
  subtitle: string;
  tagline: string;
  backgroundImage: string;
  accentColor: string;
  accentColorSecondary?: string;
  slug?: string;
}

// Helper to create gradient or solid color
const getAccentGradient = (primary: string, secondary?: string) => 
  secondary ? `linear-gradient(135deg, ${primary}, ${secondary})` : primary;

// Per-service themed prop SVG rendered instead of a generic card
const ServiceProp = ({ slug, accentColor }: { slug?: string; accentColor: string }) => {
  const size = 280;
  const common = { width: size, height: size, viewBox: "0 0 200 200", fill: "none", xmlns: "http://www.w3.org/2000/svg" };

  switch (slug) {
    /* ─── Amazing Race / Cultural Race: race card envelope ─── */
    case "amazing-race":
    case "amazing-race-virtual":
    case "cultural-race":
      return (
        <svg {...common}>
          {/* Envelope body */}
          <rect x="30" y="60" width="140" height="100" rx="8" fill={accentColor} opacity="0.9" />
          <rect x="30" y="60" width="140" height="100" rx="8" stroke="white" strokeWidth="2" fill="none" />
          {/* Envelope flap */}
          <path d="M30 68 L100 115 L170 68" stroke="white" strokeWidth="2" fill={`${accentColor}cc`} />
          {/* Card poking out */}
          <rect x="55" y="30" width="90" height="70" rx="6" fill="white" />
          <text x="100" y="55" textAnchor="middle" fontSize="10" fontWeight="bold" fill={accentColor}>ROUTE</text>
          <text x="100" y="72" textAnchor="middle" fontSize="10" fontWeight="bold" fill={accentColor}>CARD</text>
          {/* Wax seal */}
          <circle cx="100" cy="140" r="14" fill="#B22222" />
          <text x="100" y="144" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">✦</text>
        </svg>
      );

    /* ─── CSI Bones: chalk body outline ─── */
    case "csi-bones":
      return (
        <svg {...common}>
          {/* Tape strips */}
          <rect x="20" y="15" width="60" height="12" rx="2" fill="#FFD700" opacity="0.7" transform="rotate(-15 50 21)" />
          <rect x="130" y="170" width="55" height="12" rx="2" fill="#FFD700" opacity="0.7" transform="rotate(10 155 176)" />
          {/* Chalk outline body */}
          <g stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.9">
            {/* Head */}
            <circle cx="100" cy="42" r="16" />
            {/* Body */}
            <line x1="100" y1="58" x2="100" y2="115" />
            {/* Arms */}
            <line x1="100" y1="72" x2="60" y2="52" />
            <line x1="100" y1="72" x2="145" y2="90" />
            {/* Legs */}
            <line x1="100" y1="115" x2="65" y2="165" />
            <line x1="100" y1="115" x2="140" y2="160" />
          </g>
          {/* Magnifying glass */}
          <circle cx="152" cy="50" r="18" stroke={accentColor} strokeWidth="3" fill={`${accentColor}20`} />
          <line x1="165" y1="63" x2="178" y2="76" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    /* ─── Monopoly Dash: money bag ─── */
    case "monopoly-dash":
      return (
        <svg {...common}>
          {/* Money bag shape */}
          <path d="M65 55 Q60 40 80 35 Q90 32 100 35 Q110 32 120 35 Q140 40 135 55 Q155 80 155 120 Q155 170 100 175 Q45 170 45 120 Q45 80 65 55Z" fill={accentColor} opacity="0.9" />
          <path d="M65 55 Q60 40 80 35 Q90 32 100 35 Q110 32 120 35 Q140 40 135 55 Q155 80 155 120 Q155 170 100 175 Q45 170 45 120 Q45 80 65 55Z" stroke="white" strokeWidth="2" fill="none" />
          {/* Tie */}
          <path d="M80 55 Q100 65 120 55" stroke="white" strokeWidth="2.5" fill="none" />
          {/* Dollar sign */}
          <text x="100" y="130" textAnchor="middle" fontSize="48" fontWeight="bold" fill="white" opacity="0.95">$</text>
          {/* Floating coins */}
          <circle cx="38" cy="80" r="10" fill="#FFD700" stroke="#DAA520" strokeWidth="1.5" />
          <text x="38" y="84" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#8B6914">$</text>
          <circle cx="165" cy="95" r="8" fill="#FFD700" stroke="#DAA520" strokeWidth="1.5" />
        </svg>
      );

    /* ─── Gel Blitz: gel blaster + splat ─── */
    case "gel-blitz":
      return (
        <svg {...common}>
          {/* Splat background */}
          <circle cx="100" cy="100" r="60" fill={`${accentColor}25`} />
          <circle cx="60" cy="75" r="20" fill={`${accentColor}20`} />
          <circle cx="145" cy="130" r="18" fill={`${accentColor}20`} />
          {/* Blaster body */}
          <rect x="40" y="85" width="100" height="24" rx="6" fill="#333" stroke="white" strokeWidth="1.5" />
          {/* Barrel */}
          <rect x="140" y="89" width="35" height="16" rx="4" fill="#444" stroke="white" strokeWidth="1.5" />
          {/* Grip */}
          <rect x="65" y="109" width="18" height="35" rx="4" fill="#333" stroke="white" strokeWidth="1.5" />
          {/* Sight */}
          <rect x="95" y="76" width="20" height="9" rx="3" fill={accentColor} />
          {/* Splat hits */}
          <circle cx="55" cy="55" r="12" fill={accentColor} opacity="0.7" />
          <circle cx="150" cy="60" r="9" fill={accentColor} opacity="0.6" />
          <circle cx="40" cy="155" r="10" fill={accentColor} opacity="0.5" />
        </svg>
      );

    /* ─── Nerf War: foam dart ─── */
    case "nerfwar":
      return (
        <svg {...common}>
          {/* Dart body */}
          <rect x="35" y="88" width="90" height="24" rx="12" fill={accentColor} stroke="white" strokeWidth="1.5" />
          {/* Dart tip (suction cup) */}
          <circle cx="135" cy="100" r="14" fill="#FF6B35" stroke="white" strokeWidth="1.5" />
          <circle cx="135" cy="100" r="7" fill="#FF8C5A" />
          {/* Tail fins */}
          <polygon points="35,88 20,75 35,95" fill={`${accentColor}cc`} stroke="white" strokeWidth="1" />
          <polygon points="35,100 20,125 35,105" fill={`${accentColor}cc`} stroke="white" strokeWidth="1" />
          {/* Target */}
          <circle cx="100" cy="100" r="55" stroke="white" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="8 4" />
          <circle cx="100" cy="100" r="35" stroke="white" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="6 4" />
          {/* Motion lines */}
          <line x1="150" y1="92" x2="175" y2="86" stroke="white" strokeWidth="1.5" opacity="0.4" />
          <line x1="150" y1="100" x2="180" y2="100" stroke="white" strokeWidth="1.5" opacity="0.4" />
          <line x1="150" y1="108" x2="175" y2="114" stroke="white" strokeWidth="1.5" opacity="0.4" />
        </svg>
      );

    /* ─── Running Man: name tag ─── */
    case "running-man":
      return (
        <svg {...common}>
          {/* Name tag */}
          <rect x="35" y="40" width="130" height="120" rx="10" fill="white" />
          <rect x="35" y="40" width="130" height="35" rx="10" fill={accentColor} />
          <rect x="75" y="40" width="50" height="35" fill={accentColor} />
          <text x="100" y="62" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">HELLO</text>
          <text x="100" y="83" textAnchor="middle" fontSize="8" fill="#666">my name is</text>
          {/* Running figure icon */}
          <g transform="translate(75, 92) scale(0.55)" fill={accentColor}>
            <circle cx="45" cy="10" r="10" />
            <path d="M25 25 L45 40 L60 25 M45 40 L45 65 L30 85 M45 65 L65 80" stroke={accentColor} strokeWidth="5" strokeLinecap="round" fill="none" />
          </g>
          {/* Pin hole */}
          <circle cx="100" cy="46" r="3" fill="white" opacity="0.5" />
        </svg>
      );

    /* ─── Sotong Game: squid game shapes ─── */
    case "sotong-game":
      return (
        <svg {...common}>
          {/* Circle */}
          <circle cx="55" cy="65" r="28" stroke={accentColor} strokeWidth="3" fill={`${accentColor}15`} />
          {/* Triangle */}
          <polygon points="145,37 175,93 115,93" stroke={accentColor} strokeWidth="3" fill={`${accentColor}15`} />
          {/* Square */}
          <rect x="72" y="110" width="56" height="56" stroke={accentColor} strokeWidth="3" fill={`${accentColor}15`} />
          {/* Guard mask (centered, small) */}
          <circle cx="100" cy="100" r="12" fill="#1a1a1a" stroke={accentColor} strokeWidth="2" />
          <circle cx="100" cy="100" r="5" fill={accentColor} />
        </svg>
      );

    /* ─── Tag-tical Laser: laser phaser ─── */
    case "tag-tical-laser-teambuilding":
      return (
        <svg {...common}>
          {/* Laser beams */}
          <line x1="140" y1="85" x2="190" y2="50" stroke={accentColor} strokeWidth="2" opacity="0.6" />
          <line x1="140" y1="95" x2="195" y2="80" stroke={accentColor} strokeWidth="1.5" opacity="0.4" />
          <line x1="140" y1="105" x2="190" y2="120" stroke={accentColor} strokeWidth="1.5" opacity="0.4" />
          {/* Phaser body */}
          <path d="M30 80 L130 80 Q145 80 145 95 Q145 110 130 110 L80 110 L70 140 L55 140 L65 110 L30 110 Q20 110 20 95 Q20 80 30 80Z" fill="#333" stroke="white" strokeWidth="1.5" />
          {/* Scope */}
          <rect x="60" y="70" width="40" height="10" rx="3" fill={accentColor} opacity="0.8" />
          {/* Trigger */}
          <line x1="90" y1="110" x2="85" y2="125" stroke="#555" strokeWidth="3" strokeLinecap="round" />
          {/* Muzzle glow */}
          <circle cx="145" cy="95" r="6" fill={accentColor} opacity="0.6" />
          <circle cx="145" cy="95" r="3" fill="white" opacity="0.8" />
        </svg>
      );

    /* ─── Builder Cross: blueprint / wrench ─── */
    case "builder-cross":
      return (
        <svg {...common}>
          {/* Blueprint paper */}
          <rect x="30" y="30" width="140" height="140" rx="4" fill="#1a3a5c" stroke="white" strokeWidth="1.5" />
          {/* Grid lines */}
          <g stroke="white" strokeWidth="0.5" opacity="0.2">
            <line x1="30" y1="70" x2="170" y2="70" />
            <line x1="30" y1="110" x2="170" y2="110" />
            <line x1="30" y1="150" x2="170" y2="150" />
            <line x1="70" y1="30" x2="70" y2="170" />
            <line x1="110" y1="30" x2="110" y2="170" />
            <line x1="150" y1="30" x2="150" y2="170" />
          </g>
          {/* Blueprint drawing */}
          <rect x="55" y="55" width="60" height="40" stroke={accentColor} strokeWidth="2" fill="none" strokeDasharray="6 3" />
          <line x1="55" y1="55" x2="85" y2="30" stroke={accentColor} strokeWidth="1.5" strokeDasharray="4 2" />
          {/* Wrench */}
          <g transform="translate(110,110) rotate(45)">
            <rect x="-4" y="-30" width="8" height="50" rx="3" fill="#888" stroke="white" strokeWidth="1" />
            <circle cx="0" cy="-30" r="10" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="0" cy="-30" r="4" fill="#888" />
          </g>
        </svg>
      );

    /* ─── Minute To Win It: stopwatch ─── */
    case "minute-to-win-it":
      return (
        <svg {...common}>
          {/* Watch body */}
          <circle cx="100" cy="110" r="60" fill="#222" stroke={accentColor} strokeWidth="3" />
          <circle cx="100" cy="110" r="54" fill="#111" stroke="white" strokeWidth="1" />
          {/* Crown button */}
          <rect x="93" y="42" width="14" height="12" rx="3" fill="#444" stroke={accentColor} strokeWidth="1.5" />
          {/* Side buttons */}
          <rect x="135" y="78" width="10" height="8" rx="2" fill="#444" stroke="white" strokeWidth="1" transform="rotate(30 140 82)" />
          {/* Tick marks */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <line
              key={deg}
              x1={100 + 44 * Math.cos((deg - 90) * Math.PI / 180)}
              y1={110 + 44 * Math.sin((deg - 90) * Math.PI / 180)}
              x2={100 + 50 * Math.cos((deg - 90) * Math.PI / 180)}
              y2={110 + 50 * Math.sin((deg - 90) * Math.PI / 180)}
              stroke="white"
              strokeWidth={deg % 90 === 0 ? "2" : "1"}
            />
          ))}
          {/* Hands */}
          <line x1="100" y1="110" x2="100" y2="70" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="100" y1="110" x2="130" y2="120" stroke="white" strokeWidth="2" strokeLinecap="round" />
          {/* Center dot */}
          <circle cx="100" cy="110" r="4" fill={accentColor} />
          {/* 60 text */}
          <text x="100" y="145" textAnchor="middle" fontSize="12" fontWeight="bold" fill={accentColor}>60s</text>
        </svg>
      );

    /* ─── Archery Tag: bow and arrow ─── */
    case "archery-tag":
      return (
        <svg {...common}>
          {/* Bow */}
          <path d="M60 30 Q20 100 60 170" stroke={accentColor} strokeWidth="4" fill="none" strokeLinecap="round" />
          {/* Bow string */}
          <line x1="60" y1="30" x2="60" y2="170" stroke="white" strokeWidth="1.5" />
          {/* Arrow shaft */}
          <line x1="60" y1="100" x2="170" y2="100" stroke="#8B7355" strokeWidth="3" />
          {/* Arrow head */}
          <polygon points="170,100 155,90 155,110" fill={accentColor} />
          {/* Arrow fletching */}
          <polygon points="65,100 55,93 55,100" fill="white" opacity="0.7" />
          <polygon points="65,100 55,107 55,100" fill="white" opacity="0.7" />
          {/* Target in background */}
          <circle cx="170" cy="100" r="25" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
          <circle cx="170" cy="100" r="17" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />
          <circle cx="170" cy="100" r="9" fill="none" stroke={accentColor} strokeWidth="1" opacity="0.4" />
        </svg>
      );

    /* ─── Amongst Us: astronaut helmet ─── */
    case "amongst-us":
      return (
        <svg {...common}>
          {/* Helmet body */}
          <path d="M55 170 L55 80 Q55 30 100 30 Q145 30 145 80 L145 170 Q145 180 135 180 L65 180 Q55 180 55 170Z" fill={accentColor} opacity="0.9" />
          <path d="M55 170 L55 80 Q55 30 100 30 Q145 30 145 80 L145 170 Q145 180 135 180 L65 180 Q55 180 55 170Z" stroke="white" strokeWidth="2" fill="none" />
          {/* Visor */}
          <path d="M65 75 Q65 50 95 50 L120 50 Q135 50 140 65 L140 100 Q140 115 125 115 L80 115 Q65 115 65 100Z" fill="#87CEEB" opacity="0.6" />
          <path d="M65 75 Q65 50 95 50 L120 50 Q135 50 140 65 L140 100 Q140 115 125 115 L80 115 Q65 115 65 100Z" stroke="white" strokeWidth="1.5" fill="none" />
          {/* Visor glare */}
          <path d="M75 60 Q85 55 90 60" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
          {/* Backpack */}
          <rect x="145" y="80" width="25" height="55" rx="8" fill={`${accentColor}cc`} stroke="white" strokeWidth="1.5" />
          {/* Suspicious eye */}
          <ellipse cx="103" cy="85" rx="20" ry="12" fill="white" opacity="0.15" />
        </svg>
      );

    /* ─── Alice in Motherland: playing card ─── */
    case "alice-in-motherland":
      return (
        <svg {...common}>
          {/* Card */}
          <rect x="45" y="25" width="110" height="150" rx="10" fill="white" stroke={accentColor} strokeWidth="2" />
          {/* Card inner border */}
          <rect x="52" y="32" width="96" height="136" rx="6" fill="none" stroke={accentColor} strokeWidth="0.5" opacity="0.4" />
          {/* Top corner */}
          <text x="60" y="52" fontSize="16" fontWeight="bold" fill={accentColor}>A</text>
          <text x="60" y="66" fontSize="12" fill={accentColor}>♠</text>
          {/* Bottom corner (inverted) */}
          <text x="140" y="158" fontSize="16" fontWeight="bold" fill={accentColor} textAnchor="end" transform="rotate(180 137 152)">A</text>
          <text x="140" y="144" fontSize="12" fill={accentColor} textAnchor="end" transform="rotate(180 137 140)">♠</text>
          {/* Center rabbit silhouette */}
          <g transform="translate(100, 100)" fill={accentColor}>
            {/* Rabbit ears */}
            <ellipse cx="-8" cy="-38" rx="6" ry="18" />
            <ellipse cx="8" cy="-38" rx="6" ry="18" />
            {/* Head */}
            <circle cx="0" cy="-15" r="12" />
            {/* Body */}
            <ellipse cx="0" cy="8" rx="14" ry="18" />
          </g>
        </svg>
      );

    /* ─── Battle of the Olympians: Olympic torch ─── */
    case "battle-of-the-olympians":
      return (
        <svg {...common}>
          {/* Torch handle */}
          <rect x="90" y="90" width="20" height="80" rx="4" fill="#8B7355" stroke="white" strokeWidth="1.5" />
          {/* Torch crown */}
          <path d="M75 90 L80 75 L90 85 L100 70 L110 85 L120 75 L125 90Z" fill={accentColor} stroke="white" strokeWidth="1.5" />
          {/* Flame */}
          <path d="M100 72 Q85 40 100 15 Q105 35 115 25 Q110 50 120 40 Q115 60 100 72Z" fill="#FF6B35" opacity="0.9" />
          <path d="M100 72 Q90 50 100 30 Q106 45 112 38 Q108 58 100 72Z" fill="#FFD700" opacity="0.8" />
          <path d="M100 72 Q95 58 100 45 Q105 55 100 72Z" fill="white" opacity="0.6" />
          {/* Laurel wreath */}
          <path d="M50 125 Q60 95 80 90" stroke="#4CAF50" strokeWidth="2" fill="none" />
          <path d="M150 125 Q140 95 120 90" stroke="#4CAF50" strokeWidth="2" fill="none" />
          {/* Leaves */}
          <ellipse cx="58" cy="115" rx="6" ry="3" fill="#4CAF50" transform="rotate(-30 58 115)" />
          <ellipse cx="65" cy="105" rx="6" ry="3" fill="#4CAF50" transform="rotate(-20 65 105)" />
          <ellipse cx="142" cy="115" rx="6" ry="3" fill="#4CAF50" transform="rotate(30 142 115)" />
          <ellipse cx="135" cy="105" rx="6" ry="3" fill="#4CAF50" transform="rotate(20 135 105)" />
          {/* Gold ring */}
          <circle cx="100" cy="168" r="6" fill="none" stroke="#FFD700" strokeWidth="2" />
        </svg>
      );

    /* ─── Treasure Heist: vault door ─── */
    case "treasure-heist":
      return (
        <svg {...common}>
          {/* Vault door */}
          <circle cx="100" cy="100" r="70" fill="#333" stroke="#888" strokeWidth="4" />
          <circle cx="100" cy="100" r="62" fill="#2a2a2a" stroke="#666" strokeWidth="2" />
          {/* Handle wheel */}
          <circle cx="100" cy="100" r="25" fill="none" stroke={accentColor} strokeWidth="3" />
          <line x1="100" y1="75" x2="100" y2="125" stroke={accentColor} strokeWidth="2" />
          <line x1="75" y1="100" x2="125" y2="100" stroke={accentColor} strokeWidth="2" />
          {/* Center bolt */}
          <circle cx="100" cy="100" r="6" fill={accentColor} />
          {/* Bolts */}
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <circle
              key={deg}
              cx={100 + 55 * Math.cos(deg * Math.PI / 180)}
              cy={100 + 55 * Math.sin(deg * Math.PI / 180)}
              r="4"
              fill="#888"
              stroke="#555"
              strokeWidth="1"
            />
          ))}
          {/* Gold bars peek */}
          <rect x="55" y="155" width="18" height="10" rx="2" fill="#FFD700" opacity="0.6" />
          <rect x="78" y="158" width="15" height="8" rx="2" fill="#FFD700" opacity="0.4" />
        </svg>
      );

    /* ─── Overseas Retreats: commercial airplane ─── */
    case "overseas-retreats":
      return (
        <svg {...common}>
          {/* Fuselage */}
          <path d="M32 92 Q35 79 52 77 L152 74 Q167 74 175 83 Q181 88 181 90 Q181 92 175 97 L152 106 L52 109 Q35 107 32 92Z" fill="white" opacity="0.92" />
          {/* Cockpit */}
          <path d="M152 77 L163 81 Q174 85 177 90 Q174 95 163 99 L152 103Z" fill="#87CEEB" opacity="0.7" />
          {/* Vertical tail fin */}
          <path d="M46 77 L41 45 L64 56 L64 77Z" fill={accentColor} />
          {/* Horizontal stabilizers */}
          <path d="M38 79 L17 67 L40 75Z" fill={accentColor} opacity="0.85" />
          <path d="M38 101 L17 113 L40 105Z" fill={accentColor} opacity="0.85" />
          {/* Main swept wing below fuselage */}
          <path d="M100 107 L94 109 L130 163 L145 158 L112 107Z" fill={accentColor} />
          {/* Engine pod */}
          <rect x="122" y="155" width="28" height="10" rx="5" fill="#555" stroke="white" strokeWidth="1" />
          {/* Passenger windows */}
          {[68, 82, 96, 110, 124, 138].map((x) => (
            <ellipse key={x} cx={x} cy="90" rx="4.5" ry="3.5" fill="#87CEEB" opacity="0.75" />
          ))}
          {/* Contrails */}
          <line x1="22" y1="90" x2="5" y2="90" stroke="white" strokeWidth="2" opacity="0.35" />
          <line x1="18" y1="84" x2="5" y2="82" stroke="white" strokeWidth="1.5" opacity="0.22" />
          <line x1="18" y1="96" x2="5" y2="98" stroke="white" strokeWidth="1.5" opacity="0.22" />
        </svg>
      );

    /* ─── Local Retreats: hotel building ─── */
    case "local-retreats":
      return (
        <svg {...common}>
          {/* 5-star rating above */}
          <text x="100" y="40" textAnchor="middle" fontSize="9" fill="#FFD700">★ ★ ★ ★ ★</text>
          {/* Building body */}
          <rect x="48" y="48" width="104" height="122" rx="3" fill="#1e2d45" stroke="white" strokeWidth="1.5" />
          {/* Accent roof band */}
          <rect x="44" y="42" width="112" height="13" rx="3" fill={accentColor} />
          {/* HOTEL text on band */}
          <text x="100" y="53" textAnchor="middle" fontSize="6" fontWeight="bold" fill="white" letterSpacing="1.5">HOTEL</text>
          {/* Windows — 4 rows × 4 columns */}
          {[
            [60,66],[80,66],[100,66],[120,66],
            [60,84],[80,84],[100,84],[120,84],
            [60,102],[80,102],[100,102],[120,102],
            [60,120],[80,120],[100,120],[120,120],
          ].map(([x, y], i) => (
            <rect
              key={i} x={x} y={y} width="14" height="11" rx="1.5"
              fill={[0,2,5,7,9,11,14].includes(i) ? "#FFEEA0" : [1,6,10,13].includes(i) ? "#87CEEB" : "#0f1c30"}
              opacity="0.95"
            />
          ))}
          {/* Entrance door */}
          <rect x="84" y="143" width="32" height="27" rx="2" fill={accentColor} opacity="0.8" />
          <line x1="100" y1="143" x2="100" y2="170" stroke="#0f1c30" strokeWidth="1.5" />
          {/* Canopy above door */}
          <path d="M78 143 L122 143 L117 134 L83 134Z" fill={accentColor} opacity="0.9" />
        </svg>
      );

    /* ─── Incentive Travel: passport with stamps ─── */
    case "incentive-travel":
      return (
        <svg {...common}>
          {/* Passport cover */}
          <rect x="55" y="30" width="90" height="130" rx="8" fill={accentColor} opacity="0.92" stroke="white" strokeWidth="1.5" />
          {/* Inner inlay */}
          <rect x="63" y="38" width="74" height="114" rx="5" fill="white" opacity="0.1" />
          {/* Emblem circle */}
          <circle cx="100" cy="95" r="24" fill="none" stroke="white" strokeWidth="2" opacity="0.7" />
          <circle cx="100" cy="95" r="15" fill="white" opacity="0.08" />
          <text x="100" y="101" textAnchor="middle" fontSize="20" fill="white" opacity="0.8">★</text>
          {/* Labels */}
          <text x="100" y="50" textAnchor="middle" fontSize="5" fill="white" opacity="0.6" letterSpacing="1">REPUBLIC OF SINGAPORE</text>
          <text x="100" y="152" textAnchor="middle" fontSize="7" fontWeight="bold" fill="white" letterSpacing="2">PASSPORT</text>
          {/* Entry stamps around the outside */}
          <rect x="18" y="50" width="24" height="15" rx="2" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.8" transform="rotate(-20 30 57)" />
          <text x="20" y="61" fontSize="5" fill="#FFD700" opacity="0.8" transform="rotate(-20 30 57)">ENTRY</text>
          <rect x="158" y="62" width="24" height="15" rx="2" fill="none" stroke="#FF6B35" strokeWidth="1.5" opacity="0.7" transform="rotate(15 170 69)" />
          <text x="160" y="73" fontSize="5" fill="#FF6B35" opacity="0.7" transform="rotate(15 170 69)">ENTRY</text>
          <rect x="15" y="140" width="24" height="15" rx="2" fill="none" stroke="#4CAF50" strokeWidth="1.5" opacity="0.6" transform="rotate(-10 27 147)" />
          <rect x="160" y="135" width="24" height="15" rx="2" fill="none" stroke="#87CEEB" strokeWidth="1.5" opacity="0.55" transform="rotate(18 172 142)" />
        </svg>
      );

    /* ─── The Game Show: TV screen / buzzer ─── */
    case "the-gameshow-experience-virtual":
      return (
        <svg {...common}>
          {/* TV body */}
          <rect x="25" y="30" width="150" height="105" rx="8" fill="#222" stroke="white" strokeWidth="2" />
          {/* Screen */}
          <rect x="35" y="40" width="130" height="80" rx="4" fill="#0a2a4a" />
          {/* Screen content */}
          <text x="100" y="72" textAnchor="middle" fontSize="14" fontWeight="bold" fill={accentColor}>GAME</text>
          <text x="100" y="92" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">SHOW</text>
          <text x="100" y="112" textAnchor="middle" fontSize="8" fill={accentColor}>★ ★ ★</text>
          {/* Stand */}
          <rect x="85" y="135" width="30" height="8" rx="2" fill="#444" />
          <rect x="75" y="143" width="50" height="6" rx="3" fill="#555" />
          {/* Buzzer */}
          <circle cx="100" cy="178" r="16" fill="#B22222" stroke="#8B0000" strokeWidth="2" />
          <circle cx="100" cy="175" r="12" fill="#FF3333" />
          <ellipse cx="100" cy="173" rx="8" ry="4" fill="white" opacity="0.3" />
        </svg>
      );

    /* ─── Fit In Your Team: dumbbell ─── */
    case "fit-in-your-team-virtual":
      return (
        <svg {...common}>
          {/* Left weight */}
          <rect x="25" y="70" width="25" height="60" rx="4" fill={accentColor} stroke="white" strokeWidth="1.5" />
          <rect x="15" y="80" width="15" height="40" rx="3" fill={`${accentColor}cc`} stroke="white" strokeWidth="1" />
          {/* Right weight */}
          <rect x="150" y="70" width="25" height="60" rx="4" fill={accentColor} stroke="white" strokeWidth="1.5" />
          <rect x="170" y="80" width="15" height="40" rx="3" fill={`${accentColor}cc`} stroke="white" strokeWidth="1" />
          {/* Bar */}
          <rect x="50" y="93" width="100" height="14" rx="7" fill="#888" stroke="white" strokeWidth="1.5" />
          {/* Grip texture */}
          <line x1="75" y1="95" x2="75" y2="105" stroke="#666" strokeWidth="1" />
          <line x1="85" y1="95" x2="85" y2="105" stroke="#666" strokeWidth="1" />
          <line x1="115" y1="95" x2="115" y2="105" stroke="#666" strokeWidth="1" />
          <line x1="125" y1="95" x2="125" y2="105" stroke="#666" strokeWidth="1" />
          {/* Sweat drops */}
          <circle cx="50" cy="55" r="3" fill="#87CEEB" opacity="0.5" />
          <circle cx="155" cy="50" r="2.5" fill="#87CEEB" opacity="0.4" />
        </svg>
      );

    /* ─── Zodiac Hunt: zodiac wheel ─── */
    case "the-great-zodiac-hunt-virtual":
      return (
        <svg {...common}>
          {/* Outer ring */}
          <circle cx="100" cy="100" r="70" fill="none" stroke={accentColor} strokeWidth="2" />
          <circle cx="100" cy="100" r="60" fill={`${accentColor}10`} stroke={accentColor} strokeWidth="1" />
          {/* Inner circle */}
          <circle cx="100" cy="100" r="20" fill={accentColor} opacity="0.3" />
          {/* Zodiac symbols around the wheel */}
          {["🐀", "🐂", "🐅", "🐇", "🐉", "🐍", "🐎", "🐑", "🐒", "🐓", "🐕", "🐖"].map((emoji, i) => {
            const angle = (i * 30 - 90) * Math.PI / 180;
            return (
              <text
                key={i}
                x={100 + 48 * Math.cos(angle)}
                y={100 + 48 * Math.sin(angle) + 5}
                textAnchor="middle"
                fontSize="14"
              >
                {emoji}
              </text>
            );
          })}
          {/* Compass needle */}
          <polygon points="100,82 95,100 100,96 105,100" fill={accentColor} />
          <polygon points="100,118 95,100 100,104 105,100" fill="white" opacity="0.5" />
        </svg>
      );

    /* ─── Nuclear Fallout: radiation symbol ─── */
    case "the-nuclear-fallout-escape-room-virtual":
      return (
        <svg {...common}>
          {/* Warning triangle */}
          <polygon points="100,20 180,170 20,170" fill="none" stroke="#FFD700" strokeWidth="3" />
          {/* Radiation trefoil */}
          <circle cx="100" cy="110" r="10" fill={accentColor} />
          {[0, 120, 240].map((deg) => (
            <path
              key={deg}
              d={`M100,110 L${100 + 40 * Math.cos((deg - 30) * Math.PI / 180)},${110 + 40 * Math.sin((deg - 30) * Math.PI / 180)} A40,40 0 0,1 ${100 + 40 * Math.cos((deg + 30) * Math.PI / 180)},${110 + 40 * Math.sin((deg + 30) * Math.PI / 180)} Z`}
              fill={accentColor}
              opacity="0.7"
            />
          ))}
          {/* Center ring */}
          <circle cx="100" cy="110" r="15" fill="none" stroke="#111" strokeWidth="5" />
          <circle cx="100" cy="110" r="7" fill="#111" />
        </svg>
      );

    /* ─── Patriot Act: Singapore Merlion ─── */
    case "the-patriot-act-virtual":
      return (
        <svg {...common}>
          {/* SG flag stripes */}
          <rect x="30" y="30" width="140" height="70" rx="4" fill="#EE2536" />
          <rect x="30" y="100" width="140" height="70" rx="4" fill="white" />
          {/* Crescent */}
          <circle cx="65" cy="65" r="18" fill="white" />
          <circle cx="72" cy="62" r="16" fill="#EE2536" />
          {/* Stars */}
          {[[80, 45], [92, 50], [98, 60], [92, 70], [80, 75]].map(([x, y], i) => (
            <text key={i} x={x} y={y} fontSize="8" fill="white">★</text>
          ))}
          {/* Merlion silhouette */}
          <g transform="translate(100, 140) scale(0.6)" fill={accentColor}>
            <path d="M0 0 Q-10 -20 -5 -40 Q0 -55 10 -60 L15 -55 Q20 -50 20 -40 L20 -25 Q25 -30 30 -25 L25 -15 Q20 -10 20 0Z" />
            {/* Water spout */}
            <path d="M25 -25 Q40 -30 50 -20 Q45 -25 55 -18" stroke={accentColor} strokeWidth="2" fill="none" />
          </g>
        </svg>
      );

    /* ─── Tomb Raider: treasure chest ─── */
    case "tomb-raider-king-treasure-hunt-virtual":
      return (
        <svg {...common}>
          {/* Chest body */}
          <rect x="35" y="100" width="130" height="70" rx="4" fill="#8B6914" stroke="#6B4F12" strokeWidth="2" />
          {/* Chest lid */}
          <path d="M35 100 Q35 60 100 55 Q165 60 165 100Z" fill="#A67C2E" stroke="#6B4F12" strokeWidth="2" />
          {/* Metal bands */}
          <rect x="35" y="96" width="130" height="8" fill="#888" stroke="#666" strokeWidth="1" />
          <line x1="70" y1="60" x2="70" y2="170" stroke="#888" strokeWidth="2" opacity="0.4" />
          <line x1="130" y1="60" x2="130" y2="170" stroke="#888" strokeWidth="2" opacity="0.4" />
          {/* Lock */}
          <rect x="90" y="92" width="20" height="16" rx="3" fill="#FFD700" stroke="#DAA520" strokeWidth="1" />
          <circle cx="100" cy="100" r="3" fill="#8B6914" />
          {/* Gold glow from inside */}
          <ellipse cx="100" cy="88" rx="40" ry="10" fill="#FFD700" opacity="0.3" />
          {/* Coins spilling */}
          <circle cx="50" cy="85" r="6" fill="#FFD700" stroke="#DAA520" strokeWidth="1" />
          <circle cx="145" cy="80" r="5" fill="#FFD700" stroke="#DAA520" strokeWidth="1" />
          <circle cx="60" cy="78" r="4" fill="#FFD700" stroke="#DAA520" strokeWidth="1" opacity="0.7" />
        </svg>
      );

    /* ─── Grand Christmas Delivery: gift box ─── */
    case "grand-christmas-delivery":
      return (
        <svg {...common}>
          {/* Gift box */}
          <rect x="40" y="85" width="120" height="90" rx="4" fill="#DC2626" stroke="white" strokeWidth="2" />
          {/* Lid */}
          <rect x="35" y="70" width="130" height="20" rx="4" fill="#B91C1C" stroke="white" strokeWidth="2" />
          {/* Ribbon vertical */}
          <rect x="92" y="70" width="16" height="105" fill="#26D07C" />
          {/* Ribbon horizontal */}
          <rect x="35" y="74" width="130" height="12" fill="#26D07C" />
          {/* Bow */}
          <ellipse cx="88" cy="62" rx="18" ry="12" fill="#26D07C" stroke="white" strokeWidth="1" />
          <ellipse cx="112" cy="62" rx="18" ry="12" fill="#26D07C" stroke="white" strokeWidth="1" />
          <circle cx="100" cy="64" r="6" fill="#FFD700" />
          {/* Star on top */}
          <text x="100" y="40" textAnchor="middle" fontSize="20" fill="#FFD700">★</text>
        </svg>
      );

    /* ─── MBTI / DISC / OCEAN: brain ─── */
    case "mbti":
    case "disc":
    case "ocean":
      return (
        <svg {...common}>
          {/* Brain outline */}
          <path d="M100 165 L100 140 Q60 140 50 115 Q40 95 55 75 Q45 60 60 45 Q75 30 95 35 Q100 28 110 35 Q130 30 145 45 Q160 60 150 75 Q165 95 155 115 Q145 140 100 140Z" fill={`${accentColor}20`} stroke={accentColor} strokeWidth="2.5" />
          {/* Brain wrinkles */}
          <path d="M85 55 Q100 65 115 55" stroke={accentColor} strokeWidth="1.5" fill="none" opacity="0.6" />
          <path d="M75 80 Q95 90 120 78" stroke={accentColor} strokeWidth="1.5" fill="none" opacity="0.6" />
          <path d="M80 105 Q100 115 125 103" stroke={accentColor} strokeWidth="1.5" fill="none" opacity="0.6" />
          {/* Center line */}
          <line x1="100" y1="35" x2="100" y2="140" stroke={accentColor} strokeWidth="1" opacity="0.4" />
          {/* Left colored sections */}
          <circle cx="75" cy="65" r="8" fill={accentColor} opacity="0.3" />
          <circle cx="70" cy="95" r="10" fill="#FF6B35" opacity="0.3" />
          {/* Right colored sections */}
          <circle cx="125" cy="65" r="8" fill="#4CAF50" opacity="0.3" />
          <circle cx="130" cy="95" r="10" fill="#2196F3" opacity="0.3" />
          {/* Stem */}
          <rect x="96" y="140" width="8" height="25" rx="4" fill={accentColor} opacity="0.5" />
        </svg>
      );

    /* ─── Mass Talks: microphone ─── */
    case "mass-talks":
      return (
        <svg {...common}>
          {/* Mic head */}
          <rect x="78" y="30" width="44" height="65" rx="22" fill="#333" stroke={accentColor} strokeWidth="2" />
          {/* Grille */}
          {[42, 50, 58, 66, 74].map((y) => (
            <line key={y} x1="84" y1={y} x2="116" y2={y} stroke={accentColor} strokeWidth="0.8" opacity="0.5" />
          ))}
          {/* Stem */}
          <rect x="95" y="95" width="10" height="70" rx="5" fill="#555" stroke="white" strokeWidth="1" />
          {/* Base */}
          <ellipse cx="100" cy="170" rx="30" ry="8" fill="#444" stroke="white" strokeWidth="1" />
          {/* Sound waves */}
          <path d="M125 50 Q140 60 125 75" stroke={accentColor} strokeWidth="1.5" fill="none" opacity="0.5" />
          <path d="M135 40 Q155 60 135 85" stroke={accentColor} strokeWidth="1.5" fill="none" opacity="0.3" />
        </svg>
      );

    /* ─── Workshops: open book / whiteboard ─── */
    case "workshops":
      return (
        <svg {...common}>
          {/* Left page */}
          <path d="M100 40 L30 50 L30 160 L100 150Z" fill="white" stroke="#ddd" strokeWidth="1.5" />
          {/* Right page */}
          <path d="M100 40 L170 50 L170 160 L100 150Z" fill="white" stroke="#ddd" strokeWidth="1.5" />
          {/* Spine */}
          <line x1="100" y1="40" x2="100" y2="150" stroke="#aaa" strokeWidth="2" />
          {/* Left text lines */}
          <line x1="45" y1="70" x2="90" y2="65" stroke="#ccc" strokeWidth="2" />
          <line x1="45" y1="85" x2="85" y2="80" stroke="#ccc" strokeWidth="2" />
          <line x1="45" y1="100" x2="90" y2="95" stroke={accentColor} strokeWidth="2" />
          <line x1="45" y1="115" x2="80" y2="112" stroke="#ccc" strokeWidth="2" />
          {/* Right diagram */}
          <circle cx="135" cy="85" r="18" fill="none" stroke={accentColor} strokeWidth="1.5" />
          <line x1="135" y1="85" x2="150" y2="75" stroke={accentColor} strokeWidth="1.5" />
          <circle cx="135" cy="85" r="3" fill={accentColor} />
          {/* Pen */}
          <line x1="155" y1="130" x2="175" y2="170" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="175,170 178,175 172,175" fill={accentColor} />
        </svg>
      );

    /* ─── Youth Camps: campfire ─── */
    case "youth-camps":
      return (
        <svg {...common}>
          {/* Logs */}
          <rect x="50" y="140" width="100" height="14" rx="7" fill="#8B6914" stroke="#6B4F12" strokeWidth="1" transform="rotate(-10 100 147)" />
          <rect x="50" y="148" width="100" height="14" rx="7" fill="#A67C2E" stroke="#6B4F12" strokeWidth="1" transform="rotate(10 100 155)" />
          {/* Fire */}
          <path d="M100 145 Q80 110 90 80 Q95 95 100 70 Q105 90 110 80 Q120 110 100 145Z" fill="#FF6B35" opacity="0.9" />
          <path d="M100 145 Q85 115 95 90 Q100 100 105 88 Q115 115 100 145Z" fill="#FFD700" opacity="0.8" />
          <path d="M100 145 Q92 125 100 105 Q108 125 100 145Z" fill="white" opacity="0.5" />
          {/* Sparks */}
          <circle cx="85" cy="65" r="2" fill="#FF6B35" opacity="0.6" />
          <circle cx="115" cy="58" r="1.5" fill="#FFD700" opacity="0.5" />
          <circle cx="95" cy="50" r="1.5" fill="#FF6B35" opacity="0.4" />
          {/* Tent in background */}
          <polygon points="155,100 185,155 125,155" fill="none" stroke={accentColor} strokeWidth="1.5" opacity="0.4" />
          {/* Stars */}
          <text x="40" y="40" fontSize="10" fill="white" opacity="0.3">★</text>
          <text x="160" y="35" fontSize="8" fill="white" opacity="0.3">★</text>
          <text x="75" y="25" fontSize="6" fill="white" opacity="0.2">★</text>
        </svg>
      );

    /* ─── Corporate Days: podium / trophy ─── */
    case "corporate-days":
      return (
        <svg {...common}>
          {/* Trophy cup */}
          <path d="M75 55 L75 100 Q75 130 100 135 Q125 130 125 100 L125 55Z" fill="#FFD700" stroke="#DAA520" strokeWidth="2" />
          {/* Handles */}
          <path d="M75 65 Q55 65 55 82 Q55 98 75 98" stroke="#FFD700" strokeWidth="3" fill="none" />
          <path d="M125 65 Q145 65 145 82 Q145 98 125 98" stroke="#FFD700" strokeWidth="3" fill="none" />
          {/* Base */}
          <rect x="90" y="135" width="20" height="15" fill="#DAA520" />
          <rect x="75" y="150" width="50" height="10" rx="3" fill="#333" stroke="#555" strokeWidth="1" />
          {/* Star on trophy */}
          <text x="100" y="95" textAnchor="middle" fontSize="22" fill="white" opacity="0.9">★</text>
          {/* Confetti */}
          <rect x="45" y="30" width="8" height="4" rx="1" fill={accentColor} opacity="0.6" transform="rotate(20 49 32)" />
          <rect x="150" y="25" width="8" height="4" rx="1" fill="#FF6B35" opacity="0.6" transform="rotate(-15 154 27)" />
          <rect x="60" y="18" width="6" height="3" rx="1" fill="#4CAF50" opacity="0.5" transform="rotate(35 63 19)" />
          <rect x="140" y="40" width="6" height="3" rx="1" fill="#2196F3" opacity="0.5" transform="rotate(-25 143 41)" />
        </svg>
      );

    /* ─── Leadership Offsites: podium with mic ─── */
    case "leadership-offsites":
      return (
        <svg {...common}>
          {/* Podium */}
          <rect x="70" y="75" width="60" height="80" rx="4" fill="#2a3a55" stroke="white" strokeWidth="1.5" />
          <rect x="65" y="68" width="70" height="12" rx="3" fill={accentColor} />
          {/* Microphone */}
          <line x1="100" y1="52" x2="100" y2="68" stroke="#888" strokeWidth="2" />
          <rect x="93" y="42" width="14" height="14" rx="7" fill="#333" stroke={accentColor} strokeWidth="1.5" />
          {/* Notes on podium */}
          <rect x="80" y="90" width="18" height="24" rx="2" fill="white" opacity="0.85" />
          <line x1="84" y1="97" x2="94" y2="97" stroke="#ccc" strokeWidth="1" />
          <line x1="84" y1="101" x2="92" y2="101" stroke="#ccc" strokeWidth="1" />
          <line x1="84" y1="105" x2="94" y2="105" stroke="#ccc" strokeWidth="1" />
          {/* Star / vision emblem */}
          <text x="100" y="38" textAnchor="middle" fontSize="16" fill={accentColor} opacity="0.7">★</text>
          {/* Audience silhouettes */}
          <circle cx="55" cy="170" r="7" fill="white" opacity="0.25" />
          <circle cx="80" cy="175" r="6" fill="white" opacity="0.2" />
          <circle cx="120" cy="175" r="6" fill="white" opacity="0.2" />
          <circle cx="145" cy="170" r="7" fill="white" opacity="0.25" />
        </svg>
      );

    /* ─── Wellness Events: lotus flower ─── */
    case "wellness-events":
      return (
        <svg {...common}>
          {/* Lotus petals */}
          <ellipse cx="100" cy="88" rx="18" ry="38" fill={accentColor} opacity="0.35" />
          <ellipse cx="100" cy="88" rx="18" ry="38" fill={accentColor} opacity="0.3" transform="rotate(36 100 88)" />
          <ellipse cx="100" cy="88" rx="18" ry="38" fill={accentColor} opacity="0.3" transform="rotate(-36 100 88)" />
          <ellipse cx="100" cy="88" rx="18" ry="38" fill={accentColor} opacity="0.25" transform="rotate(72 100 88)" />
          <ellipse cx="100" cy="88" rx="18" ry="38" fill={accentColor} opacity="0.25" transform="rotate(-72 100 88)" />
          {/* Center circle */}
          <circle cx="100" cy="88" r="12" fill={accentColor} opacity="0.6" />
          <circle cx="100" cy="88" r="6" fill="white" opacity="0.4" />
          {/* Subtle glow */}
          <circle cx="100" cy="88" r="50" fill={accentColor} opacity="0.06" />
          {/* Ripples below */}
          <path d="M60 140 Q80 132 100 140 Q120 148 140 140" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" />
          <path d="M55 152 Q77 144 100 152 Q123 160 145 152" stroke="white" strokeWidth="1" fill="none" opacity="0.2" />
        </svg>
      );

    /* ─── Default fallback: lightbulb ─── */
    default:
      return (
        <svg {...common}>
          {/* Bulb */}
          <circle cx="100" cy="80" r="45" fill={`${accentColor}20`} stroke={accentColor} strokeWidth="2.5" />
          {/* Filament */}
          <path d="M88 80 Q95 65 100 80 Q105 95 112 80" stroke={accentColor} strokeWidth="2" fill="none" />
          {/* Base */}
          <rect x="85" y="122" width="30" height="6" rx="3" fill="#888" />
          <rect x="87" y="128" width="26" height="5" rx="2" fill="#777" />
          <rect x="89" y="133" width="22" height="5" rx="2" fill="#666" />
          {/* Screw bottom */}
          <path d="M92 138 Q100 145 108 138" stroke="#555" strokeWidth="2" fill="none" />
          {/* Rays */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1={100 + 52 * Math.cos(deg * Math.PI / 180)}
              y1={80 + 52 * Math.sin(deg * Math.PI / 180)}
              x2={100 + 62 * Math.cos(deg * Math.PI / 180)}
              y2={80 + 62 * Math.sin(deg * Math.PI / 180)}
              stroke={accentColor}
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />
          ))}
        </svg>
      );
  }
};

export const ServiceHeroSplit = ({ 
  title, 
  subtitle, 
  tagline, 
  backgroundImage,
  accentColor,
  accentColorSecondary,
  slug
}: ServiceHeroSplitProps) => {
  const { openContactModal } = useContactModal();
  const gradient = getAccentGradient(accentColor, accentColorSecondary);
  
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Full background image with dark overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/60 to-black/60" />
        
        <div 
          className="absolute inset-0 opacity-15"
          style={{ background: `linear-gradient(135deg, ${accentColor}40 0%, transparent 50%)` }}
        />
      </div>

      {/* Left side - Hero Photo Panel with floating service card */}
      <div className="hidden lg:block absolute left-0 top-0 w-1/2 h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/30 to-black/55" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{ background: `linear-gradient(135deg, ${accentColor}30 0%, transparent 60%)` }}
        />

        {/* Floating themed prop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="relative drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: [-4, 2, -4],
              y: [0, -14, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.3 },
              scale: { duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
            }}
            whileHover={{ scale: 1.12, transition: { duration: 0.25 } }}
          >
            <ServiceProp slug={slug} accentColor={accentColor} />
          </motion.div>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="relative w-full lg:w-1/2 lg:ml-auto h-full flex items-center">
        {/* Floating particles with accent color */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: accentColor,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Spotlight glow */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[120px]"
          style={{ background: accentColorSecondary 
            ? `linear-gradient(135deg, ${accentColor}25, ${accentColorSecondary}25)` 
            : `${accentColor}15` }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="relative z-10 px-8 lg:px-16 py-24 lg:py-0 w-full">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Welcome text with accent color */}
            <motion.p
              className="text-xs tracking-[0.3em] uppercase font-display mb-4 font-medium"
              style={{ color: accentColor }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Welcome To
            </motion.p>
            
            {/* Main title - white */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 leading-tight">
              {title}
            </h1>
            
            {/* Tagline with accent color */}
            <p 
              className="text-lg md:text-xl max-w-lg mb-10 font-display italic"
              style={{ color: accentColor }}
            >
              "{tagline}"
            </p>

            {/* Shimmer effect divider */}
            <motion.div 
              className="w-24 h-0.5 mb-10"
              style={{ background: accentColorSecondary 
                ? `linear-gradient(90deg, transparent, ${accentColor}, ${accentColorSecondary}, transparent)` 
                : `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="xl"
                className="group relative overflow-hidden font-display font-semibold tracking-wide"
                style={{ 
                  background: gradient,
                  color: '#000',
                  border: 'none'
                }}
                onClick={openContactModal}
              >
                <span className="relative z-10">Plan Your {subtitle} →</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
