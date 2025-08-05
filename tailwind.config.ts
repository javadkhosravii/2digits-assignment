import { withTV } from 'tailwind-variants/transformer';





const config = withTV({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        openSans: ['var(--font-open-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
});

export default config;