import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        "border-gold": "hsl(var(--border-gold))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "hsl(var(--background))",
          deep: "hsl(var(--background-deep))",
          card: "hsl(var(--background-card))",
          light: "hsl(var(--background-light))",
          "gold-soft": "hsl(var(--background-gold-soft))",
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
          deep: "hsl(var(--primary-deep))",
          soft: "hsl(var(--primary-soft))",
          ember: "hsl(var(--primary-ember))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gold: {
          DEFAULT: "#D4AF37",
          deep: "#C49B2A",
          soft: "#F3DFA2",
          ember: "#FFCC6A",
          dark: "#8B7320",
        },
        // Service accent colors
        "accent-blue": "#3EA0FF",
        "accent-teal": "#5AB7AE",
        "accent-champagne": "#E8D18A",
        "accent-deepgold": "#D4AF37",
        "accent-burgundy": "#B03052",
        "accent-slateteal": "#4FB3B3",
        "accent-purple": "#9B51E0",
        "accent-yellow": "#F2C744",
        "accent-rosegold": "#E4AFA3",
        "accent-deepblue": "#295CFF",
        "accent-cyan": "#43F0D8",
        "accent-mint": "#A5F0D0",
        "accent-silver": "#C0C0C0",
        "accent-orange": "#FFB347",
        "accent-royalpurple": "#7A2BE2",
        "accent-steelgrey": "#6C7A89",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "particle-rise": {
          "0%": { transform: "translateY(100vh) scale(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-20vh) scale(1)", opacity: "0" },
        },
        "beam-rise": {
          "0%": { height: "0", opacity: "0" },
          "50%": { opacity: "0.6" },
          "100%": { height: "300px", opacity: "0" },
        },
        "spotlight": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "particle-rise": "particle-rise 8s ease-in-out infinite",
        "beam-rise": "beam-rise 4s ease-out infinite",
        "spotlight": "spotlight 4s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-gold": "linear-gradient(135deg, hsl(43, 65%, 52%) 0%, hsl(40, 100%, 71%) 50%, hsl(43, 60%, 46%) 100%)",
        "gradient-gold-radial": "radial-gradient(ellipse at center, hsl(43, 65%, 52%, 0.3) 0%, transparent 70%)",
        "gradient-dark": "linear-gradient(180deg, hsl(240, 10%, 4%) 0%, hsl(240, 12%, 3%) 100%)",
        "shimmer-gold": "linear-gradient(90deg, transparent 0%, hsl(43, 65%, 52%, 0.1) 25%, hsl(43, 65%, 52%, 0.3) 50%, hsl(43, 65%, 52%, 0.1) 75%, transparent 100%)",
      },
      boxShadow: {
        "gold": "0 0 40px hsl(43, 65%, 52%, 0.3)",
        "gold-intense": "0 0 80px hsl(43, 65%, 52%, 0.4)",
        "gold-glow": "0 4px 30px hsl(43, 65%, 52%, 0.25)",
        "gold-soft": "0 2px 20px hsl(43, 65%, 52%, 0.15)",
        "inner-gold": "inset 0 0 30px hsl(43, 65%, 52%, 0.1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;