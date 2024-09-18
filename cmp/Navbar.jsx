import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import { useTheme } from '@/context/ThemeContext'
import navigation from '@/constants/navigation'
import styles from '@/styles/Navbar.module.css'

const Navbar = () => {
    const { pathname } = useRouter()
    const { isDark, toggleTheme } = useTheme()

    const isActive = (path) => pathname === path ? cn((isDark ? styles.dark : styles.light), styles.link) : styles.link
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image src={`/logo-${isDark ? 'dark' : 'light'}.svg`} width={50} height={50} alt='logo' />
            </div>
            <div className={styles.links}>
                {navigation.map(({ id, title, path }) =>
                    <Link key={id} href={path} className={isActive(path)}>
                        {title}
                    </Link>
                )}
                <div className={styles.theme} onClick={toggleTheme}>
                    <Image
                        src={isDark ? 'dark.svg' : 'light.svg'}
                        width={40}
                        height={40}
                        alt='theme' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar