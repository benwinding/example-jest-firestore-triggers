module.exports = {
  rootDir: '.',
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|tsx?)$",
  testPathIgnorePatterns: ["/dist/", "/node_modules/", "/src-demo/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: false,
};