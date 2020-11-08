import { IconType } from "react-icons"
import { FaTwitter, FaInstagram, FaLine, FaYoutube } from "react-icons/fa"

type Link = {
  title: string
  href: string
}

export const links: Link[] = [
  {
    title: "ワスレナ商店について",
    href: "/",
  },
  {
    title: "お知らせ",
    href: "/news",
  },
  {
    title: "ご出品の流れ",
    href: "/exhibit-flow",
  },
  {
    title: "お問い合わせ",
    href: "/contact",
  },
]

export const snsLinks = {
  twitter: {
    title: "Twitter",
    href: "https://twitter.com",
    Icon: FaTwitter,
  },
  instagram: {
    title: "Instagram",
    href: "https://instagram.com/sobo_sapporo",
    id: "sobo_sapporo",
    Icon: FaInstagram,
  },
  line: {
    title: "Line",
    href: `https://line.me/R/ti/p/@706aeenj`,
    id: "@706aeenj",
    Icon: FaLine,
  },
  youtube: {
    title: "YouTube",
    href: "https://youtube.com",
    Icon: FaYoutube,
  },
}
