import BccTable from "./BccTable.vue";
import BccButton from "@/components/BccButton/BccButton.vue";
import BccBadge from "@/components/BccBadge/BccBadge.vue";
import { ChevronRightIcon } from "@bcc-code/icons-vue";

import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/BccTable",
  component: BccTable,
  argTypes: {},
} as Meta<typeof BccTable>;

const Template: StoryFn<typeof BccTable> = (args) => ({
  components: { BccTable, BccButton, BccBadge },
  setup() {
    return { args, ChevronRightIcon };
  },
  template: `
    <BccTable :headers="args.headers" :items="args.items">
      <template #item.status="{ item }">
        <BccBadge :context="item.status.context">{{ item.status.text }}</BccBadge>
      </template>
      <template #item.actions="{ item }">
        <BccButton variant="tertiary" size="sm" :padding="false" :icon="ChevronRightIcon" iconRight>Evaluation</BccButton>
      </template>
    </BccTable>
  `,
});

export const Example = Template.bind({});
Example.args = {
  headers: [
    {
      text: "Year group",
      value: "year_group",
    },
    {
      text: "Name",
      value: "name",
    },
    {
      text: "Status",
      value: "status",
    },
    {
      text: "Progress",
      value: "progress",
    },
    {
      text: "Actions",
      value: "actions",
      sortable: false,
    },
  ],
  items: [
    {
      id: 1,
      year_group: "23/24",
      name: "Ola Nordmann",
      status: { text: "Behind Schedule", context: "warning" },
      progress: "2/25",
    },
    {
      id: 2,
      year_group: "23/24",
      name: "Firmus Piett",
      status: { text: "On Track", context: "success" },
      progress: "15/25",
    },
  ],
};
Example.parameters = {
  docs: {
    source: {
      language: "html",
      code: `
<BccTable :headers="headers" :items="items">
  <template #item.status="{ item }">
    <BccBadge :context="item.status.context">{{ item.status.text }}</BccBadge>
  </template>
  <template #item.actions="{ item }">
    <BccButton variant="tertiary" size="sm" :padding="false" :icon="ChevronRightIcon" iconRight @click="editItem(item.id")>Evaluation</BccButton>
  </template>
</BccTable>
    `,
    },
  },
};
