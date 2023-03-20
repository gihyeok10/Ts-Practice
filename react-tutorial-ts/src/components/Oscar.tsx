type OscarProps = {
  children: React.ReactNode;
};
// 엘리먼트 요소 타입 지정
export const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};
