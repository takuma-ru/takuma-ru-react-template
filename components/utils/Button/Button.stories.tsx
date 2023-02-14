import { ComponentPropsWithoutRef } from 'react'
import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react'

type T = typeof Button
type Meta = ComponentMeta<T>
type Story = ComponentStoryObj<T>

// PropsInterfaceに追記した場合は、この変数にStoryBookで表示する際の初期値を設定しておく
const args: ComponentPropsWithoutRef<T> = {
  color: colors.blue.default,
  icon: 'add',
  children: 'children',
  onClick: () => {console.log('click')},
}

export default {
  title: 'components/utils/Button',
  component: Button,
  args,
} as Meta

export const ButtonDefaultStory: Story = {}
