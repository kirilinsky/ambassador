import React from "react";
import styled from "styled-components";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Card from "./modules/Card";

/* mock */
import dt from "./data";

const Title = styled.h2`
  font-size: 56px;
  font-weight: 500;
  line-height: 110%;
  padding: 0;
`;

const Description = styled.p`
  font-size: 22px;
  max-width: 570px;
  line-height: 120%;
  padding: 0;
  margin-top: 30px;
`;

const CardsWrapepr = styled.div`
  display: grid;
  margin-top: 50px;
  grid-template-columns: repeat(3, minmax(auto, 360px));
  justify-content: space-between;
  gap: 60px;
  grid-template-rows: 340px;
`;

const SubTitle = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 42px;
  text-align: center;
  margin: 80px auto 0;
`;

const Obl = styled.span`
  font-style: oblique;
  font-weight: 400;
`;

const ProductsView = () => {
  return (
    <Section id="products">
      <Container>
        <Title>Наши продукты — это средства для ухода</Title>
        <Description>
          Все они создаются на базе Инновационной Лаборатории SPLAT и
          собственного CO2-нейтрального производства.
        </Description>

        <CardsWrapepr>
          {dt.map(({ id, title }) => (
            <Card key={id} img={id}>
              {title}
            </Card>
          ))}
        </CardsWrapepr>
        <SubTitle>
          Мы настоящие фанаты своего дела и ищем <br />
          <Obl>друзей-единомышленников</Obl>, с которыми будем создавать лучшие
          продукты в мире!
        </SubTitle>
      </Container>
    </Section>
  );
};

export default ProductsView;
