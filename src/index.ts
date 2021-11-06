import Vue, { VNode } from 'vue'
import { SchemaElement } from '@@/types'

interface Props {
  tag?: string
  defaultSchema: SchemaElement
  schema: SchemaElement[]
  value: Record<string, unknown>
}

type VModel = Record<string, unknown>
type Emit = (model: VModel) => VModel

const getMergedOpts = (defaultSchema: SchemaElement, item: SchemaElement) => ({
  class: [ defaultSchema.class, item.class ],
  on: { ...defaultSchema.events, ...item.events },
  props: { ...defaultSchema.props, ...item.props },
})

export default Vue.extend<Props>({
  functional: true,
  render(h, { props, listeners }) {

    const genTree = (items: SchemaElement[]) => items.reduce((vNodeList: VNode[], item) => {
      // If no conditions or condition hook returns true
      if ((item.condition && item.condition(item)) || !item.condition) {
        const comp = item.component || 'v-text-field'
        const opts = getMergedOpts(props.defaultSchema, item)
        const children = item.children ? genTree(item.children) : null

        // Does the items has children?
        if (item.model) {
          opts.props.value = props.value[item.model]

          opts.on.input = (newValue: unknown) => {
            (listeners.input as Emit)({
              ...props.value,
              [item.model]: newValue,
            })
          }
        }

        vNodeList.push(h(comp, opts, children || item.content))
      }

      return vNodeList
    }, [])

    return h(props.tag || 'div', genTree(props.schema))
  },
})
