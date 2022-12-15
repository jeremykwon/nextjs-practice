// import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  //! router를 통한 페이지 이동방법
  const moveTestPage = () => {
    // router.push("test", "mask-url-router");
    router.push(
      {
        pathname: "test",
        query: { title: "test-id" },
      },
      "mask-url-router"
    );
  };

  return (
    <>
      <div>
        <h1>메인페이지입니다.</h1>
        <Link href="/test?param1=test1">
          {`<Link>`}를 사용한 테스트페이지로 이동
        </Link>

        <p onClick={moveTestPage}>useRouter를 사용한 테스트페이지 이동</p>
      </div>

      {/* next만의 스타일 적용 방법 */}
      <style jsx>{`
        p {
          cursor: pointer;
          color: blue;
        }
      `}</style>
    </>
  );
}
