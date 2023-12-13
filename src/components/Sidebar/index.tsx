'use client'

import { Logo } from '@/components/Sidebar/Logo'
import { Nav } from '@/components/Sidebar/Nav'
import { Footer } from '@/components/Sidebar/Footer'
import { Profile } from '@/components/Sidebar/Profile'
import * as Input from '@/components/Input'
import { Menu, Search } from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 data-[state=open]:h-screen dark:border-zinc-800 dark:bg-zinc-900 lg:relative lg:right-auto lg:w-80 lg:border-r lg:py-8 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Menu className="h-6 w-6 text-zinc-500" />
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>
        <Nav />
        <Footer />
        <div className="h-px bg-zinc-200 dark:bg-zinc-700" />
        <Profile />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
