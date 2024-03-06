import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        'sans': ['var(--app-font-serif)'],
      },
      fontSize: {
        // Larger Screen
        'xl-headline': ['125px', '130px'],
        'xl-h1': ['72px', '68px'],
        'xl-h2': ['52px', '56px'],
        'xl-h3': ['42px', '42px'],
        'xl-h4': ['24px', '29px'],
        'xl-h5': ['18px', '22px'],
        'xl-body': ['24px', { lineHeight: '29px', fontWeight: 300 }],

        // Medium Screen
        'm-headline': ['96px', '100px'],
        'm-h1': ['60px', '56px'],
        'm-h2': ['44px', '48px'],
        'm-h3': ['36px', '36px'],
        'm-h4': ['20px', '24px'],
        'm-h5': ['18px', '22px'],
        'm-body': ['20px', { lineHeight: '24px', fontWeight: 300 }],

        // Mobile
        's-headline': ['60px', '64px'],
        's-h1': ['48px', '44px'],
        's-h2': ['36px', '36px'],
        's-h3': ['28px', '28px'],
        's-h4': ['16px', '20px'],
        's-h5': ['16px', '20px'],
        's-body': ['16px', { lineHeight: '20px', fontWeight: 300 }],

        // Placeholder
        'headline': ['60px', '64px'],
        'h1': ['40px', '40px'],
        'h2': ['36px', '36px'],
        'h3': ['28px', '28px'],
        'h4': ['16px', '20px'],
        'h5': ['16px', '20px'],
        'body': ['16px', { lineHeight: '20px', fontWeight: 300 }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxHeight: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      }
    },
  },
  plugins: [
    typography,
  ],
}
export default config
