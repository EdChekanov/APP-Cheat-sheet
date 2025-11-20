import CodeBlock from '../CodeBlock';

const Events = () => {
  return (
    <article>
      <h2>События (Events) в React</h2>
      <p>
        React использует собственную систему обработки событий — синтетические
        события (Synthetic Events), которые оборачивают нативные браузерные
        события. Это обеспечивает кроссбраузерность и единый интерфейс.
      </p>

      <h3>Обработчик события onClick</h3>
      <CodeBlock
        code={`function Button() {
  function handleClick() {
    alert('Кнопка нажата!');
  }

  return (
    <button onClick={handleClick}>
      Нажми меня
    </button>
  );
}`}
      />

      <h3>Передача аргументов в обработчик</h3>
      <CodeBlock
        code={`<button onClick={(e) => handleClick(e, 'аргумент')}>Нажми меня</button>`}
      />

      <h3>Синтетическое событие</h3>
      <p>
        Все обработчики получают объект синтетического события с теми же
        свойствами и методами, что и нативные события, но с кроссбраузерной
        поддержкой.
      </p>

      <h3>Обработка событий формы</h3>
      <CodeBlock
        code={`function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Форма отправлена');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Отправить</button>
    </form>
  );
}`}
      />

      <h3>Основные методы события</h3>
      <ul>
        <li>
          <code>e.preventDefault()</code> — отменяет действие браузера по
          умолчанию
        </li>
        <li>
          <code>e.stopPropagation()</code> — останавливает распространение
          события
        </li>
      </ul>

      <p>
        Использование событий в React похоже на обычные DOM-события, но с
        преимуществами синтетических событий и декларативного синтаксиса JSX.
      </p>
    </article>
  );
};

export default Events;
