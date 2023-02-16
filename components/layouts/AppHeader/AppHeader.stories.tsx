import { ComponentPropsWithoutRef } from 'react'
import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react'

type T = typeof AppHeader
type Meta = ComponentMeta<T>
type Story = ComponentStoryObj<T>

// PropsInterfaceに追記した場合は、この変数にStoryBookで表示する際の初期値を設定しておく
const args: ComponentPropsWithoutRef<T> = {
}

export default {
  title: 'components/layouts/AppHeader',
  component: AppHeader,
  args,
} as Meta

export const AppHeaderDefaultStory: Story = {}
