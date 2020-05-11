import { addParameters, configure, addDecorator } from "@storybook/html";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { withActions, configureActions } from "@storybook/addon-actions";
import { withLinks } from "@storybook/addon-links";
import { withTests } from "@storybook/addon-jest";
import results from "../jest-test-results.json";
import { defineCustomElements } from "../dist/esm/loader";

import theme from "./theme";

addParameters({
  options: {
    panelPosition: "bottom",
    theme
  },
});

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withLinks);
addDecorator(withActions("click"));
addDecorator(
  withTests({
    results,
    filesExt: ".spec.ts"
  })
);

configureActions({
  depth: 100,
  // Limit the number of items logged into the actions panel
  limit: 20
});

defineCustomElements();
configure(require.context("../src/", true, /\.stories\.tsx$/), module);
