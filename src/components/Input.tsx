import { ComponentProps } from 'react'

type PrefixProps = ComponentProps<'div'>

export function Prefix(props: PrefixProps) {
  return <div {...props} />
}

type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 focus:outline-0 dark:text-zinc-100 dark:placeholder-zinc-400"
      {...props}
    />
  )
}

export type RootProps = ComponentProps<'div'>

export function Root(props: RootProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded border border-zinc-300 px-3 py-2 shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
      {...props}
    />
  )
}
