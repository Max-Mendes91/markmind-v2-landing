import nextConfig from "eslint-config-next"
import unusedImports from "eslint-plugin-unused-imports"

const eslintConfig = [
  // ── Next.js recommended rules (flat config native in next@16) ────────────
  ...nextConfig,

  // ── Dead code enforcement ─────────────────────────────────────────────────
  {
    plugins: { "unused-imports": unusedImports },
    rules: {
      // Catch unused imports — this is the main dead-code guard
      "unused-imports/no-unused-imports": "error",

      // Catch unused variables; prefix with _ to intentionally suppress
      "unused-imports/no-unused-vars": ["warn", {
        vars:               "all",
        varsIgnorePattern:  "^_",
        args:               "after-used",
        argsIgnorePattern:  "^_",
      }],

      // Disable the TS rule since unused-imports handles it more cleanly
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
]

export default eslintConfig
