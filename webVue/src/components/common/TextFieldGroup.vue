<template>
  <div class="form-group">
    <input
      class="form-control form-control-lg"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :class="{ 'is-invalid': error }"
      @input="$emit('input', $event.target.value)"
    />
    <div v-if="error" class="invalid-feedback">
      {{ error }}
    </div>
    <small v-if="info" className="form-text text-muted">{{ info }}</small>
  </div>
</template>

<script>
export default {
  name: "TextFieldGroup",
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: String,
    name: String,
    error: String,
    info: String,
    disabled: String
  }
};
</script>

<style scoped></style>
