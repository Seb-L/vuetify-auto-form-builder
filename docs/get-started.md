# Getting started

## Install

<code-group>
  <code-block title="YARN" active>
  ```bash
  yarn add @chatmurai/vuetify-auto-form-builder
  ```
  </code-block>

  <code-block title="NPM">
  ```bash
  npm install @chatmurai/vuetify-auto-form-builder
  ```
  </code-block>
</code-group>

::: warning
- You must have vuetify installed and setup.
- This library is only able to use components that have been installed globally or locally in the parent component.
:::

## Setup

<code-group>
  <code-block title="GLOBAL" active>
  ```typescript
  import Vue from 'vue'

  Vue.component('VuetifyFormBuilder', VuetifyFormBuilder)
  ```
  </code-block>

  <code-block title="LOCAL">
  ```typescript
  import Vue from 'vue'
  import VuetifyFormBuilder from '@chatmurai/vuetify-auto-form-builder'

  export default Vue.extend({
    components: {
      VuetifyFormBuilder
    },
    ...
  })
  ```
  </code-block>
</code-group>
