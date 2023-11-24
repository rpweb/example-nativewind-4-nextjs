module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["react-native-web", { commonjs: true }],
    [
      "@babel/plugin-transform-react-jsx",
      {
        runtime: "automatic",
        importSource: "nativewind",
      },
    ],
  ],
};
