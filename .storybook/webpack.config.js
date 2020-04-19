module.exports = async ({ config }) => {

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [["react-app", { flow: false, typescript: true }]],
    },
  });
  // config.module.rules.push({
  //   test: /\.(ts|tsx)$/,
  //   use: [
  //     {
  //       loader: require.resolve('babel-loader'),
  //       options: {
  //         presets: [require.resolve('babel-preset-react-app')],
  //       },
  //     },
  //     {
  //       loader: require.resolve('react-docgen-typescript-loader'),
  //       options: {
  //         propFilter: props => {
  //           if (props.parent) {
  //             if (props.parent.fileName.includes('styled-system')) {
  //               return false
  //             }

  //             if (props.parent.name === 'DOMAttributes') return false
  //             if (props.parent.name === 'AriaAttributes') return false
  //             if (props.parent.name === 'HTMLAttributes') return false
  //           }

  //           return true
  //         },
  //       },
  //     },
  //   ],
  // })

  // config.module.rules.push({
  //   test: /\.stories\.tsx?$/,
  //   loaders: [
  //     {
  //       loader: require.resolve('@storybook/source-loader'),
  //       options: { parser: 'typescript' },
  //     },
  //   ],
  //   enforce: 'pre',
  // })

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
