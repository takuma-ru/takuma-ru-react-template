---
to: components/<%= atomic %>/<%= h.changeCase.pascal(componentName) %>/<%= h.changeCase.pascal(componentName) %>.tsx
---

interface I<%= h.changeCase.pascal(componentName) %>Props {
}

const <%= h.changeCase.pascal(componentName) %>: React.FC<I<%= h.changeCase.pascal(componentName) %>Props> = (props) => {
  /*-- styled-component --*/
  <% if (isUseMotion) { -%>
const <%= h.changeCase.pascal(componentName) %>Main = styled(motion.div)`
  <% } else { -%>
const <%= h.changeCase.pascal(componentName) %>Main = styled.div`
  <% } -%>
`

  /*-- variables --*/

  /*-- functions --*/

  /*-- life cycle --*/

  /*-- element --*/
  return <>
    <<%= h.changeCase.pascal(componentName) %>Main>
      text
    </<%= h.changeCase.pascal(componentName) %>Main>
  </>
}

<%= h.changeCase.pascal(componentName) %>.defaultProps = {
}

export { <%= h.changeCase.pascal(componentName) %> }
