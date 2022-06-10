import React from 'react';
import styled from 'styled-components/macro';
import { WEIGHTS } from '../../constants';

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper>
      <Link {...delegated}>{children}</Link>
      <BoldLink aria-hidden='true'>{children}</BoldLink>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  overflow: hidden;
  cursor: pointer;
  color: var(--color-gray-900);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Link = styled.span`
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: ${WEIGHTS.medium};

  ${Wrapper}:hover & {
    transform: translateY(-100%);
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 400ms;

    ${Wrapper}:hover & {
      transition: transform 300ms;
    }
  }
`;

const BoldLink = styled.span`
  display: block;
  margin-top: -1.7rem;
  transform: translateY(100%);
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: ${WEIGHTS.bold};

  ${Wrapper}:hover & {
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 400ms;

    ${Wrapper}:hover & {
      transition: transform 300ms;
    }
  }
`;

export default NavLink;
