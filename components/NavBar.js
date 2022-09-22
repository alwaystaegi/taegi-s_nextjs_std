import Link from "next/link";
import { useRouter } from "next/router";
import { cls } from "../libs/utils";

export default function NavBar() {
  const router = useRouter();
  return (
    <>
      <nav>
        <ul className="flex bg-slate-400 justify-around">
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? " bg-red-200" : ""}>홈</a>
            </Link>
          </li>
          <li>
            <Link href="/counter">
              <a
                className={cls(
                  router.pathname === "/counter" ? "bg-red-200" : ""
                )}
              >
                카운터
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={router.pathname === "/about" ? " bg-red-200" : ""}>
                개발자 소개
              </a>
            </Link>
          </li>
          <li>
            <Link href="/todo">
              <a className={router.pathname === "/todo" ? " bg-red-200" : ""}>
                ToDo리스트
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
