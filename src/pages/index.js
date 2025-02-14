import Image from "next/image"
import Link from "next/link"
import Card from "src/components/Card"
import categories from "src/lib/categoryList"
import styles from "src/styles/pages/index.module.scss"
import dbConnect from "src/lib/dbConnect"
import Item from "src/models/Item"

function CategoryLink({ category }) {
  return (
    <div className={styles.category}>
      <div className={styles.category_image}>
        <Image
          src="/molang.jpg"
          layout="fill"
          objectFit="cover"
          alt="category"
        />
      </div>
      <div>{category}</div>
    </div>
  )
}

export default function Index({ productList }) {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.section}>banner</div>
        <div className={styles.section}>
          <div className={styles.section_title}>categories</div>
          <div
            className={styles.categoriesContainer}
            style={{ "--category-length": categories.length }}
          >
            {categories.map((category) => (
              <Link
                key={category}
                href={{ pathname: "/filter", query: { category } }}
              >
                <a>
                  <CategoryLink category={category} />
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.section_title}>justforyou</div>
          <div className={styles.cardContainer}>
            {productList.map((product) => (
              <Link key={product._id} href={`/product/${product._id}`}>
                <a>
                  <Card
                    title={product.name}
                    price={product.price}
                    image={product.image}
                  />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  await dbConnect()
  const productList = await Item.find().sort({ _id: -1 }).limit(18)
  return {
    props: {
      productList: JSON.parse(JSON.stringify(productList)),
    },
  }
}
