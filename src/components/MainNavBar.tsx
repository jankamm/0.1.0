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
            <ul>
                <li>hello</li>
                <li>assets</li>
            </ul>
        </div>
    )
}
