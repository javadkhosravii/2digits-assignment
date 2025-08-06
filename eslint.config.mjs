import twoDigits from '@2digits/eslint-config';

const config = await twoDigits();

export default [
  ...config,
  {
    rules: {
      'antfu/if-newline': 'off',
    },
  },
];
