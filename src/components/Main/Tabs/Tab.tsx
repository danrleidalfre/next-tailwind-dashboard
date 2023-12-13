'use client'
import * as TabsRadix from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface TabProps {
  value: string
  title: string
  isSelected: boolean
}

export function Tab({ value, title, isSelected = false }: TabProps) {
  return (
    <TabsRadix.Trigger
      value={value}
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700 dark:text-zinc-400 dark:hover:text-violet-300 dark:data-[state=active]:text-violet-300"
    >
      <span>{title}</span>
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 dark:bg-violet-300"
        />
      )}
    </TabsRadix.Trigger>
  )
}
