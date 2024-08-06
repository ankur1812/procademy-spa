<template>
  <ejs-grid
    :dataSource="data"
    class="todo-testcss [&>.e-gridcontent>.e-content>table]:bg-blue-50"
  >
    <e-columns>
      <e-column
        field="id"
        headerText="ID"
        textAlign="Left"
        width="70"
      ></e-column>
      <e-column field="title" headerText="Title" width="160"></e-column>
      <e-column
        headerText="Achieved"
        textAlign="Left"
        format="C2"
        :template="'statusTemplate'"
        width="100"
      >
      </e-column>
      <e-column
        headerText="Action"
        textAlign="Left"
        format="C2"
        :template="'actionTemplate'"
        width="120"
      ></e-column>
    </e-columns>
    <template v-slot:statusTemplate="{ data }">
      <div class="flex items-center justify-start">
        <span
          class="inline p-1 px-2 rounded-3xl rounded-[50px] cursor-pointer"
          :class="{
            'bg-green-50 text-green-700': data.achieved,
            'bg-red-50 text-red-700': !data.achieved
          }"
        >
          {{ data.achieved ? "Achieved" : "Failed" }}
        </span>
      </div>
    </template>
    <template v-slot:actionTemplate="{ data }">
      <div class="p-1 px-2 flex items-center justify-start">
        <span class="cursor-pointer">
          <a :href="'/profile?id=' + data.id"> View</a>
        </span>
      </div>
    </template>
  </ejs-grid>
</template>

<script>
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective
} from "@syncfusion/ej2-vue-grids";
import { DataManager, ODataAdaptor } from "@syncfusion/ej2-data";

class SerialNoAdaptor extends ODataAdaptor {
  processResponse() {
    let original = super.processResponse.apply(this, arguments);
    return { result: original.result, count: original.count };
  }
}

export default {
  name: "Grid",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data() {
    let SERVICE_URI =
      "https://proc-front-dev-task.wiremockapi.cloud/training_profiles";
    return {
      data: new DataManager({
        url: SERVICE_URI,
        adaptor: new SerialNoAdaptor(),
        crossDomain: true
      })
    };
  }
};
</script>

<style scoped>
.table td {
  border: 4px solid crimson; /* For testing */
}
</style>
