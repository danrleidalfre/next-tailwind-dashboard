import { Tabs } from '@/components/Main/Tabs'
import { PageTitle } from '@/components/Main/PageTitle'
import { Form } from '@/components/Main/Form'

export default function Main() {
  return (
    <main className="px-4 pb-12 pt-24 lg:px-8 lg:pb-12 lg:pt-8">
      <PageTitle title="Settings" />
      <Tabs />
      <Form />
    </main>
  )
}
