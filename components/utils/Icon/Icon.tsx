import { IconNameType } from '~/types/icon/iconName'

export interface IIconProps {
  icon: IconNameType
  size?: string
  color?: string
  fill?: boolean
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700
  grade?: -25 | 0 | 200
  opticalSize?: 20 | 24 | 40 | 48
  style?: React.CSSProperties
}

const Icon: React.FC<IIconProps> = (props) => {
  /*-- styled-component --*/
  const Icon = styled.span`
    font-size: ${props.size};
    color: ${props.color};
    font-variation-settings: 'FILL' ${props.fill ? 1 : 0}, 'wght' ${props.weight}, 'GRAD' ${props.grade}, 'opsz' ${props.opticalSize};
    user-select: none;
  `

  /*-- variables --*/

  /*-- functions --*/

  /*-- life cycle --*/

  /*-- element --*/
  return <>
    <Icon
      className='material-symbols-rounded'
      style={props.style}
    >
      { props.icon }
    </Icon>
  </>
}

Icon.defaultProps = {
  color: colors.black.lighten[1],
  fill: false,
  weight: 500,
  grade: 0,
  opticalSize: 48
}

export { Icon }
