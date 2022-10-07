import { memo } from "react";
import Link from "next/link";

import {
  Copyright,
  Footer,
  Item,
  Menu,
  MenuWrapper,
  SubTitle,
  Title,
  Wrapper,
} from "./styled";

const FooterComponent = () => {
  return (
    <Footer>
      <Wrapper>
        <div>
          <Link href="/" passHref>
            <Title>Mars App</Title>
          </Link>
          <Copyright>
            Copyright &copy; {new Date().getFullYear()}. Mars App
          </Copyright>
        </div>
        <MenuWrapper>
          <Menu>
            <SubTitle>Mars App</SubTitle>
            <Link href="/store" passHref>
              <Item>Produk</Item>
            </Link>
            <Link href="/about" passHref>
              <Item>Tentang Kami</Item>
            </Link>
          </Menu>
          <Menu>
            <SubTitle>Kontak</SubTitle>
            <a
              target="_blank"
              href="https://www.instagram.com/asscbymars/"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}>
              <Item>Instagram</Item>
            </a>
            <a
              target="_blank"
              href="https://wa.me/6281287264653/"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}>
              <Item>WhatsApp</Item>
            </a>
            <a
              target="_blank"
              href="https://wa.me/6285155094220/"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}>
              <Item>Complaint</Item>
            </a>
          </Menu>
        </MenuWrapper>
      </Wrapper>
    </Footer>
  );
};

export default memo(FooterComponent);
