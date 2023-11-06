module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@/assets': './src/assets',
            '@/components': './src/components',
            '@/constants': './src/constants',
            '@/database': './src/database',
            '@/hooks': './src/hooks',
            '@/modules': './src/modules',
            '@/navigation': './src/navigation',
            '@/screens': './src/screens',
            '@/store': './src/store',
            '@/data': './src/data',
          },
        },
      ],
    ],
  };
};
