import { c } from '@utils/tailwind-utils'
import React from 'react'

export interface DivideProps {
  id?: string
  as?: React.FC<any>
  className?: string
  dividerClassName?: string
  skipIndexes?: number[]
  children?: React.ReactNode
}

const DivideY: React.FC<DivideProps> = ({
  as,
  children,
  className,
  dividerClassName,
  skipIndexes = [],
}) => {
  const kids = React.useMemo(
    () =>
      (Array.isArray(children) ? children : [children]).filter(Boolean).flat(),
    [children]
  )

  const Wrapper = React.useMemo(
    () =>
      as
        ? as
        : ({ children }: any) => <div className={className}>{children}</div>,
    [as, className]
  )

  return (
    <Wrapper>
      {kids.map((node, index) => (
        <React.Fragment key={index}>
          {index > 0 && !skipIndexes.includes(index) && (
            <hr className={c('my-10 border-none', dividerClassName)} />
          )}
          {skipIndexes.includes(index) && <div className="mb-4" />}
          {node}
        </React.Fragment>
      ))}
    </Wrapper>
  )
}

export default DivideY
