import { ctc } from 'hytzen-helpers'

interface GradientLineProps {
  direction?: 'column' | 'row'
}

const GradientLine: React.FC<GradientLineProps> = ({
  direction = 'column',
}) => (
  <div
    className={ctc(
      direction === 'column' && 'w-36 h-[2px] rotate-180',
      direction === 'row' && 'h-[2px] w-36 rotate-180',
      'rounded-full my-10'
    )}
    style={{
      background:
        'linear-gradient(83.22deg, rgba(0, 0, 0, 0) 3.69%, rgb(168 85 247) 93%)',
    }}
  />
)

export default GradientLine
