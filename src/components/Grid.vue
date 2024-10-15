<template>
  <ejs-grid
    ref="grid"
    :dataSource="data"
    class="overview-grid"
    :allowFiltering="true"
    :filterSettings="filterOptions"
  >
    <e-columns>
      <e-column
        field="id"
        headerText="ID"
        textAlign="Right"
        :allowFiltering="false"
        width="40"
      ></e-column>
      <e-column
        field="title"
        :allowFiltering="false"
        headerText="Title"
      ></e-column>
      <e-column
        headerText="Achieved"
        field="achieved"
        textAlign="Left"
        format="C2"
        :template="'renderTemplate_achieved'"
        :allowFiltering="true"
        :filterTemplate="'filterTemplate_achieved'"
      >
      </e-column>
      <e-column
        headerText="Action"
        textAlign="Left"
        format="C2"
        :template="'renderTemplate_action'"
        :allowFiltering="false"
        :filterTemplate="'emptyTemplate'"
        width="65"
      ></e-column>
    </e-columns>
    <template v-slot:renderTemplate_achieved="{ data }">
      <div class="flex items-center justify-start">
        <span
          class="inline p-1 px-2 rounded-[50px] cursor-pointer"
          :class="{
            'bg-emerald-50 text-emerald-700': data.achieved,
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
          <router-link :to="'profile?id=' + data.id">
            <i class="icons8-eye"></i
          ></router-link>
        </span>
      </div>
    </template>
    <template v-slot:filterTemplate_achieved="{}">
      <RadioButton
        class="my-5"
        v-model="currentStatusFilter"
        :options="statusFilters"
        :verticalView="true"
      />
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
      "https://proc-front-dev-task.wiremockapi.cloud/training_profiles22";
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

<style>
/* Adding CSS since injecting tailwind styling in the ej2 grids is failing */
.overview-grid .e-grid,
.overview-grid .e-headercelldiv,
.overview-grid .e-grid,
.overview-grid .e-detailheadercell {
  padding: 0 !important;
  margin: 0 !important;
}

.e-headertext {
  font-size: 14px;
}
.overview-grid .e-headertext {
  font-family: Avenir, Helvetica, Arial, sans-serif !important;
  color: #1e293b;
  font-weight: 700;
}
.overview-grid .e-headercell,
.overview-grid .e-rowcell {
  padding: 20px 10px !important;
}

.overview-grid .e-rowcell,
.e-emptyrow td {
  font-family: Avenir, Helvetica, Arial, sans-serif !important;
  color: #64748b !important; /* text-slate-500 */
  font-size: 14px;
}
</style>
