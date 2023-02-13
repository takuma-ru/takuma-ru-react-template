import React from 'react'
import styled from 'styled-components'
import favicon from '~/public/favicon.ico'


interface PropsInterface {
}

const AppHeader: React.FC<PropsInterface> = (props) => {
  /*-- styled-component --*/
  const AppHeaderMain = styled.header`
    display: flex;
    align-items: center;
    justify-content: start;

    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 64px;
    padding: 1rem 2rem;

    .title-button {
      display: inline-flex;
      align-items: center;

      height: 100%;
      margin-right: 1rem;

      font-weight: bold;
      cursor: pointer;

      .img {
        position: relative;
        height: 100%;
        margin-right: 0.5rem;

        aspect-ratio: 1/1;
      }
    }

    .link-buttons {
      display: flex;

    }
  `

  /*-- variables --*/
  const router = useRouter()
  const path = router.pathname

  /*-- functions --*/

  /*-- life cycle --*/

  /*-- element --*/
  return <>
    <AppHeaderMain>
    <div
        className='title-button'
        onClick={() => { router.push('/') }}
      >
        <div className='img'>
          <NextImage
            src={favicon.src}
            alt='logo'
            width={32}
            height={32}
          />
        </div>
        サイト名
      </div>
      <div className='link-buttons'>
      {routerPathLists.map((link, index) => {
        return <Button
          key={index}
          icon={link.icon}
          to={link.link}
          color={link.link === path ? colors.white.darken[2] : 'transparent'}
        >
          { link.node }
        </Button>
      })}
      </div>
    </AppHeaderMain>
  </>
}

AppHeader.defaultProps = {
}

export { AppHeader }
