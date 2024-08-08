<template>
  <div
    class="radio-container flex"
    :class="{
      'flex-col md:flex-row gap-1/2 md:gap-0': verticalView
    }"
  >
    <!-- verticalView:  The flex direction is switched to flex-col for mobile screens -->
    <div v-for="(opt, index) in options" :key="opt.label">
      <label
        class="cursor-pointer text-sm py-1 px-4 font-normal flex items-center w-16 md:w-auto"
        :class="{
          'bg-blue-50 text-blue-600': modelValue === opt.value,
          'bg-slate-50 text-slate-800': modelValue !== opt.value,
          'rounded-[50px_0px_0px_50px]': index == 0 && !verticalView,
          'rounded-[12px_12px_0px_0px] md:rounded-[50px_0px_0px_50px]':
            index == 0 && verticalView,
          'rounded-[0px_50px_50px_0px]':
            index == options.length - 1 && !verticalView,
          'rounded-[0px_0px_12px_12px] md:rounded-[0px_50px_50px_0px]':
            index == options.length - 1 && verticalView
        }"
      >
        <input
          type="radio"
          class="hidden"
          :value="opt.value"
          :checked="modelValue === opt.value"
          @change="updateValue(opt.value)"
        />
        {{ opt.name }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    modelValue: {
      type: String,
      default: "list"
    },
    options: {
      type: Array,
      default: () => []
    },
    verticalView: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  methods: {
    updateValue(value) {
      this.$emit("update:modelValue", value);
    }
  }
};
</script>
