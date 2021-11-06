export interface SchemaElement {
  component: string
  model: string
  class?: string
  events?: Record<string, (...args: unknown[]) => void>
  condition?: (item: SchemaElement) => boolean
  props: Record<string, unknown>
  children?: SchemaElement[]
  content?: string
}
