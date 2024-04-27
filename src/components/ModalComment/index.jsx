'use client'

import { useRef } from "react"
import { IconButton } from "../IconButton"
import { Chat } from "../Icons/Chat"
import Modal from "../Modal"
import styles from './modalComment.module.css'
import SubmitButton from "../SubmitButton"

export const ModalComment = ({ action }) => {
  const modalRef = useRef(null)

  return (
    <>
      <Modal ref={modalRef}>
        <form action={action} onSubmit={() => modalRef.current.closeModal()}>
          <textarea name="text" rows="8" className={styles.textarea}></textarea>
          <div className={styles.container}>
            <SubmitButton>
              Comment
            </SubmitButton>
          </div>
        </form >
      </Modal>
      <IconButton onClick={() => modalRef.current.openModal()}>
        <Chat />
      </IconButton>
    </>
  )
}