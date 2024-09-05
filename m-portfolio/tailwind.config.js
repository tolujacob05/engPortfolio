/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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

        "faulty-flicker": {
          "0%, 2%": { opacity: "0.1" },
          "4%, 19%": { opacity: "0.5" },
          "21%": { opacity: "0.1" },
          "23%": { opacity: "1" },
          "80%": { opacity: "0.5" },
          "83%": { opacity: "0.4" },
          "87%": { opacity: "1" },
        },

        "text-flicker": {
          "0%": { opacity: "0.1" },
          "2%": { opacity: "1" },
          "8%": { opacity: "0.1" },
          "9%": { opacity: "1" },
          "12%": { opacity: "0.1" },
          "20%": { opacity: "1" },
          "25%": { opacity: "0.3" },
          "30%": { opacity: "1" },
          "70%": { opacity: "0.7" },
          "72%": { opacity: "0.2" },
          "77%": { opacity: "0.9" },
          "100%": { opacity: "0.9" },
        },

        "border-flicker": {
          "0%, 4%": { opacity: "0.1" },
          "2%, 8%, 100%": { opacity: "1" },
          "70%": { opacity: "0.7" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
