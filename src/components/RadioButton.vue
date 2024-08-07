<template>
  <div class="radio-container flex">
    <div v-for="(opt, index) in options" :key="opt.label">
      <label
        class="cursor-pointer py-1 px-2 border border-gray-400"
        :class="{
          'border-r-0': index == options.lenght - 1,
          'bg-blue-400 text-white': modelValue === opt.value
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

<style scoped></style>
