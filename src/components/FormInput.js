import React, { Children, cloneElement } from 'react'
import classNames from 'classnames'

export default ({ className, name, children }) => (
  <div className={classNames('flex my-4', className)} data-testid="form-input">
    {name && (
      <span className="w-24 mr-2 text-xl font-semibold text-gray-800 capitalize">
        {name}:
      </span>
    )}
    {Children.map(children, child =>
      cloneElement(child, {
        className: classNames(
          'w-64 px-2 py-0 text-xl leading-xl text-gray-600 outline-none focus:shadow-outline placeholder-gray-400 border border-gray-500 shadow rounded-lg text-gray-600',
          child.props.className,
        ),
      }),
    )}
  </div>
)
