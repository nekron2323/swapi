import Image from "next/image";
import styles from '@/styles/Home.module.css'
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { isDark } = useTheme()
  return (
      <div className={styles.img}>
        <Image src={`/star-wars-${isDark ? 'dark' : 'light'}.svg`} fill alt='logo' />
      </div>
  )
}
