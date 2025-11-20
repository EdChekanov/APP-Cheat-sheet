import CodeBlock from '../CodeBlock';

const Components = () => {
  return (
    <article>
      <h2>Что такое компоненты в React?</h2>
      <p>
        Компоненты — это строительные блоки интерфейса React. Каждый компонент —
        это функция или класс, которая возвращает JSX-разметку. Компоненты
        позволяют разбивать UI на независимые, переиспользуемые части.
      </p>

      <h3>Пример функционального компонента</h3>
      <CodeBlock
        code={`function Welcome(props) {
  return <h1>Привет, {props.name}!</h1>;
}`}
      />
      <p>Использование:</p>
      <CodeBlock code={`<Welcome name="Алиса" />`} />

      <h3>Пример компонента с использованием хуков</h3>
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

      <h3>Разделение компонентов</h3>
      <CodeBlock
        code={`function App() {
  return (
    <div>
      <Welcome name="Мир" />
      <Counter />
    </div>
  );
}`}
      />

      <h3>Компоненты с пропсами и дети</h3>
      <CodeBlock
        code={`function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

<Card title="Пример">
  <p>Содержимое внутри карточки</p>
</Card>`}
      />

      <h3>Основные моменты для запоминания</h3>
      <ul>
        <li>Компоненты могут быть функциональными (функции) и классовыми.</li>
        <li>Для передачи данных используются props.</li>
        <li>Возвращаемый JSX должен иметь один корневой элемент.</li>
        <li>
          Используйте хуки (например, <code>useState</code>,{' '}
          <code>useEffect</code>) внутри функциональных компонентов.
        </li>
        <li>
          Компоненты можно переиспользовать и комбинировать для создания
          сложного UI.
        </li>
      </ul>

      <p>
        Эта шпаргалка поможет быстро вспомнить базовые принципы компонентов
        React и начать создавать собственные UI-модули.
      </p>
    </article>
  );
};

export default Components;
