import { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

export type ModalHandle = {
  open: () => void
}

type Props = {
  children: ReactNode
}

const Modal = forwardRef<ModalHandle, Props>(({ children }, ref) => {
  const dialog = useRef<HTMLDialogElement>(null)

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current?.showModal()
    }
  }))

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null

  return createPortal(
    <dialog
      ref={dialog}
      className="w-[min(92vw,30rem)] rounded-2xl border border-stone-200 bg-stone-50 p-0 text-stone-800 shadow-2xl backdrop:bg-slate-950/55 backdrop:backdrop-blur-sm"
    >
      <div className="h-2 bg-gradient-to-r from-teal-600 via-cyan-500 to-sky-500" />

      <div className="px-6 py-5">
        <div className="mb-5 flex items-start gap-4">
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-sm font-bold uppercase text-rose-700">
            !
          </div>

          <div className="min-w-0 flex-1">{children}</div>
        </div>

        <form
          method="dialog"
          className="flex justify-end border-t border-stone-200 pt-4"
        >
          <button className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
            Close
          </button>
        </form>
      </div>
    </dialog>,
    modalRoot
  )
})

Modal.displayName = 'Modal'

export default Modal
