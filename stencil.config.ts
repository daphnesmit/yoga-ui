import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "yoga-ui",
  taskQueue: "async",
  globalStyle: "src/global/css/global.css",
  plugins: [
    sass({
      injectGlobalPaths: [
        "src/global/scss/variables.scss",
        "src/global/scss/mixins.scss"
      ]
    })
  ],
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
      copy: [{ src: "assets/fonts", dest: "static/fonts" }]
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
      dir: "public",
      copy: [{ src: "assets/fonts", dest: "static/fonts" }]
    }
  ]
};
