# Conditional

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
          dogsCats: "",
        },
        defaultSchema: {
          props: {
            outlined: true,
            dense: true,
          },
        },
        schema: [
          {
            component: "v-select",
            model: "dogsCats",
            props: {
              label: "Dogs or cats?",
              items: [
                { value: "cats", text: "Cats" },
                { value: "dogs", text: "Dogs" },
              ],
            },
          },
          {
            component: "div",
            content: "😺 So you like cats?!",
            condition: () => this.formModel.dogsCats === "cats",
          },
          {
            component: "div",
            content: "🐶 So you like dogs?!",
            condition: () => this.formModel.dogsCats === "dogs",
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
