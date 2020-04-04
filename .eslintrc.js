module.exports = {
  root:true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
  ],
  parser: "babel-eslint",
	plugins: [
		"react",
		"react-native"
	],
    rules: {
      semi: [2, "never"],
      "react/prop-types": 0,
      "no-console": 0,
    },
  allow: ["warn", "error"] ,
  env: {
    browser: true,
    node: true,
    es6: true
  },
};