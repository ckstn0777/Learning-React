// Greetings.tsx
import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
  children?: React.ReactNode; // children을 쓰고 싶을때는 다음과 같이 불러와준다.
};

function Greetings({
  name,
  mark,
  optional,
  onClick,
  children,
}: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click me</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!',
};

export default Greetings;
