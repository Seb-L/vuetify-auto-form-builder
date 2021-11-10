# Nested components

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
          address: "",
          addressComplement: "",
          zipcode: "",
          city: "",
        },
        defaultSchema: {
          props: {
            outlined: true,
            dense: true,
          },
        },
        schema: [
          {
            model: "address",
            props: {
              label: "Address",
            },
          },
          {
            model: "addressComplement",
            props: {
              label: "Address Complement",
            },
          },
          {
            component: "v-row",
            children: [
              {
                component: "v-col",
                props: {
                  cols: 6,
                },
                children: [
                  {
                    model: "zipcode",
                    props: {
                      label: "Zip code",
                    },
                  },
                ],
              },
              {
                component: "v-col",
                props: {
                  cols: 6,
                },
                children: [
                  {
                    model: "city",
                    props: {
                      label: "City",
                    },
                  },
                ],
              },
            ],
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
