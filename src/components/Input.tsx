import { forwardRef } from 'react'
import type { Ref } from 'react'

type Props = {
  label: string
  isTextarea?: boolean
}

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  ({ label, isTextarea, ...props }, ref) => {
    const classes =
      'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 outline-none focus:border-stone-600'

    return (
      <p className="flex flex-col gap-1 my-4 w-full">
        <label className="text-sm font-bold uppercase text-stone-500">
          {label}
        </label>

        {isTextarea ? (
          <textarea
            ref={ref as Ref<HTMLTextAreaElement>}
            className={classes}
            {...props}
          />
        ) : (
          <input
            ref={ref as Ref<HTMLInputElement>}
            className={classes}
            {...props}
          />
        )}
      </p>
    )
  }
)

export default Input
