import Link from 'next/link'
import styles from './SearchBar.module.css'

export default function SearchBar() {
  return (
    <div className={styles.wrapper}>
      <Link href="/search">
        <a className={styles.search}>输入搜索内容</a>
      </Link>
      <Link href="/user">
        <a className={styles.user} />
      </Link>
    </div>
  )
}
