"use client"

import Link from "next/link"
import { MainNavItem } from "types"

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}



export default function NavBar() {
    return (
        <div>
            <h1>Title h1</h1>
            <ul>
                <li>hello</li>
                <li>assets</li>
            </ul>
        </div>
    )
}
