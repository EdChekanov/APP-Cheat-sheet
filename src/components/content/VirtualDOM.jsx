import CodeBlock from '../CodeBlock';

const VirtualDOM = () => {
  return (
    <article>
      <h2>Что такое Virtual DOM в React?</h2>
      <p>
        Virtual DOM — это абстракция реального DOM, которую React использует для
        эффективного обновления пользовательского интерфейса. React создает
        виртуальное дерево элементов в памяти и сравнивает его с предыдущей
        версией после изменений.
      </p>

      <h3>Как работает Virtual DOM?</h3>
      <p>
        Когда состояние компонента меняется, React создает новое виртуальное
        дерево. Затем React сравнивает новое дерево с предыдущим, находя
        различия (diffing). После этого обновляются только изменённые части
        реального DOM — это значительно повышает производительность.
      </p>

      <h3>Пример создания Virtual DOM-элементов</h3>
      <CodeBlock
        code={`const element = (
  <ul className="list">
    <li className="list-item">Элемент списка</li>
  </ul>
);`}
      />

      <h3>Рендер Virtual DOM в реальный DOM</h3>
      <CodeBlock
        code={`import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);`}
      />

      <h3>Преимущества Virtual DOM</h3>
      <ul>
        <li>Быстрая и оптимальная перерисовка UI.</li>
        <li>Минимизация операций с реальным DOM — дорогим по ресурсам.</li>
        <li>
          Облегчение разработки благодаря декларативному описанию интерфейса.
        </li>
      </ul>

      <p>
        Понимание Virtual DOM помогает лучше осознать, как именно React
        обновляет интерфейс и почему он так эффективен.
      </p>
    </article>
  );
};

export default VirtualDOM;
