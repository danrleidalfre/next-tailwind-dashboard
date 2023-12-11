import { Logo } from '@/components/Sidebar/Logo'
import { Nav } from '@/components/Sidebar/Nav'
import { Footer } from '@/components/Sidebar/Footer'
import { Profile } from '@/components/Sidebar/Profile'
import * as Input from '@/components/Input'
import { Search } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>
      <Nav />
      <Footer />
      <div className="h-px bg-zinc-200" />
      <Profile />
    </aside>
  )
}
