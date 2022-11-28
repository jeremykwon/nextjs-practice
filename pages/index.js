// import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>메인페이지입니다.</h1>
      <Link href="/test">테스트페이지로 이동</Link>
    </div>
  );
}
