/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        amber: {
          glow: '#FFB432',
          dim:  '#C47A00',
          faint:'#3D2600',
        },
        terminal: {
          bg:      '#0C0B09',
          surface: '#131210',
          border:  '#2A2720',
          fg:      '#DCD7CD',
          dim:     '#6E6A60',
        },
      },
      fontFamily: {
        mono:    ['"TX-02"', '"Departure Mono"', '"Berkeley Mono"', 'monospace'],
        display: ['"Array"', '"DM Mono"', 'monospace'],
      },
      backgroundImage: {
        'scanlines': 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
      },
    },
  },
  plugins: [],
};
