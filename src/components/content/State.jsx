import CodeBlock from '../CodeBlock';

const State = () => {
  return (
    <article>
      <h2>Что такое state в React?</h2>
      <p>
        State — это объект, который хранит состояние компонента. В отличие от
        props, state можно изменять внутри компонента, и при этом React
        автоматически обновит UI.
      </p>

      <h3>Пример использования хука useState (функциональный компонент)</h3>
      <CodeBlock
        code={`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Счётчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
  );
}`}
      />

      <h3>Изменение состояния по событию</h3>
      <CodeBlock
        code={`<button onClick={() => setCount(count + 1)}>Увеличить</button>`}
      />

      <h3>Классический state в классовом компоненте</h3>
      <CodeBlock
        code={`class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return <div>Сейчас: {this.state.date.toLocaleTimeString()}</div>;
  }
}`}
      />

      <h3>Основные моменты</h3>
      <ul>
        <li>
          Изменение state должно происходить через setState (в классовых
          компонентах) или set-функции хука useState в функциональных.
        </li>
        <li>Изменение state инициирует перерисовку компонента.</li>
        <li>
          State локальный для компонента, можно поднимать состояние вверх
          (lifting state up) для обмена данными.
        </li>
      </ul>
    </article>
  );
};

export default State;
