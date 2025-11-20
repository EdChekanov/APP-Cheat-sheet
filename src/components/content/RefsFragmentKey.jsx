import CodeBlock from '../CodeBlock';

const RefsFragmentKey = () => {
  return (
    <article>
      <h2>Refs в React</h2>
      <p>
        Refs позволяют получить доступ к DOM-элементам или компонентам напрямую.
        Это полезно для управления фокусом, выделения текста или интеграции с
        внешними библиотеками.
      </p>

      <h3>Пример использования useRef в функциональном компоненте</h3>
      <CodeBlock
        code={`import React, { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Фокус на инпут</button>
    </>
  );
}`}
      />

      <h2>Fragment в React</h2>
      <p>
        Фрагменты позволяют группировать список дочерних элементов без
        добавления лишних узлов в DOM. Используйте &lt;Fragment&gt; или короткий
        синтаксис &lt;&gt;&lt;/&gt;.
      </p>

      <h3>Пример использования Fragment</h3>
      <CodeBlock
        code={`import React, { Fragment } from 'react';

function Columns() {
  return (
    <Fragment>
      <td>Имя</td>
      <td>Возраст</td>
    </Fragment>
  );
}

// Можно еще короче:

function ColumnsShort() {
  return (
    <>
      <td>Имя</td>
      <td>Возраст</td>
    </>
  );
}`}
      />

      <h2>Key в React</h2>
      <p>
        Атрибут key помогает React эффективно обновлять списки, идентифицируя,
        какие элементы были изменены, добавлены или удалены. Ключи должны быть
        уникальными среди соседних элементов.
      </p>

      <h3>Пример использования key в списках</h3>
      <CodeBlock
        code={`function List({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}`}
      />

      <p>
        Правильное использование refs, фрагментов и ключей повышает качество,
        производительность и читаемость React-приложений.
      </p>
    </article>
  );
};

export default RefsFragmentKey;
