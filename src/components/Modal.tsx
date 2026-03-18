import { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

type ModalHandle = {
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

  return createPortal(<dialog ref={dialog}>{children}</dialog>, modalRoot)
})

Modal.displayName = 'Modal'

export default Modal
