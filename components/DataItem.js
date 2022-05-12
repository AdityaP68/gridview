import styled, { css } from "styled-components";
import iconAvatar from "../images/avatar.jpg";
import Image from "next/image";

const Wrapper = styled.div`
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.2em;
`;

const ImageContainer = styled.div`
  height: 20%;
  width: 20%;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CTA = styled.div`
  border-radius: 30px;
  background-color: red;
  padding: 0.5rem 2rem;
  cursor: pointer;
`;

const Heading = styled.h3`
  padding: 0;
  margin: 0;
`;

const SubHeading = styled.p``;

const HR = styled.hr`
  border: 1px solid white;
`;

export default function DataItem({
  heading = "this is heading",
  description = "this is description",
  hr = true,
}) {
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={iconAvatar} alt="alt text" />
      </ImageContainer>
      <Details>
        <Heading>{heading}</Heading>
        <SubHeading>{description}</SubHeading>
      </Details>
      <CTA>Check out</CTA>
    </Wrapper>
  );
}
