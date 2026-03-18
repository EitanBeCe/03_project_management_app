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
      className="rounded-xl bg-stone-50 text-stone-800 backdrop:bg-slate-900/45"
    >
      {children}

      <form method="dialog">
        <button className="text-sm font-semibold text-teal-700 hover:text-teal-900">
          Close
        </button>
      </form>
    </dialog>,
    modalRoot
  )
})

Modal.displayName = 'Modal'

export default Modal
