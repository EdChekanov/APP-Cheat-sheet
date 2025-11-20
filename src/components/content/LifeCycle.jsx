import CodeBlock from '../CodeBlock';

const LifeCycle = () => {
  return (
    <article>
      <h2>Жизненный цикл компонента в React</h2>
      <p>
        В React компоненты проходят через несколько фаз: монтирование,
        обновление и размонтирование. Понимание их помогает управлять поведением
        приложения и оптимизировать его работу.
      </p>

      <h3>Фаза 1: монтирование</h3>
      <p>
        Этот этап происходит, когда компонент впервые добавляется в DOM. Для
        классовых компонентов используются методы:
      </p>
      <ul>
        <li>
          <strong>constructor</strong> — инициализация состояния
        </li>
        <li>
          <strong>componentDidMount</strong> — запуск действий после вставки в
          DOM (например, запросы к API)
        </li>
      </ul>
      <p>Пример:</p>
      <CodeBlock
        code={`class MyComponent extends React.Component {
  componentDidMount() {
    // Запрос данных или иная логика
  }
  render() {
    return <div>Hello</div>;
  }
}`}
      />

      <h3>Фаза 2: обновление</h3>
      <p>
        Происходит при изменении props или state компонента. Основные методы:
      </p>
      <ul>
        <li>
          <strong>shouldComponentUpdate</strong> — контроль, нужно ли обновлять
          компонент
        </li>
        <li>
          <strong>componentDidUpdate</strong> — реакции после обновления
        </li>
      </ul>
      <p>Пример:</p>
      <CodeBlock
        code={`shouldComponentUpdate(nextProps, nextState) {
  return nextState.counter !== this.state.counter;
}`}
      />

      <h3>Фаза 3: размонтирование</h3>
      <p>Когда компонент удаляется из DOM, вызывается метод:</p>
      <ul>
        <li>
          <strong>componentWillUnmount</strong> — очистка ресурсов, остановка
          таймеров и т.п.
        </li>
      </ul>
      <p>Пример:</p>
      <CodeBlock
        code={`componentWillUnmount() {
  clearInterval(this.timerID);
}`}
      />

      <h3>Функциональные компоненты и хуки</h3>
      <p>В современном React используют хуки:</p>
      <ul>
        <li>
          <strong>useEffect</strong> — замена методов жизненного цикла
        </li>
      </ul>
      <p>Пример:</p>
      <CodeBlock
        code={`useEffect(() => {
  // Ваш код, например, API вызов
  return () => {
    // Очистка, например, отмена таймера
  };
}, [dependencies]);`}
      />

      <p>
        Понимание жизненного цикла помогает управлять состоянием и побочными
        эффектами в приложении.
      </p>
    </article>
  );
};

export default LifeCycle;
