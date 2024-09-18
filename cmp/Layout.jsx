import Header from './Header'
import Footer from './Footer'
import { useTheme } from '@/context/ThemeContext'
import styles from '@/styles/Layout.module.css'

const Layout = ({ children }) => {
    const { isDark } = useTheme()
    return (
        <>
            <Header />
            <main className={isDark ? styles.dark : styles.light}>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout