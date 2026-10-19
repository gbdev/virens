<!--
  Condensed table view of a list of entries, an alternative to the card
  grid of List.
-->
<script setup>
const props = defineProps({
  entries: Array,
  paginator: {
    type: Boolean,
    default: true,
  },
});

const PLATFORM_NAMES = {
  GB: "Game Boy",
  GBC: "Game Boy Color",
  GBA: "Game Boy Advance",
  NES: "NES",
};

// DataTable sorts missing values as the smallest, putting them first when
// sorting ascending. Many entries have no date, so keep those always last.
const sortOrder = ref(1);
function dateSortValue(row) {
  if (row.timestamp != null) return row.timestamp;
  return sortOrder.value === 1 ? Infinity : -Infinity;
}

// Precompute display and sort values, so every column sorts on plain fields
const rows = computed(() =>
  (props.entries || []).map((entry) => {
    const date = parseEntryDate(entry.date);
    return {
      ...entry,
      developerText: normalizeDevelopers(entry.developer)
        .map((dev) => dev.name)
        .join(", "),
      timestamp: date ? date.getTime() : null,
      dateText: formatEntryDate(entry.date, "short"),
    };
  }),
);
</script>

<template>
  <DataTable
    :value="rows"
    :paginator="paginator"
    :rows="50"
    :rowsPerPageOptions="[25, 50, 100]"
    sortMode="single"
    responsiveLayout="scroll"
    class="p-datatable-sm entry-table"
    :tableStyle="{ tableLayout: 'fixed', minWidth: '60rem' }"
    @sort="sortOrder = $event.sortOrder"
  >
    <Column
      field="title"
      header="Title"
      headerStyle="width: 26%"
      :sortable="true"
    >
      <template #body="{ data }">
        <router-link :to="'/game/' + data.slug" class="entry-title">{{
          data.title
        }}</router-link>
      </template>
    </Column>
    <Column
      field="developerText"
      header="Developer"
      headerStyle="width: 20%"
      :sortable="true"
    />
    <Column
      field="platform"
      header="Platform"
      headerStyle="width: 8%"
      :sortable="true"
    >
      <template #body="{ data }">
        <span :title="PLATFORM_NAMES[data.platform]">{{ data.platform }}</span>
      </template>
    </Column>
    <Column
      field="typetag"
      header="Type"
      headerStyle="width: 8%"
      :sortable="true"
    >
      <template #body="{ data }">
        <span class="typetag">{{ data.typetag }}</span>
      </template>
    </Column>
    <Column
      field="timestamp"
      :sortField="dateSortValue"
      header="Release date"
      headerStyle="width: 11%"
      :sortable="true"
    >
      <template #body="{ data }">{{ data.dateText }}</template>
    </Column>
    <Column header="Tags" headerStyle="width: 27%">
      <template #body="{ data }">
        <a
          v-for="tag in data.tags || []"
          :key="tag"
          :href="'/search?tags=' + tag"
          class="tag"
          >{{ tag }}</a
        >
      </template>
    </Column>
  </DataTable>
</template>

<style scoped>
/* Fixed column widths (see headerStyle) keep the layout stable when
   sorting or paging changes which rows are visible */
.entry-table :deep(th) {
  white-space: nowrap;
}
.entry-table :deep(td) {
  overflow-wrap: break-word;
}

.entry-title {
  font-weight: 600;
  color: var(--text-color);
}

.typetag {
  text-transform: capitalize;
}

.tag {
  display: inline-block;
  margin: 0.1rem 0.25rem 0.1rem 0;
  padding: 0.05rem 0.5rem;
  border-radius: 3px;
  font-size: 0.85rem;
  color: var(--text-color);
  background-color: var(--surface-d);
}
</style>
