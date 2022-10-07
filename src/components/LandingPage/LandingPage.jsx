import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";


import { getProduct } from "../../api/storeAPI";
import { getRandomInt } from "../../helpers/number";

import {
  Container,
  Hero,
  Text,
  Title,
  ProductWrapper,
  ProductTitle,
  ProductList,
  ProductBox,
  ProductButton,
  ProductImageWrapper,
  ProductDetailTitle,
  ProductDetail,
  ProductDetailPrice,
  ProductDetailDesc,
  ProductDetailCategory,
  HeroImage,
  SubTitle,
  HeroRow,
  Wrapper,
  Card,
  ProductCol,
} from "./styled";

const LandingPage = () => {
  const [listProduct, setListProduct] = useState([]);

  const getListProduct = async () => {
    const [resultFirstPage, resultSecondPage, resultThirdPage] =
      await Promise.all([
        getProduct({ page: 1 }),
        getProduct({ page: 2 }),
        getProduct({ page: 3 }),
      ]);
  };

  useEffect(() => {
    getListProduct();
  }, []);

  return (
    <>
      <Container src="/assets/hero-new.webp" color="#fff" zIndex="1">
        <Wrapper>
          <Hero>
            <HeroRow>
              <HeroImage>
                <img
                  src="/assets/Netflix.svg"
                  alt="hero"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  priority
                />
              </HeroImage>
            </HeroRow>
            <HeroRow>
              <Text>
                <Title>Temukan aplikasi Premium yang Anda inginkan.</Title>
                <SubTitle>
                  Mars App menjual berbagai macam produk aplikasi premium sejak tahun 2019 dan sudah banyak customer melakukan transaksi melalui Mars
                </SubTitle>
                <Link href="/produks/" passHref>
                  <ProductButton>Explore produk</ProductButton>
                </Link>
              </Text>
            </HeroRow>
          </Hero>
        </Wrapper>
      </Container>
    </>
  );
};

export default LandingPage;
