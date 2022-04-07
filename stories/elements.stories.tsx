import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { SkeletonProvider, Skeleton } from "../src";

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default {
  title: "Elements",
  component: Skeleton,
};

const Demo = ({ defaultIsLoading = false }) => {
  const [isLoading, setIsLoading] = useState(defaultIsLoading);

  return (
    <Wrapper>
      <h1>Elements</h1>

      <p>
        This is a demo showing how different elements look when wrapped in a
        Skeleton. For simplicity, we're using Bootstrap, but this will work with
        any library.
      </p>

      <b onClick={() => setIsLoading(!isLoading)}>Toggle loading</b>

      <br />
      <br />
      <br />

      <SkeletonProvider isLoading={isLoading}>
        <Skeleton>
          <div className="alert alert-primary" role="alert">
            A simple primary alert—check it out!
          </div>
        </Skeleton>
        <br />
        <br />

        <Skeleton>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
        </Skeleton>

        <br />
        <br />

        <Skeleton>
          <button type="button" className="btn btn-primary">
            Button element
          </button>
        </Skeleton>

        <br />
        <br />

        <Skeleton>
          <button type="button" className="btn btn-link">
            Link
          </button>
        </Skeleton>

        <br />
        <br />

        <Skeleton>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary">
              Left
            </button>
            <button type="button" className="btn btn-primary">
              Middle
            </button>
            <button type="button" className="btn btn-primary">
              Right
            </button>
          </div>
        </Skeleton>

        <br />
        <br />

        <div className="card" style={{ width: "18rem" }}>
          <Skeleton>
            <svg
              className="bd-placeholder-img card-img-top"
              width="100%"
              height="180"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Image cap"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#868e96"></rect>
            </svg>
          </Skeleton>
          <div className="card-body">
            <Skeleton>
              <h5 className="card-title">Card title</h5>
            </Skeleton>

            <Skeleton>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Skeleton>

            <br />

            <Skeleton>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </Skeleton>
          </div>
        </div>

        <br />
        <br />

        <Skeleton>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow={0}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </Skeleton>

        <br />
        <br />

        <Skeleton>
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder=".form-control-lg"
            aria-label=".form-control-lg example"
          />
        </Skeleton>

        <br />
        <br />

        <Skeleton>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
        </Skeleton>

        <Skeleton>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
        </Skeleton>

        <div className="form-check form-switch">
          <Skeleton>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </Skeleton>
        </div>
      </SkeletonProvider>
    </Wrapper>
  );
};

export const ElementsLoading = () => <Demo defaultIsLoading />;
export const ElementsFinished = () => <Demo />;
