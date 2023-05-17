import { MetadataRoute } from "next"

//allows everything for webcrawlers
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  }
}
