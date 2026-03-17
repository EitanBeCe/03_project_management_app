import { ChangeEvent } from 'react'

type Props = {
  label: string
  isTextarea?: boolean
  onChange: (e: ChangeEvent) => void // ChangeEvent<HTMLInputElement>
}

const Input = ({ label, isTextarea, onChange, ...props }: Props) => {
  const classes =
    'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 outline-none focus:border-stone-600'

  return (
    <p className="flex flex-col gap-1 my-4 w-full">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>

      {isTextarea ? (
        <textarea className={classes} onChange={e => onChange(e)} {...props} />
      ) : (
        <input className={classes} onChange={e => onChange(e)} {...props} />
      )}
    </p>
  )
}

export default Input
