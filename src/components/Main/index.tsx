import { Tabs } from '@/components/Main/Tabs'
import { PageTitle } from '@/components/Main/PageTitle'

export default function Main() {
  return (
    <main className="px-4 pb-12 pt-8">
      <PageTitle title="Settings" />
      <Tabs />
    </main>
  )
}
