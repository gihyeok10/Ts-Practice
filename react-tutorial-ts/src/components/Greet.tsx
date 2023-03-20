type GreetProps = {
  name: string;
  meseageCount: number;
  isLoggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `hello welcome${props.name} You Have meaaageCount:${props.meseageCount}`
          : null}
      </h2>
    </div>
  );
};
