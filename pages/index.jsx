import Image from "next/image";
import styles from '@/styles/Home.module.css'
import { useTheme } from "@/context/ThemeContext";
import Head from "next/head";

export default function Home() {
  const { isDark } = useTheme()
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.img}>
        <Image src={`/star-wars-${isDark ? 'dark' : 'light'}.svg`} fill alt='logo' />
      </div>
    </>
  )
}
