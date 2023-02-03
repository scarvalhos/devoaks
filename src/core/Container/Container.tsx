import { c } from '@utils/tailwind-utils'

const Container: React.FC<{
  children: React.ReactNode
  className?: string
  id?: string
}> = ({ children, className, id }) => (
  <div id={id} className={c('max-w-screen-lg mx-auto px-8', className)}>
    {children}
  </div>
)

export default Container
