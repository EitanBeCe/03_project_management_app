import { forwardRef } from 'react'
import type { HTMLInputTypeAttribute, Ref } from 'react'

type Props = {
  label: string
  isTextarea?: boolean
  type?: HTMLInputTypeAttribute
}

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  ({ label, isTextarea, type }, ref) => {
    const classes =
      'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-100 text-base text-slate-800 outline-none focus:border-teal-700'

    return (
      <p className="flex flex-col gap-1 my-4 w-full">
        <label className="text-sm font-bold uppercase tracking-wide text-slate-500">
          {label}
        </label>

        {isTextarea ? (
          <textarea ref={ref as Ref<HTMLTextAreaElement>} className={classes} />
        ) : (
          <input
            ref={ref as Ref<HTMLInputElement>}
            className={classes}
            type={type}
          />
        )}
      </p>
    )
  }
)

export default Input
