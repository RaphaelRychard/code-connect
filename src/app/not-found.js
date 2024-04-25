import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ width: '995px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Image src='/500.png' width={656} height={367} />
      </div>
      <section style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ color: '#81FE88' }} >Opa! Um erro ocorreu.</h2>
        <p style={{ color: '##BCBCBC' }}>Não conseguimos carregar a página, volte para seguir navegando. </p>
        <Link style={{ color: '#81FE88' }} href={'#'}>Voltar ao feed <ArrowBack color='#BCBCBC' /></Link>
      </section>
    </div>
  )
}

export const ArrowBack = ({ color = '#132E35' }) => {
  return <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5117 5.76172V7.23828H3.37109L7.55469 11.457L6.5 12.5117L0.488281 6.5L6.5 0.488281L7.55469 1.54297L3.37109 5.76172H12.5117Z" fill={color} />
  </svg>
}
