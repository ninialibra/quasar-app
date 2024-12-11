<template>
  <q-page class="q-ma-md">
    <span class="text-h3">Forms</span>
    <q-separator spaced />

    <div class="row justify-center">
      <div class="col-8">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input
            filled
            v-model="userForm.name"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            no-error-icon=""
            :rules="[(val) => (val && val.length > 0) || 'Please type something']"
          />

          <q-input
            filled
            type="email"
            v-model="userForm.email"
            label="Your email *"
            lazy-rules
            no-error-icon=""
            :rules="[(val) => (val && val.length > 0) || 'Please type something']"
          />

          <div class="row justify-end">
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            <q-btn unelevated label="Submit" type="submit" color="primary" />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'FormPage',
  setup() {
    const userForm = ref({
      email: '',
      name: '',
    })

    return {
      userForm,
      onSubmit() {},
      onReset() {
        userForm.value = {
          email: '',
          name: '',
        }
      },
    }
  },
})
</script>
