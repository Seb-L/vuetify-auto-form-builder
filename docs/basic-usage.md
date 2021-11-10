# Basic usage

For a live preview, see the [Example page](/examples.html).

<code-group>
  <code-block title="SCRIPT" active>
  ```typescript
  import VuetifyFormBuilder from "@chatmurai/vuetify-auto-form-builder";

  export default {
    components: {
      VuetifyFormBuilder,
    },
    data: () => ({
      formModel: {
        firstname: "",
      },
      defaultSchema: {
        props: {
          outlined: true,
          dense: true,
        },
      },
      schema: [
        {
          model: "firstname",
          props: {
            label: "Firstname",
          },
        },
      ],
    }),
  };
  ```
  </code-block>

  <code-block title="TEMPLATE">
  ```html
  <template>
    <v-form>
      <VuetifyFormBuilder
        v-model="formModel"
        :defaultSchema="defaultSchema"
        :schema="schema"
      />
    </v-form>
  </template>
  ```
  </code-block>
</code-group>
