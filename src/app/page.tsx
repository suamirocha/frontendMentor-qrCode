'use client'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  border: solid red 2px;
`;

const SkeletonInner = styled.div`
  padding: 1rem;
  background-color: rgb(24 24 27 / 0.8);
  border-radius: 1rem;
`;

const SkeletonImg = styled.div`
  height: 3.5rem;
  border-radius: 0.5rem;
  background-color: rgb(63 63 70 / 1);
`;

const SkeletonBtn = styled.div`
  margin-top: 0.75rem;
  width: 25%;
  height: 0.75rem;
  border-radius:0.5;
  background-color: rgb(255 0 128 / 1);
`;

const SkeletonLineOne = styled.div``;
const SkeletonLineTwo = styled.div``;

const Skeleton = () => (
  <SkeletonInner>
    <SkeletonImg/>
    <SkeletonBtn/>
    <SkeletonBtn/>
    <SkeletonLineOne/>
    <SkeletonLineTwo/>
  </SkeletonInner>
);
export default function App() {
  return (
    <>
    <Container>
      <Skeleton/>
    </Container>
    </>
  )
}
