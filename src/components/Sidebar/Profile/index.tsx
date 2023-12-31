import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        className="h-10 w-10 rounded-full"
        src="https://github.com/danrleidalfre.png"
        alt="Profile Logo Danrlei Dal Fré"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Danrlei
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          danrleidalfre@gmail.com
        </span>
      </div>
      <button
        type="button"
        className="ml-auto rounded-md p-2 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
