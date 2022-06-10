/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { keyframes } from 'styled-components';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content aria-label='Menu'>
        <ContentWrapper>
          <CloseButton onClick={onDismiss}>
            <Icon id='close' />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <Filler />
          <Nav>
            <NavLink href='/sale'>Sale</NavLink>
            <NavLink href='/new'>New&nbsp;Releases</NavLink>
            <NavLink href='/men'>Men</NavLink>
            <NavLink href='/women'>Women</NavLink>
            <NavLink href='/kids'>Kids</NavLink>
            <NavLink href='/collections'>Collections</NavLink>
          </Nav>
          <Footer>
            <SubLink href='/terms'>Terms and Conditions</SubLink>
            <SubLink href='/privacy'>Privacy Policy</SubLink>
            <SubLink href='/contact'>Contact Us</SubLink>
          </Footer>
        </ContentWrapper>
      </Content>
    </Overlay>
  );
};

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  background: var(--color-backdrop);
  animation: ${fadeIn} 400ms;
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
`;

const slideIn = keyframes`
  from{
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Content = styled(DialogContent)`
  position: relative;
  background: white;
  width: 300px;
  margin-right: calc(var(--overfill) * -1);
  height: 100%;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 600ms 200ms backwards
      cubic-bezier(0.13, 0.72, 0.38, 0.98);
  }
`;

const ContentWrapper = styled.div`
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 400ms 600ms backwards;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
