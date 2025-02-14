import categories from "src/lib/categoryList"
import styles from "./CategoryBox.module.scss"
import { useRouter } from "next/router"
import { useState } from "react"
import Link from "next/link"

export default function CategoryBox() {
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  const router = useRouter()
  const { category } = router.query

  const handleMinChange = (e) => {
    const value = e.target.value
    setMinPrice(value)
  }

  const handleMaxChange = (e) => {
    const value = e.target.value
    setMaxPrice(value)
  }

  const handlePriceSubmit = () => {
    console.log(minPrice, maxPrice)
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_header}>
        <div className={styles.sidebar_header_title}>FILTERS</div>
        <Link href="/filter">
          <a className={styles.clearAll}>CLEAR ALL</a>
        </Link>
      </div>
      <div className={styles.categories}>CATEGORIES</div>
      <ul className={styles.category_list}>
        {categories.map((i) => {
          const blueStyle = category === i ? styles.fontBlueColor : null
          return (
            <Link
              key={i}
              href={{
                pathname: "/filter",
                query: { ...router.query, category: i },
              }}
            >
              <a>
                <li className={blueStyle}>{i}</li>
              </a>
            </Link>
          )
        })}
      </ul>
      <div className={styles.priceTitle}>Price range</div>
      <div className={styles.inputPriceContainer}>
        <input
          type="number"
          placeholder="Min price"
          onChange={handleMinChange}
        />
        <div>-</div>
        <input
          type="number"
          placeholder="Max price"
          onChange={handleMaxChange}
        />
      </div>
      <button className={styles.priceButton} onClick={handlePriceSubmit}>
        SET PRICE
      </button>
    </div>
  )
}
