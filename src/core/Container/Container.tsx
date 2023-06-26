import { ctc } from 'hytzen-helpers'

const Container: React.FC<{
  children: React.ReactNode
  className?: string
  id?: string
}> = ({ children, className, id }) => (
  <div id={id} className={ctc('max-w-screen-xl mx-auto px-8', className)}>
    {children}
  </div>
)

export default Container
