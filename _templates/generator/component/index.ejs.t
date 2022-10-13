---
to: <%= atomic %>/<%= h.changeCase.pascal(componentName) %>/index.ts
---
import { <%= h.changeCase.pascal(componentName) %> } from './<%= h.changeCase.pascal(componentName) %>'

<%= h.changeCase.pascal(componentName) %>.defaultProps = {
}

export { <%= h.changeCase.pascal(componentName) %> }
