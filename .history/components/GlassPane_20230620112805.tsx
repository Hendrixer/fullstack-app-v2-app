import clsx from "clsx"
import { ReactNode } from "react";

const GlassPane = ({ className, children }: {className: string; children: ReactNode}) => {
  return <div className={clsx('glass rounded-2xl border-solid border-2 border-gray-200', className)}>
    {children}
  </div>
}

export default GlassPane

