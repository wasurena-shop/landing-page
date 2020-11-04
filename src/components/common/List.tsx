import { styled } from "plugins/emotion"

export const List = styled.ul`
  list-style: none;
  padding: 0 0 0 1rem;

  & > li {
    display: flex;
  }

  & > li::before {
    content: "";
    flex: 0 0 auto;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-top: 0.5em;
    margin-right: 0.5rem;
    background-color: ${({ theme }) => theme.color.accent};
  }
`
