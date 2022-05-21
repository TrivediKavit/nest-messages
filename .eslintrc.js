module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir : __dirname, 
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        "indent": ["error", 4],
        "avoidEscape": 0,
        "allowTemplateLiterals": 0,
        'prettier/prettier': ['error', {
            "singleQuote": false,
            "trailingComma": "all",
            "tabWidth": 4,
            "useTabs": false,
            "endOfLine": "auto",
            "printWidth": 150,
        }]
    },
};
