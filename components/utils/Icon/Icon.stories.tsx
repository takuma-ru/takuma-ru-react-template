import { ComponentPropsWithoutRef } from 'react'
import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react'

type T = typeof Icon
type Meta = ComponentMeta<T>
type Story = ComponentStoryObj<T>

// PropsInterfaceに追記した場合は、この変数にStoryBookで表示する際の初期値を設定しておく
const args: ComponentPropsWithoutRef<T> = {
  icon: 'face',
  fill: false,
  weight: 500,
  grade: 0,
  opticalSize: 48
}

export default {
  title: 'components/utils/Icon',
  component: Icon,
  args,
} as Meta

export const IconDefaultStory: Story = {}
