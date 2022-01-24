import React from "react";
import styled from "styled-components";
import { Skeleton } from "../src";

const StyledPoster = styled.div`
  width: 800px;
  display: flex;
  align-items: flex-start;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 24px;
`;

const StyledImg = styled.div<{ url: string }>`
  background: #f9f9f9;
  width: 180px;
  height: 260px;

  background-image: url(${({ url }) => url});
  background-position: center;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 0;
  padding: 0;
  margin-bottom: 24px;
  font-size: 40px;
`;

const Subtitle = styled.div`
  margin-bottom: 32px;
  font-size: 20px;
`;

interface PosterProps {
  image: string;
  title: string;
  year: string;
  imdbID: string;
}

export const Poster: React.FC<PosterProps> = ({
  image,
  title,
  year,
  imdbID,
}) => (
  <StyledPoster>
    <Skeleton>
      <StyledImg url={image} />
    </Skeleton>

    <Content>
      <Skeleton>
        <Title>{title}</Title>
        <Subtitle>Released: {year}</Subtitle>

        <a href={imdbID}>View on IMDB</a>
      </Skeleton>
    </Content>
  </StyledPoster>
);
