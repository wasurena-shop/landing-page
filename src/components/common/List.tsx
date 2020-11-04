import { styled } from "plugins/emotion"

export const List = styled.ul`
  list-style: none;
  padding: 0 0 0 1rem;
  margin: 2rem 0 1rem 0;

  & > li {
    display: flex;
    font-size: 1rem;
    line-height: 1.8rem;
    margin: 0.6rem 0;
  }

  & > li::before {
    content: "";
    flex: 0 0 auto;
    display: inline-block;
    width: 8px;
    height: 1px;
    margin-top: 0.9rem;
    margin-right: 0.5rem;
    background-color: ${({ theme }) => theme.color.primary};
  }
`
