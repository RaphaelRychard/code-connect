'use client'

import { useRef } from "react"
import { IconButton } from "../IconButton"
import { Chat } from "../Icons/Chat"
import Modal from "../Modal"

export const ModalComment = () => {
  const modalRef = useRef(null)
  return (
    <>
      <Modal ref={modalRef}>
          <h1> Olá Mundo</h1>
      </Modal>
      <IconButton
        onClick={() => modalRef.current.openModal()}
      >
        <Chat />
      </IconButton>
    </>
  )
}