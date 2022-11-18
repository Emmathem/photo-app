<template>
  <div>
    <button
      :type="type"
      :name="name"
      class="btn cursor-pointer flex items-center justify-center outline-none focus:outline-none text-white h-12 rounded-md transition px-12 mr-4 bg-[#3A966C] text-white"
      :class="[
      styles,
      {
        disabled: disabled || processing,
        'clickable-2': !(disabled || processing),
        'border border-gray-400 bg-white border-v-neutral':
          variant === 'neutral',
        'bg-blue t-text-white': variant === 'primary',
        'bg-red-600 text-white': variant === 'danger',
      },
    ]"
      :disabled="disabled || processing"
      v-bind="$attrs"
      @click="handleClick"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    styles: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'submit'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    processing: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (event) {
      if (!(this.disabled || this.processing)) {
        this.$emit('click', event)
      }
    }
  }
}
</script>

<style></style>
