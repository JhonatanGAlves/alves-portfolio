type ChartProps = {
  technology: string
  className: string
  style: {
    width: string
  }
}

export const Chart = ({ technology, className, style }: ChartProps) => {
  return (
    <div className="chart">
      <span>{technology}</span>
      <footer>
        <div className={className} style={style}></div>
      </footer>
    </div>
  )
}