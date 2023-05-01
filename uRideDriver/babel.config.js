module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "react-native-reanimated/plugin",
    ["module-resolver", {
      "root": ["./src"],
      "extensions": [".tsx", ".ts", ".js", ".json"],
      "alias": { "~": "./src" }
    }],
    ["module:react-native-dotenv", {
      "envName": "APP_ENV",
      "moduleName": "@env",
      "path": ".env",
      "blocklist": null,
      "allowlist": null,
      "safe": true,
      "allowUndefined": true,
      "verbose": false
    }]
  ]
};
