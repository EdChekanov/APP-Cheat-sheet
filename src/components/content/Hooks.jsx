import CodeBlock from '../CodeBlock';

const Hooks = () => {
  return (
    <article>
      <h2>React Hooks: useId, useReducer, useTransition, useOptimistic</h2>

      <h3>useId</h3>
      <p>
        Генерирует уникальный стабильный ID, полезен для атрибутов доступности и
        связывания элементов.
      </p>
      <CodeBlock
        code={`import { useId } from 'react';

function Form() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Имя:</label>
      <input id={id} type="text" />
    </>
  );
}`}
      />

      <h3>useReducer</h3>
      <p>Альтернатива useState для сложной логики состояния с редьюсером.</p>
      <CodeBlock
        code={`import { useReducer } from 'react';

function reducer(state, action) {
  switch(action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <p>Счетчик: {state.count}</p>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}`}
      />

      <h3>useTransition</h3>
      <p>
        Позволяет разгрузить интерфейс, отмечая обновления как "переходные",
        показывая запасной UI.
      </p>
      <CodeBlock
        code={`import { useTransition, useState } from 'react';

function Search() {
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState('');

  function handleChange(e) {
    const value = e.target.value;
    startTransition(() => {
      setQuery(value);
    });
  }

  return (
    <>
      <input onChange={handleChange} />
      {isPending ? <p>Загрузка...</p> : <Results query={query} />}
    </>
  );
}`}
      />

      <h3>useOptimistic</h3>
      <p>
        Хук для оптимистичного обновления UI, изменяет локальное состояние до
        подтверждения результата.
      </p>
      <CodeBlock
        code={`import { useOptimistic } from 'react';

function LikeButton() {
  const [liked, setLiked] = useOptimistic(false);

  function toggleLike() {
    setLiked(!liked);
    // Запускаем асинхронный запрос и корректируем состояние позже, если нужно
  }

  return (
    <button onClick={toggleLike}>
      {liked ? '♥' : '♡'} Нравится
    </button>
  );
}`}
      />
    </article>
  );
};

export default Hooks;
