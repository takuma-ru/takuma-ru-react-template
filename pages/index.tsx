import type { NextPageWithLayout } from 'next'
import Layout from '~/layouts/Layout'

const Index: NextPageWithLayout  = () => {
  /*-- styled-component --*/
  const IndexMain = styled.div`
  `

  /*-- variables --*/
  const [ count, setCount ] = useAtom(countAtom)

  /*-- functions --*/

  /*-- life cycle --*/

  /*-- element --*/
  return <>
    <IndexMain>
      <div>{count}</div>
      <Button onClick={() => setCount(c => c + 1)}>one up</Button>
    </IndexMain>
  </>
}

Index.getLayout = (page) => <Layout metaTitle='index'>{ page }</Layout>

export default Index
