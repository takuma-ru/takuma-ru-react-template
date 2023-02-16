import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react'
import { ComponentPropsWithoutRef } from 'react'

type T = typeof Dialog
type Meta = ComponentMeta<T>
type Story = ComponentStoryObj<T>

// PropsInterfaceに追記した場合は、この変数にStoryBookで表示する際の初期値を設定しておく
const args: ComponentPropsWithoutRef<T> = {
  model: true
}

export default {
  title: 'components/utils/Dialog',
  component: Dialog,
  args,
} as Meta

export const DialogDefaultStory: Story = {}
