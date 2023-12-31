'use client'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { Tab } from '@/components/Main/Tabs/Tab'
import { useState } from 'react'

export function Tabs() {
  const [currentTab, setCurrentTab] = useState('settings')
  return (
    <TabsPrimitive.Root value={currentTab} onValueChange={setCurrentTab}>
      <TabsPrimitive.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
        <Tab
          value="settings"
          title="Settings"
          isSelected={currentTab === 'settings'}
        />
        <Tab value="team" title="Team" isSelected={currentTab === 'team'} />
      </TabsPrimitive.List>
    </TabsPrimitive.Root>
  )
}
