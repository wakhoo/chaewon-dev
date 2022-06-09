import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer(){
    const router = useRouter();
    console.log(router);
    return(<foot>
        <Link href="/">
            <a className={router.pathname === "/" ? "active": ""}>Home</a>
        </Link>
        {/*<a href="/"->이동할 경로>Home->버튼의 이름</a> */}
        {/* <Link href="/about">
            <a className={router.pathname === "/about" ? "active": ""}>About</a>
        </Link> */}
        <style jsx>{`
        nav {
            background-color: tomato;
        }
        a{
            text-decoration: none;
        }
        .active{
            color:yellow;
        }
        `}</style>
    </foot>)
}