import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

export default function Header() {
  return <header className={cx("header")}> 헤더컴포넌트입니다.</header>;
}
