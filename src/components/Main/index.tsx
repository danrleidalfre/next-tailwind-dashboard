import { Tabs } from '@/components/Main/Tabs'
import { PageTitle } from '@/components/Main/PageTitle'
import { Form } from '@/components/Main/Form'

export default function Main() {
  return (
    <main className="px-8 pb-12 pt-8">
      <PageTitle title="Settings" />
      <Tabs />
      <Form />
    </main>
  )
}
