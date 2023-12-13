'use client'

import { Check, ChevronDown } from 'lucide-react'
import * as SelectPrimitive from '@radix-ui/react-select'

export function Select() {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-b-zinc-300 px-3 py-2 shadow-sm focus:outline-none data-[placeholder]:text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400">
        <SelectPrimitive.Value
          className="text-black"
          placeholder="Select role..."
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-800"
        >
          <SelectPrimitive.Viewport>
            <SelectPrimitive.Item
              value="developer"
              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none hover:cursor-pointer data-[highlighted]:bg-zinc-50 dark:data-[highlighted]:bg-zinc-700"
            >
              <SelectPrimitive.ItemText asChild>
                <span className="text-black dark:text-zinc-100">Developer</span>
              </SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator className="text-black">
                <Check className="h-4 w-4 text-violet-500 dark:text-violet-300" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
            <SelectPrimitive.Item
              value="designer"
              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none hover:cursor-pointer data-[highlighted]:bg-zinc-50 dark:data-[highlighted]:bg-zinc-700"
            >
              <SelectPrimitive.ItemText asChild>
                <span className="text-black dark:text-zinc-100">Designer</span>
              </SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator className="text-black">
                <Check className="h-4 w-4 text-violet-500 dark:text-violet-300" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
