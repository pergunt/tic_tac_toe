module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react/jsx-runtime'],
  // Set of eslint plugins for better development experience.
  plugins: ['jsx-a11y', 'react', 'react-hooks', 'import', '@typescript-eslint'],
  // Resolve absolute imports from node_modules, src (frontend) and backend directories.
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
        moduleDirectory: ['src', 'node_modules'],
      },
    },
  },
  rules: {
    semi: 'off',
    quotes: 'off',
    indent: 'off',
    'object-curly-spacing': 'off',
    'padded-blocks': 'off',
    'arrow-body-style': 'off',
    'react/jsx-wrap-multilines': 'off',
    'func-call-spacing': 'off',
    'no-spaced-func': 'off',
    'comma-spacing': 'off',
    'react/jsx-curly-newline': 'off',
    'no-useless-escape': 'off',
    'operator-linebreak': 'off',
    'comma-dangle': 'off',
    'jsx-quotes': 'off',
    'object-curly-newline': 'off',
    'function-paren-newline': 'off',
    'no-confusing-arrow': 'off',
    'implicit-arrow-linebreak': 'off',
    'max-len': 'off',
    'no-console': 'warn',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],
    'prefer-promise-reject-errors': 0,
    // Disallows providing the 10 radix by default.
    radix: ['error', 'as-needed'],
    // Forces using all curly braces.
    curly: ['error', 'all'],
    // 'require' is used only in config files (e.g. rollup).
    'global-require': 'off',
    // Disable linebreak style to prevent conflicts different environments.
    'linebreak-style': 'off',
    // Keep line between class members except of simple class properties
    // e.g. class variables or component state.
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    // There is no difference except `allowTernary` option.
    // We prefer to use `if shorthands` for logic operations.
    // @example condition ? method1() : method2()
    'no-unused-expressions': ['error', { allowTernary: true }],
    // Forbid empty if-else blocks, but allow empty `try {...} catch(e) {}`.
    'no-empty': ['error', { allowEmptyCatch: true }],
    // Extend airbnb rule to remove eslint warning for immer usage also.
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsForRegex: [
          'acc', // for reduce accumulators
          'accumulator', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'context', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
          'staticContext', // for ReactRouter context
          'draft', // for immer
        ],
      },
    ],
    // Negated conditions are more difficult to understand. - turn off for a while
    'no-negated-condition': 'off',
    // It's important to stick to readable imports so this rule is must have here.
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    // No need to specify extensions if files are named correctly.
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never',
      },
    ],
    // Allow dev dependencies import for config, test, storybook files.
    // Also ignore `src/setupTests` file for jest setup.
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],

    'react/function-component-definition': 0,
    'react/no-unstable-nested-components': 0,
    // This rule was deprecated in v6.1.0. It will no longer be maintained.
    // Use label-has-associated-control instead.
    'jsx-a11y/label-has-for': 'off',
    // Disable because of false positive cases with dynamic alt text.
    'jsx-a11y/img-redundant-alt': 'off',
    // We must provide this rule with `htmlFor` attribute (by default)
    // because this one was broken in airbnb config by `labelAttributes: []`.
    'jsx-a11y/label-has-associated-control': ['error', { labelAttributes: ['htmlFor'] }],
    // 'defaultProps' on function steps-buttons is deprecated by React (https://github.com/facebook/react/pull/16210).
    'react/require-default-props': ['error', { ignoreFunctionalComponents: true }],
    // Allow both `.js` and `.jsx` extensions.
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    // There is no need to use alternatives everywhere like `shape`.
    // Sometimes we just need to know that this is an array in container for example.
    // We do not do any manipulations with array props and just pass it into the component.
    'react/forbid-prop-types': 'off',
    // Disable for our own risk without any grounding for a while.
    // It's also unnecessary for TypeScript users because all props are checking via types.
    'react/jsx-props-no-spreading': 'off',
    // Disable this rule because it causes an error with special html chars
    // on some environments (e.g. Windows).
    'react/jsx-one-expression-per-line': 'off',
    // We use both variants depending on each case.
    'react/state-in-constructor': 'off',
    // Use destructing only in render for `props` and `state`.
    // For handlers we use destruction only if needed.
    'react/destructuring-assignment': 'off',
  },
  overrides: [
    // In case if a project use both JS and TS files. Just comment out it for now
    // {
    //   // Extend config for js(x) files.
    //   files: ['**/*.js?(x)'],
    //   // Default eslint parser for JavaScript.
    //   parser: '@babel/eslint-parser',
    //   parserOptions: {
    //     babelOptions: {
    //       presets: ['@babel/preset-react'],
    //     },
    //   },
    //   // Additionally, resolve imports from ts(x) files into js(x).
    //   extends: ['plugin:import/typescript'],
    //   rules: {
    //     'no-restricted-exports': 0,
    //     'default-param-last': 'off',
    //     'no-plusplus': 'off',
    //     camelcase: 'off',
    //     'react/prop-types': 'off',
    //     'react/function-component-definition': 'off',
    //     // Disable for 'js' files in case of mixed configs as described in docs.
    //     // https://github.com/typescript-eslint/typescript-eslint/issues/851
    //     '@typescript-eslint/explicit-function-return-type': 'off',
    //   },
    // },
    {
      // Extend config for ts(x) files.
      files: ['**/*.ts?(x)'],
      // Default eslint parser for TypeScript.
      // https://github.com/palantir/tslint/issues/4534
      parser: '@typescript-eslint/parser',
      // Find project's root and project's `tsconfig.json` for parser.
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      // Extend config with typescript and typescript import in right order.
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
      // TypeScript specific rules.
      rules: {
        'no-restricted-exports': 0,
        camelcase: 'off',
        'react/function-component-definition': 'off',
        // Override again because we extend `prettier` after `baseConfig`.
        curly: ['error', 'all'],
        // Do not warn on `d.ts` references.
        'spaced-comment': ['error', 'always', { markers: ['/'] }],
        // Typescript is used for type checking.
        'consistent-return': 'off',
        // Allow ts(x) extensions for files with JSX.
        'react/jsx-filename-extension': [
          'error',
          { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        // TypeScript is used for type checking.
        'react/prop-types': 'off',
        // TypeScript is used for type checking.
        'react/forbid-prop-types': 'off',
        // Do not throw error because we prefer to use type inheritance.
        '@typescript-eslint/explicit-function-return-type': 'off',
        // Ignore unused vars for edge case (rest props)
        // e.g. { className, ...rest }
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
        // We prefer not to use classes so this rule is useless.
        '@typescript-eslint/unbound-method': 'off',
        // Any is the only option in some cases.
        '@typescript-eslint/no-explicit-any': 'off',
        // Nothing bad in empty function.
        '@typescript-eslint/no-empty-function': 'off',
        // Disable for compatibility with `@typescript-eslint/no-use-before-define`.
        'no-use-before-define': 'off',
        // Extend `no-use-before-define` to support TypeScript.
        '@typescript-eslint/no-use-before-define': 'error',
        // There is no need to enforce double typing because of type inheritance.
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        // Disable for compatibility with `@typescript-eslint/no-shadow`.
        'no-shadow': 'off',
        // Nothing bad in type parameter shadow.
        '@typescript-eslint/no-shadow': [
          'error',
          {
            ignoreFunctionTypeParameterNameValueShadow: true,
          },
        ],
        // We prefer to use interface in most cases.
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      },
    },
  ],
}
