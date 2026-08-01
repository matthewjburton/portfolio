import DeviconRow from './DeviconRow'

const BackgroundIcons = () => {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-0 flex h-full flex-col justify-around select-none">
        <div className="overflow-hidden">
          <DeviconRow />
        </div>
        <div />
        <div className="overflow-hidden">
          <DeviconRow reverse />
        </div>
      </div>
    </>
  )
}

export default BackgroundIcons
