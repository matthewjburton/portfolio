interface TooltipProps {
  tooltip: string
  children: React.ReactNode
}

const Tooltip = ({ tooltip, children }: TooltipProps) => {
  return (
    <div className="group relative">
      {children}
      <span className="bg-background text-text dark:bg-dark-background dark:text-dark-text absolute -top-10 left-1/2 -translate-x-1/2 rounded px-2 py-1 text-xs whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100">
        {tooltip}
      </span>
    </div>
  )
}

export default Tooltip
