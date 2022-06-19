import React from "react";
import styled from "styled-components";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Blur from "./modules/Blur";

const StyledSection = styled(Section)`
  background: #e6f3eb;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 64px;
  font-weight: 500;
  line-height: 110%;
  padding: 0;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px 28px;
`;

const ContentCell = styled.div`
  font-size: 22px;
  font-weight: 400;
  &.centred {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Obl = styled.span`
  font-weight: 500;
  font-style: oblique;
  position: relative;
  z-index: 5;
`;

const CellTitle = styled.h4`
  font-size: 48px;
  margin: 0;
  margin-bottom: 23px;
`;

const CellImage = styled.img`
  max-width: 570px;
  width: 100%;
  aspect-ratio: 1/1;
`;

const ButtonCta = styled.a`
  background: #ba0c2f;
  border-radius: 30px;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  width: max-content;
  font-size: 16px;
  margin-top: 50px;
`;

const SubTitle = styled.p`
  font-style: oblique;
  font-weight: 300;
  font-size: 42px;
  line-height: 110%;
  text-align: center;
  margin: 80 0 0;
`;

/* mock */
const blures = [
  <>
    <Obl>Лояльным потребителем</Obl> средств SPLAT Global, который любит наши
    бренды и рекомендует их знакомым;
  </>,
  <>
    <Obl>Эко-активистом</Obl> или блогером, который стремится внести свой вклад
    в сохранение окружающей среды и выбирает экологичные безопасные средства;
  </>,
  <>
    <Obl>Мамой,</Obl> которая ответственно подходит к выбору уходовых продуктов
    для ребенка, внимательно изучает составы детской косметики, зубных паст,
    порошков, моющих средств и т.д.
  </>,
];

const LoyalView = () => {
  return (
    <StyledSection id="loyal">
      <Container>
        <Title>Программа «Друзья SPLAT»</Title>
        <ContentGrid>
          <ContentCell>
            Мы запускаем эту программу для узкого круга друзей:
            самых вовлеченных, неравнодушных, активных единомышленников SPLAT.
            <br />
            <br />
            <Obl>Зачем?</Obl> Чтобы получать от вас честную обратную связь.
            Ваш дружеский взгляд со стороны очень ценен для нас!
          </ContentCell>
          <ContentCell>
            Мы готовы слушать и слышать ваши идеи по улучшению продуктов,
            внедрять в формулы ваши новаторские решения, сохраняя экологичность
            и устойчивое развитие в производстве косметики, средств для ухода
            за полостью рта и натуральной бытовой <Obl>НЕхимии</Obl>.
          </ContentCell>
          <ContentCell className="centred">
            <CellTitle>Кто вы?</CellTitle>
            Любознательный, осознанный, ведущий здоровый образ жизни. Вам есть
            18 лет, и вы проживаете в России. У вас есть Telegram (или
            возможность установить его), потому что именно там будет происходить
            наша основная активность.
          </ContentCell>
          <ContentCell>
            <CellImage src="/images/loyal1.jpg" />
          </ContentCell>
          <ContentCell>
            <CellImage src="/images/loyal2.jpg" />
          </ContentCell>
          <ContentCell className="centred">
            <CellTitle>Вы можете быть:</CellTitle>
            {blures.map((blur, idx) => (
              <Blur key={idx} id={idx}>
                {blur}
              </Blur>
            ))}
          </ContentCell>
          <ContentCell>
            <CellTitle>Что вам предстоит делать?</CellTitle>
            Тестировать новинки еще до их выхода, первыми узнавать о запусках
            новых линеек, голосовать за их дизайн, выбирать лучшие
            ароматы/текстуру, делиться своими идеями, получать эксклюзивную
            информацию и напрямую задавать вопросы экспертам нашей Инновационной
            Лаборатории в закрытом телеграмм-канале. <br />
            <br /> Результатом нашего взаимодействия станут уникальные прорывные
            продукты, которые улучшат качество жизни миллионов людей. <br />
            <br /> <Obl>Интересно?</Obl> Все, что вам нужно сделать для участия
            в программе, это заполнить заявку по ссылке ниже!
            <ButtonCta>заполнить заявку</ButtonCta>
          </ContentCell>
          <ContentCell>
            <CellImage src="/images/loyal3.jpg" />
          </ContentCell>
        </ContentGrid>
        <SubTitle>
          Давайте сделаем мир экологичным и дружелюбным местом, где ценности
          выше цены.
        </SubTitle>
      </Container>
    </StyledSection>
  );
};

export default LoyalView;
