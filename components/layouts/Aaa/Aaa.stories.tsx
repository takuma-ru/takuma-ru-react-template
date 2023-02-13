import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react'
import { ComponentPropsWithoutRef } from 'react'
import { Aaa } from './Aaa'

type T = typeof Aaa
type Meta = ComponentMeta<T>
type Story = ComponentStoryObj<T>

// PropsInterfaceに追記した場合は、この変数にStoryBookで表示する際の初期値を設定しておく
const args: ComponentPropsWithoutRef<T> = {
}

export default {
  title: 'components/layouts/Aaa',
  component: Aaa,
  args,
} as Meta

export const AaaDefaultStory: Story = {}
