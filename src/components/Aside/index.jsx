import Image from 'next/image';
import style from '@/components/Aside/aside.module.css';

import logo from './logo.png'

export const Aside = () => {
  return (
    <aside className={style.aside}>
      <Image
        src={logo}
        alt="Logo da Code Connect"
        width={128}
        height={40}
        title='Code Connect'
      />
    </aside>
  )
}