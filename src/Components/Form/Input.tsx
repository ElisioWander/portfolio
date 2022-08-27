import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

interface InputBaseProps {
  type: string
  label: string
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputBaseProps> = (
  { label, type, error, ...rest },
  ref,
) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={type}
        className="mb-5 py-2 px-4 text-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-purple-100 rounded-md placeholder:text-sm bg-zinc-800 "
        ref={ref}
        {...rest}
      />

      {!!error && (
        <span className="-mt-3 mb-5 ml-3 text-xs text-red-500">
          {error?.message}
        </span>
      )}
    </div>
  )
}

export const Input = forwardRef(InputBase)
