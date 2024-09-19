import Image from "next/image"
import styles from '@/styles/NotFound.module.css'

const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <p className={styles.text}>4</p>
            <div className={styles.img}>
                <Image src='/death-star.svg' fill alt='Not Found' />
            </div>
            <p className={styles.text}>4</p>
        </div>

    )
}

export default NotFound