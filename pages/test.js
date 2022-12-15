import Link from "next/link";
import { useRouter } from "next/router";

export default function Test() {
  const router = useRouter();
  console.log(router.query.param1);

  return (
    <div>
      <h1>테스트페이지 입니다</h1>
      <h2>넘겨받은 param1: {router.query.param1 ?? "음슴"}</h2>
      <Link href="/">메인페이지로 이동</Link>
    </div>
  );
}
