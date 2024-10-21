const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer")
  };

  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"]
  };

  // Reduzindo pastas observadas
  config.watchFolders = [__dirname];

  // Adicionando uma limitação de watch para prevenir o erro EMFILE
  config.maxWorkers = 2;

  // Desabilitar a observação de arquivos
  config.watcher = false;

  return config;
})();
