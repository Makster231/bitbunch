module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(jpg|png|webp|svg|gif|mp4)$/,
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]',
          },
        },
      ],
    },
  };
};
