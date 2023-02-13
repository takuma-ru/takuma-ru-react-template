---
to: components/<%= atomic %>/<%= h.changeCase.pascal(componentName) %>/<%= h.changeCase.pascal(componentName) %>.stories.tsx
---

import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react'
import { ComponentPropsWithoutRef } from 'react'

type T = typeof <%= h.changeCase.pascal(componentName) %>
type Meta = ComponentMeta<T>
type Story = ComponentStoryObj<T>

// PropsInterfaceに追記した場合は、この変数にStoryBookで表示する際の初期値を設定しておく
const args: ComponentPropsWithoutRef<T> = {
}

export default {
  title: 'components/<%= atomic %>/<%= h.changeCase.pascal(componentName) %>',
  component: <%= h.changeCase.pascal(componentName) %>,
  args,
} as Meta

export const <%= h.changeCase.pascal(componentName) %>DefaultStory: Story = {}
