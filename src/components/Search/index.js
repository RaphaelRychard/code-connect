import search from './search.png';
import style from './search.module.css';
import Image from 'next/image';

export default function Search({ childen }) {
  return (
    <>
      <div className={style.container_search}>
        <div className={style.search}>
          <label htmlFor='search' className={style.searchIcon}>
            <Image src={search}
              width={'32px'}
              height={'32px'}
              title='Pesquisar'
            />
          </label>
          <input
            id='search'
            className={style.input}
            type="search"
            placeholder='Digite o que você procura
            '/>
        </div>
        <button className={style.button}>Buscar</button>
      </div>
      {childen}
    </>
  )
}