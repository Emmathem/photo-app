<template>
  <div
    class="flex flex-col items-center text-center justify-center my-16"
  >
    <p class="text-lg font-bold text-gray-900 mb-4">
      {{ emptyText }}
    </p>

    <p class="text-gray-800 md:w-1/2">
      {{ additionalDescription }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'EmptyData',
  props: {
    emptyText: {
      type: String,
      default: 'No Record Found ',
    },
    additionalDescription: {
      type: String,
      default: 'Your saved record will appear here, start creating record',
    },
  },
  methods: {},
};
</script>

<style scoped></style>
