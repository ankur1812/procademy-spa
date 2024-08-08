<template>
  <ejs-grid
    ref="grid"
    :dataSource="data"
    class="[&>.e-gridcontent>.e-content>table]:bg-blue-50 testcss"
    :allowFiltering="true"
    :filterSettings="filterOptions"
  >
    <e-columns>
      <e-column
        field="id"
        headerText="ID"
        textAlign="Left"
        :allowFiltering="false"
        width="69"
      ></e-column>
      <e-column
        field="title"
        :allowFiltering="false"
        headerText="Title"
        width="160"
      ></e-column>
      <e-column
        headerText="Achieved"
        field="achieved"
        textAlign="Left"
        format="C2"
        :template="'renderTemplate_achieved'"
        :allowFiltering="true"
        :filterTemplate="'filterTemplate_achieved'"
        width="100"
      >
      </e-column>
      <e-column
        headerText="Action"
        textAlign="Left"
        format="C2"
        :template="'renderTemplate_action'"
        :allowFiltering="false"
        :filterTemplate="'emptyTemplate'"
        width="120"
      ></e-column>
    </e-columns>
    <template v-slot:renderTemplate_achieved="{ data }">
      <div class="flex items-center justify-start">
        <span
          class="inline p-1 px-2 rounded-50 cursor-pointer"
          :class="{
            'bg-green-50 text-green-700': data.achieved,
            'bg-red-50 text-red-700': !data.achieved
          }"
        >
          {{ data.achieved ? "Achieved" : "Failed" }}
        </span>
      </div>
    </template>
    <template v-slot:renderTemplate_action="{ data }">
      <div class="p-1 px-2 flex items-center justify-start">
        <span class="cursor-pointer">
          <a :href="'/profile?id=' + data.id"> View</a>
        </span>
      </div>
    </template>
    <template v-slot:filterTemplate_achieved="{}">
      <RadioButton v-model="currentStatusFilter" :options="statusFilters" />
      <!-- <input
        type="text"
        :placeholder="'Filter ' + data.field"
        @input="filterGrid($event, data.field)"
      /> -->
    </template>
    <template v-slot:emptyTemplate="{}">
      <span></span>
    </template>
  </ejs-grid>
</template>

<script>
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Filter
} from "@syncfusion/ej2-vue-grids";
import { DataManager, ODataAdaptor } from "@syncfusion/ej2-data";
import RadioButton from "./RadioButton";

class SerialNoAdaptor extends ODataAdaptor {
  processResponse() {
    let original = super.processResponse.apply(this, arguments);
    // console.log("*** org", original);
    return { result: original.result, count: original.count };
  }
}

export default {
  name: "Grid",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    RadioButton
  },
  provide: {
    grid: [Filter]
  },

  data() {
    let SERVICE_URI =
      "https://proc-front-dev-task.wiremockapi.cloud/training_profiles";
    return {
      data: new DataManager({
        url: SERVICE_URI,
        adaptor: new SerialNoAdaptor(),
        crossDomain: true
      }),
      currentStatusFilter: "clear",
      statusFilters: [
        { name: "Yes", value: true },
        { name: "No", value: false },
        { name: "Clear", value: "clear" }
      ],
      columnFilters: []
    };
  },
  computed: {
    filterOptions() {
      return {
        type: "FilterBar",
        columns: [...this.columnFilters]
      };
    }
  },
  methods: {
    // radioUpdate(event, field) {
    //   let filterValue = event.target.value;
    //   this.$refs.grid.ej2Instances.filterByColumn(
    //     field,
    //     "contains",
    //     filterValue
    //   );
    // },

    filterGrid(field, operator, value) {
      this.columnFilters =
        value == "clear"
          ? []
          : [
              {
                field,
                operator,
                value
              }
            ];
      // this.$refs.grid.columnFilters.columns = this.columnFilters;
    }
  },
  watch: {
    currentStatusFilter: function() {
      // // filterByColumn() function didn't work as expected, so not using this approach
      // this.$refs.grid.ej2Instances.filterByColumn("achieved", "equal", this.currentStatusFilter);
      // this.$refs.grid.refresh();

      // Directly updating the filterOptions data using filterGrid() call
      this.filterGrid("achieved", "equal", this.currentStatusFilter);
    }
  }
};
</script>

<style scoped>
.table td {
  border: 4px solid crimson; /* For testing */
}
/* CSS for tailwind rounded-[50px] */
.rounded-50 {
  border-radius: 50px;
}
</style>
