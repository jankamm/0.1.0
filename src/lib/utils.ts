import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
//import { env } from "@/env.mjs"

//util to merge css with clsx -> twMerge converts it to tailwind w/o duplicates
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

/* 
export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`
}
*/