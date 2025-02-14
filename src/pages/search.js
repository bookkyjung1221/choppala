import styles from "src/styles/pages/search.module.scss"
import Card from "src/components/Card"
import categories from "src/lib/categoryList"
import { useRouter } from "next/router"

export default function Search() {
  const router = useRouter()
  const { keyword } = router.query

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>Search result for {keyword}</div>
        <div className={styles.header_sort}>
          <div>sort by:</div>
          <div>some dropdown</div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.sidebar}>
          <div className={styles.sidebar_header}>
            <div className={styles.sidebar_header_title}>Filter</div>
            <div>Clear all</div>
          </div>
          <div className={styles.categories}>Categories</div>
          <ul className={styles.category_list}>
            {categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
          <div>
            <div>Price range</div>
          </div>
        </div>
        <div className={styles.card_container}>
          <Card
            title="progressive web apppppp"
            price={555}
            image="/molang2.jpg"
          />
          <Card
            title="progressive web apppppp"
            price={555}
            image="/molang2.jpg"
          />
          <Card
            title="progressive web apppppp"
            price={555}
            image="/molang2.jpg"
          />
          <Card
            title="progressive web apppppp"
            price={555}
            image="/molang2.jpg"
          />
          <Card
            title="progressive web apppppp"
            price={555}
            image="/molang2.jpg"
          />
          <Card
            title="progressive web apppppp"
            price={555}
            image="/molang2.jpg"
          />
        </div>
      </div>
    </div>
  )
}
