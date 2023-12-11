import { NavItem } from '@/components/Sidebar/NavItem'
import { Cog, LifeBuoy } from 'lucide-react'
import { UsedSpace } from '../UsedSpace'

export function Footer() {
  return (
    <footer className="mt-auto">
      <NavItem title="Support" icon={LifeBuoy} />
      <NavItem title="Settings" icon={Cog} />
      <UsedSpace />
    </footer>
  )
}
