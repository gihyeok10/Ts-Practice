import React from "react";

type ContainerProps = {
  styles: React.CSSProperties;
};
// CSS 타입
export const Container = ({ styles }: ContainerProps) => {
  return <div style={styles}>Text content goes here</div>;
};

// 이렇게 props .을 중괄화로 싸서 생략해도 된다.
