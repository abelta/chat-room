import React, { forwardRef } from 'react'
import classNames from 'classnames'

export default forwardRef(({ children, className, ...props }, ref) => (
  <button
    {...props}
    className={classNames(
      'px-4 py-1 bg-teal-400 leading-1 my-4 border border-gray-600 border-solid shadow-xl outline-none font-bold text-gray-200 hover:bg-orange-700 focus:shadow-outline rounded-xl',
      className,
    )}
    ref={ref}
  >
    {children}
  </button>
))
