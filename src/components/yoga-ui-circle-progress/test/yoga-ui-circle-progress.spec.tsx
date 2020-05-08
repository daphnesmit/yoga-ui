import { newSpecPage } from "@stencil/core/testing";
import { YogaUiCircleProgress } from "../yoga-ui-circle-progress";

describe("yoga-ui-circle-progress", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [YogaUiCircleProgress],
      html: `<yoga-ui-circle-progress></yoga-ui-circle-progress>`
    });
    expect(page.root).toEqualHtml(`
      <yoga-ui-circle-progress>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yoga-ui-circle-progress>
    `);
  });
});
