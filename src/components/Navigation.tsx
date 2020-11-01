import NextLink from "next/link"
import { styled } from "plugins/emotion"
import { IconType } from "react-icons"
import { FaTwitter, FaInstagram, FaLine, FaYoutube } from "react-icons/fa"
import Logo from "../svgs/wasurena-logo-zure-white.svg"

type Link = {
  title: string
  href: string
}

const links: Link[] = [
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

const snsLinks: (Link & { Icon: IconType })[] = [
  {
    title: "Twitter",
    href: "https://twitter.com",
    Icon: FaTwitter,
  },
  {
    title: "Instagram",
    href: "https://instagram.com",
    Icon: FaInstagram,
  },
  {
    title: "Line",
    href: "https://line.me",
    Icon: FaLine,
  },
  {
    title: "YouTube",
    href: "https://youtube.com",
    Icon: FaYoutube,
  },
]

type Props = {
  onLinkClick: () => void
  open: boolean
}

export const Navigation: React.FC<Props> = ({ onLinkClick, open }) => (
  <Wrapper>
    <LogoWrapper>
      <Logo />
    </LogoWrapper>

    <Links>
      {links.map((link, index) => (
        <LinkItem key={index}>
          <NextLink href={link.href}>
            <Link open={open} index={index} onClick={onLinkClick}>
              {link.title}
            </Link>
          </NextLink>
        </LinkItem>
      ))}
    </Links>

    <LinkToOnlineShop>ONLINE SHOP</LinkToOnlineShop>

    <SNSLinks>
      {snsLinks.map(({ Icon, ...link }) => (
        <IconLink
          key={link.title}
          href={link.href}
          target="_blank"
          rel="nofollow noopener"
        >
          <Icon size="1.6rem" />
        </IconLink>
      ))}
    </SNSLinks>
  </Wrapper>
)

const Wrapper = styled.div`
  min-width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// Logo
const LogoWrapper = styled.div`
  width: 140px;
`

// Links
const Links = styled.div`
  margin-top: 2em;
  width: 80%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`

const LinkItem = styled.p`
  margin: 0;
  writing-mode: vertical-rl;
`

type OpenIndex = {
  open: boolean
  index: number
}

const Link = styled.a`
  position: relative;
  display: inline-block;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all ease 0.3s;
  transition-delay: ${({ open, index }: OpenIndex) =>
    open ? `${index * 0.1 + 0.2}s` : "0"};
  top: ${({ open }: OpenIndex) => (open ? "0" : "-60px")};
  opacity: ${({ open }: OpenIndex) => (open ? "1" : "0")};
`

// ONLINE SHOP
const LinkToOnlineShop = styled.a`
  margin-top: 1.6em;
  display: block;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  font-weight: bold;
  font-size: 1rem;
  padding: 10px 14px;
  border-radius: 8px;
  box-shadow: 1px 5px 10px 1px rgba(209, 209, 209, 0.25);
  cursor: pointer;
`

// SNS
const SNSLinks = styled.div`
  margin-top: 2.8em;
  width: 80%;
  display: flex;
  justify-content: space-between;
`

const IconLink = styled.a`
  display: block;
  color: inherit;
`
