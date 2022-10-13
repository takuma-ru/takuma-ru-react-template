import colors from '~/styles/colors'
import { Icon } from './Icon'

Icon.defaultProps = {
  color: colors.black.lighten[1],
  fill: false,
  weight: 500,
  grade: 0,
  opticalSize: 48
}

export { Icon }
