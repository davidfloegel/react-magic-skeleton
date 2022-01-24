import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { SkeletonProvider, Skeleton } from "../src";
import { Poster } from "./poster";

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Demo/Skeleton",
  component: Skeleton,
};

const Demo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("https://fake-movie-database-api.herokuapp.com/api?s=sta")
      .then((r) => r.json())
      .then((data) => {
        setData(data.Search);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  }, []);

  return (
    <Wrapper>
      <h1>Star Wars Movies</h1>

      <SkeletonProvider isLoading={isLoading}>
        {isLoading || !data ? (
          <>
            <Poster image="mock" title="mock" year="mock" imdbID="mock" />
            <Poster image="mock" title="mock" year="mock" imdbID="mock" />
            <Poster image="mock" title="mock" year="mock" imdbID="mock" />
          </>
        ) : (
          <>
            {data.map((movie: any) => (
              <Poster
                key={movie.Title}
                image={movie.Poster}
                title={movie.Title}
                year={movie.Year}
                imdbID={movie.ImdbID}
              />
            ))}
          </>
        )}
      </SkeletonProvider>
    </Wrapper>
  );
};

const Template = () => <Demo />;

export const Primary = Template.bind({});
