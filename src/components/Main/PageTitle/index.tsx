export interface TitleProps {
  title: string
}

export function PageTitle({ title }: TitleProps) {
  return (
    <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
      {title}
    </h1>
  )
}
