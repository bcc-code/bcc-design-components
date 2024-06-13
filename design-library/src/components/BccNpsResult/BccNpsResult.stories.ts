import { ref } from "vue";
import BccNpsResult from "./BccNpsResult.vue";

import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Feedback/BccNpsResult",
  component: BccNpsResult,
  argTypes: {
    size: {
      description: "Size of the NPS Result gauge",
      options: ["lg", "md", "sm", "tiny"],
      control: { type: "radio" },
    },
  },
} as Meta<typeof BccNpsResult>;

const Template: StoryFn<typeof BccNpsResult> = (args) => ({
  components: { BccNpsResult },
  setup() {
    const value = ref(0);
    return { args, value };
  },
  template: `
    <BccNpsResult v-bind="args" />
  `,
});

export const Example = Template.bind({});
Example.args = { score: 30, underline: "NPS Score" };

const TemplateAllSizes: StoryFn<typeof BccNpsResult> = (args) => ({
  components: { BccNpsResult },
  setup() {
    const value = ref(0);
    return { args, value };
  },
  template: `
  <div class="flex justify-between items-center">
    <BccNpsResult size="tiny" underline="Tiny" :score="100" />
    <BccNpsResult size="sm" underline="Sm" :score="100" />
    <BccNpsResult size="md" underline="Md" :score="100" />
    <BccNpsResult size="lg" underline="Lg" :score="100" />
  </div>
  `,
});

export const ExampleSizes = TemplateAllSizes.bind({});
