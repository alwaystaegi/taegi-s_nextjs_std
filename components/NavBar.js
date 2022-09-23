import Link from "next/link";
import { useRouter } from "next/router";
import { cls, add } from "../libs/utils";

export default function NavBar() {
  const router = useRouter();
  return (
    <>
      <nav>
        <ul className="flex bg-slate-400 justify-around">
          {/* //!홈 */}
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? " bg-red-200" : ""}>홈</a>
            </Link>
          </li>
          {/* //! 카운터 */}
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
          {/* //! about */}
          <li>
            <Link href="/about">
              <a className={router.pathname === "/about" ? " bg-red-200" : ""}>
                개발자 소개
              </a>
            </Link>
          </li>
          {/* //! todo list */}
          <li>
            <Link href="/todo">
              <a className={router.pathname === "/todo" ? " bg-red-200" : ""}>
                ToDo리스트
              </a>
            </Link>
          </li>
          {/* //!users */}
          <li>
            <Link href="/users">
              <a className={router.pathname === "/users" ? " bg-red-200" : ""}>
                users
              </a>
            </Link>
          </li>
          <li>
            <Link href="/users/ssr">
              <a
                className={
                  router.pathname === "/users/ssr" ? " bg-red-200" : ""
                }
              >
                ssr
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
