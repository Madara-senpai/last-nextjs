/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,md}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,md}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,md}",
    "./src/posts/**/*.{mdx,md}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // Custom styles for tables
            table: {
              borderCollapse: 'collapse',
              width: '100%',
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            th: {
              backgroundColor: '#f3f4f6',
              fontWeight: '600',
            },
            'th, td': {
              padding: '0.75rem',
              border: '1px solid #e5e7eb',
              textAlign: 'left',
            },
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {

      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
