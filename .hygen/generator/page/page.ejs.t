---
to: pages/<%= h.changeCase.camel(pageName) %>.tsx
---

import type { NextPageWithLayout } from 'next'

const <%= h.changeCase.pascal(pageName) %>: NextPageWithLayout  = () => {
  /*-- styled-component --*/
<% if (isUseMotion) { -%>
  const <%= h.changeCase.pascal(pageName) %>Main = styled(motion.div)`
<% } else { -%>
  const <%= h.changeCase.pascal(pageName) %>Main = styled.div`
<% } -%>
`

  /*-- variables --*/

  /*-- functions --*/

  /*-- life cycle --*/

  /*-- element --*/
  return <>
    <<%= h.changeCase.pascal(pageName) %>Main>
      text
    </<%= h.changeCase.pascal(pageName) %>Main>
  </>
}

<%= h.changeCase.pascal(pageName) %>.getLayout = (page) => <Layout metaTitle='<%= metaTitle %>'>{ page }</Layout>

export default <%= h.changeCase.pascal(pageName) %>
