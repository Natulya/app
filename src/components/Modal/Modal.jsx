import classNames from 'classnames'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

function ModalInner({ closeHandler, children }) {
  useEffect(() => {
    const closeModalByEscape = (e) => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    }
    document.addEventListener('keydown', closeModalByEscape)

    return () => {
      document.removeEventListener('keydown', closeModalByEscape)
    }
  }, [])

  const closeModalByClickX = () => closeHandler()

  return (
    <div className={styles.modalInner}>
      <button
        type="button"
        className={classNames(
          'btn',
          'mx-2',
          'btn-primary',
          'btn-sm',
          styles.closeBtn,
        )}
        onClick={closeModalByClickX}
      >
        x
      </button>
      {children}
    </div>
  )
}

export function Modal({ isOpen, closeHandler, children }) {
  console.log({ isOpen, closeHandler })

  if (!isOpen) return null

  const closeModalByClickWrapper = (e) => {
    if (e.target === e.currentTarget) {
      closeHandler()
    }
  }

  return createPortal(
    <div onMouseDown={closeModalByClickWrapper} className={styles.modalWr}>
      <ModalInner closeHandler={closeHandler}>
        { children }
      </ModalInner>
    </div>,
    document.getElementById('modal-root'),

  )
}
