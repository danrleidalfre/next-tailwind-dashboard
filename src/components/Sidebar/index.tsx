import { Logo } from '@/components/Sidebar/Logo'
import { Nav } from '@/components/Sidebar/Nav'
import { Search } from '@/components/Sidebar/Search'
import { Footer } from '@/components/Sidebar/Footer'
import { Profile } from '@/components/Sidebar/Profile'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <Search />
      <Nav />
      <Footer />
      <div className="h-px bg-zinc-200" />
      <Profile />
    </aside>
  )
}
