import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const post = {
  img: 'https://res.cloudinary.com/dxrvtimah/image/upload/v1705284381/medium_3d_rendem_de_uma_figura_masculina_empurrando_uma_enorme_pedra_ate_uma_montanha_32ef8c644c.jpg',
  title: 'lorem ipsum dolor sit am id, consectetur adip',
  body: 'lorem ipsum  dolor sit am id, consectetur adip e',
  slug: 'lorem ipsum'
}

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img}/>
        </div>}
        <span className={styles.date}>{post.createdAt?.toString().slice(4, 16)}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard