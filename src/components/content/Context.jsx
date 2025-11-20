import CodeBlock from '../CodeBlock';

const Context = () => {
  return (
    <article>
      <h2>Что такое Context в React?</h2>
      <p>
        Context API позволяет передавать данные через дерево компонентов без
        необходимости передавать props на каждом уровне. Это удобно для
        глобальных данных: темы, локализации, авторизации и др.
      </p>

      <h3>Создание контекста</h3>
      <CodeBlock
        code={`import React from 'react';

const MyContext = React.createContext(defaultValue);`}
      />

      <h3>Провайдер контекста (Provider)</h3>
      <p>
        Provider оборачивает компоненты и предоставляет значение контекста для
        вложенных компонентов.
      </p>
      <CodeBlock
        code={`<MyContext.Provider value={/* значение */}>
  <App />
</MyContext.Provider>`}
      />

      <h3>Потребление контекста (Consumer / useContext)</h3>
      <p>Два способа использования контекста:</p>
      <ul>
        <li>
          Через компонент <code>Consumer</code>:
          <CodeBlock
            code={`<MyContext.Consumer>
  {value => /* использовать значение */}
</MyContext.Consumer>`}
          />
        </li>
        <li>
          Через хук <code>useContext</code> в функциональных компонентах:
          <CodeBlock
            code={`import React, { useContext } from 'react';

const value = useContext(MyContext);`}
          />
        </li>
      </ul>

      <h3>Пример: тема приложения</h3>
      <CodeBlock
        code={`const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return <button className={theme}>Кнопка</button>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}`}
      />

      <p>
        Context — мощный инструмент для управления глобальными данными, но
        использование должно быть осознанным, чтобы избежать лишних перерендеров
        и усложнений в архитектуре.
      </p>
    </article>
  );
};

export default Context;
