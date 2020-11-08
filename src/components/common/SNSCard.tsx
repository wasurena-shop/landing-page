import { styled } from "plugins/emotion"
import { targetBlank } from "constants/targetBlank"

export const SNSCard = styled.div`
  position: relative;
  border-radius: 4px;
  border: 1px solid #f1f1f1;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 2rem 2.4rem 1.4rem 2.4rem;
  width: fit-content;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const IconWrapper = styled.div`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.secondary};
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 150px;
  padding-bottom: 150px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
  margin-bottom: 0.8rem;

  & > img {
    position: absolute;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`

export const InstaImageWrapper = styled.div`
  position: relative;
  width: 150px;
  padding-bottom: 150px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
  margin-bottom: 1.6rem;

  & > img {
    position: absolute;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  // instagram border
  &::before {
    content: "";
    position: absolute;
    top: -0.6rem;
    left: -0.6rem;
    z-index: -1;
    width: 150px;
    height: 150px;
    padding: 0.6rem;
    box-sizing: content-box;
    border-radius: 50%;
    background: linear-gradient(235deg, #d62976 0%, #fa7e1e 70%, #feda75 100%);
  }
  &::after {
    content: "";
    position: absolute;
    top: -0.3rem;
    left: -0.3rem;
    z-index: -1;
    width: 150px;
    height: 150px;
    padding: 0.3rem;
    box-sizing: content-box;
    border-radius: 50%;
    background-color: white;
  }
`

export const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.primary};
  font-size: 1.2rem;
`

export const ScreenName = styled.span`
  color: ${({ theme }) => theme.color.secondary};
`

type Props = {
  href: string
}

export const ExternalLink: React.FC<Props> = ({ href, children }) => (
  <LinkButton href={href} {...targetBlank}>
    {children}
  </LinkButton>
)

const LinkButton = styled.a`
  margin-top: 1.2rem;
  ${({ theme }) => `
    display: inline-block;
    background-color: ${theme.color.accent};
    color: ${theme.color.white};
    text-decoration: none;
    font-weight: bold;
    padding: .5rem 1rem;
    border-radius: 4px;
  `}
`
