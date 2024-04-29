'use client'

import styles from './commentmodal.module.css'

import { useRef } from "react"
import { Subheading } from "../Subheading"
import { Textarea } from "../Textarea"
import { SubmitButton } from "../SubmitButton"
import { IconButton } from "../IconButton"
import { Modal } from "../Modal"
import { Chat } from "../Icons/Chat"


export const ModalComment = ({ action }) => {
  const modalRef = useRef(null)
  return (
    <>
      <Modal ref={modalRef}>
        <form action={action} onSubmit={() => modalRef.current.closeModal()}>
          <Subheading>Deixe seu comentário sobre o post:</Subheading>
          <Textarea required rows={8} name="text" placeholder="Digite aqui..." />
          <div className={styles.footer}>
            <SubmitButton>
              Comentar
            </SubmitButton>
          </div>
        </form>
      </Modal>
      <IconButton onClick={() => modalRef.current.openModal()}>
        <Chat />
      </IconButton>
    </>
  )
}