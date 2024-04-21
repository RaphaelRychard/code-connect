import style from './avatar.module.css'

import Image from "next/image"

export const Avatar = ({ name, imageSrc }) => {
  return (
    <ul className={style.avatar}>
      <li>
        <Image
          src={imageSrc}
          width={32}
          height={32}
          alt={name}
          title={name}
        />
      </li>
      <li>
        @{name}
      </li>
    </ul>
  )
}