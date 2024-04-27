'use client'

import { useFormStatus } from 'react-dom'
import { Spinner } from '../Spinner'
import { ArrowFoward } from '../Icons/ArrowFoward'
import Button from '../Button'

export default function SubmitButton({ children }) {
  const { pending } = useFormStatus()

  return (
    <Button>
      {pending ? <Spinner /> : <> {children} <ArrowFoward /> </>}
    </Button>
  )
}