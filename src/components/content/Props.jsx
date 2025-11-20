import CodeBlock from '../CodeBlock';

const Props = () => {
  return (
    <article>
      <h2>Что такое props в React?</h2>
      <p>
        Props (сокращение от "properties") — это способ передачи данных от
        родительского компонента к дочернему. Они делают компоненты более
        гибкими и переиспользуемыми.
      </p>

      <h3>Пример базового использования props</h3>
      <CodeBlock
        code={`function Welcome(props) {
  return <h1>Привет, {props.name}!</h1>;
}

<Welcome name="Анна" />`}
      />

      <h3>Передача нескольких props</h3>
      <CodeBlock
        code={`function Profile(props) {
  return (
    <div>
      <h2>{props.username}</h2>
      <p>Возраст: {props.age}</p>
    </div>
  );
}

<Profile username="ivan" age={30} />`}
      />

      <h3>Деструктуризация props</h3>
      <CodeBlock
        code={`function Greeting({ name, age }) {
  return <p>Привет, {name}! Тебе {age} лет.</p>;
}

<Greeting name="Максим" age={25} />`}
      />

      <h3>Props доступны только для чтения</h3>
      <p>
        Внутри компонента props нельзя изменять, они доступны только для чтения.
        Если нужно изменять данные — используйте <code>state</code>.
      </p>
    </article>
  );
};

export default Props;
