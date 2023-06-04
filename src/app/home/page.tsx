'use client'
import styled from "styled-components";
import Background from './../../../public/bg.jpg'
import QrCode from './../../../public/image-qr-code.png'

const Corpo = styled.div`
  background-image: url(${Background.src});
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  height: 100vh;
  position: static;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  max-width: auto;
  max-heigt: 150px;
  border: 2px purple solid;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 2em;
`;
const Titulo = styled.div`
  color: purple;
  font-size: 40px;
  text-align: center;
`

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 988px;
  height: 479px;
  background-color: #D5E1EF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), -24px 0px 39px rgba(0, 0, 0, 0.11);
`;
const BackgroundQR = styled.div`
  width: 245px;
  height: 390px;
  background-color: white;
  flex-direction: column;
  padding: 1em;
  border-radius: 8px;
`;
const ContainerQR = styled.div`
  widht:  auto;
  height: 200px;
  display: flex;
  background-image: url(${QrCode.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: blue;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
const TextoTitulo = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.6;
  margin: 10px 0 10px 0;
`;
const TextoDesc = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
`;
export default function Home ()  {
  return(
    <>
    <Corpo >
      <Header>
        <Titulo>
          FrontEnd Mentor - Challenges
        </Titulo>
      </Header>
      <Section>
        <BackgroundQR>
          <ContainerQR/>
          <TextoTitulo>
            Improve your front-end
            skilss by building projects
          </TextoTitulo>
          <TextoDesc>
            Scan the QR code to visit Frontend
            Mentor and take your coding skills to
            next level
          </TextoDesc>
        </BackgroundQR>
      </Section>
    </Corpo>
    </>
  )
}