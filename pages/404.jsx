import Image from "next/image"
import styles from '@/styles/NotFound.module.css'

const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <p className={styles.text}>4</p>
            <Image src='death-star.svg' width={300} height={300} alt='Not Found' />
            <p className={styles.text}>4</p>
        </div>

    )
}

export default NotFound