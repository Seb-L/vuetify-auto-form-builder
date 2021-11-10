# Events

For a live preview, see the [Example page](/examples.html).

<code-group>
  <code-block title="SCRIPT" active>
  ```typescript
  import VuetifyFormBuilder from "@chatmurai/vuetify-auto-form-builder";

  export default {
    components: {
      VuetifyFormBuilder,
    },
    data() {
      return {
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
          {
            component: "v-btn",
            content: "Click me!",
            props: {
              color: "success",
              depressed: true,
            },
            events: {
              click: () => {
                alert(JSON.stringify(this.formModel, null, 2));
              },
            },
          },
        ],
      };
    },
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
