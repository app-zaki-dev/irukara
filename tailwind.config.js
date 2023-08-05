/** @type {import('tailwindcss').Config} */
module.exports = {
  // 速度を重視
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    plugins: [],
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // 基本カラー
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        // nav: '#14b8a6',
        nav: '#2563eb',
        white: '#ffffff',
        mainBg: '#e9ebee',
        skyblue: '#06b6d4',
        line: '#06c755',
      },
      // フォント
      fontFamily: {},
    },
  },
};
