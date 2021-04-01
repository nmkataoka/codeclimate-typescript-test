module.exports = {
  env: {
    browser: true,
    jest: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb',
    'plugin:eslint-comments/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  globals: {
    window: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jest',
    'jsx-a11y',
    'import',
    'prettier',
    'postcss-modules',
    'sort-destructure-keys',
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'postcss-modules': {
      include: ['**.module.css', '**.module.scss'],
      postcssConfigDir: 'linters',
    },
  },
  rules: {
    '@typescript-eslint/indent': 0, // use prettier for indentation instead
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { classes: true, functions: false, variables: true },
    ], // Functions are hoisted so they can be used before defined

    curly: [2, 'all'],
    'eslint-comments/no-unused-disable': 'error',
    'import/extensions': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 0,

    indent: 0, // use @typescript-eslint/indent instead
    'no-param-reassign': [
      2,
      { ignorePropertyModificationsFor: ['state'], props: true },
    ], // Allow mutation in immer reducers
    'no-shadow': 0, // use @typescript-eslint/no-shadow instead
    'no-use-before-define': 'off', // use @typescript-eslint/no-use-before-define instead
    'no-void': ['error', { allowAsStatement: true }],

    'postcss-modules/no-undef-class': 2,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-indent': 0, // disabled because we have prettier
    'react/jsx-one-expression-per-line': 0, // disabled because we have prettier
    'react/jsx-props-no-spreading': 0, // While it's usually better to avoid props spreading, there are enough valid use cases to turn this rule off
    'react/jsx-sort-props': 2,
    'react-hooks/exhaustive-deps': 2,
    'react-hooks/rules-of-hooks': 2,
    semi: 2,
    'sort-destructure-keys/sort-destructure-keys': 2,
    'sort-keys': 2,
  },
  overrides: [
    // Enable strict TypeScript rules only for TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 0,
      },
    },
  ],
};
