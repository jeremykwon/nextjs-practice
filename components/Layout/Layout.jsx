// component
import { Header } from "@/components";

export default function Layout(props) {
  return (
    <>
      <Header>
        <h1>Layout header 컴포넌트입니다.</h1>
      </Header>
      {props.children}
    </>
  );
}
