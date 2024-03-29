import type { AppPropsWithLayout } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import 'material-symbols'
import colors from '~/styles/colors'
import { Provider } from 'jotai'

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const GlobalStyle = createGlobalStyle`
    body {
      padding: 0;
      margin: 0;

      font-family: 'Noto Sans JP', sans-serif;
      color: ${colors.black.default};
      background-color: ${colors.white.darken[1]};
      overscroll-behavior-y: none;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }

    hr {
      border-color: ${colors.white.darken[1]};
    }
  `

  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <Provider>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
