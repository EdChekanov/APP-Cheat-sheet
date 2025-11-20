import CodeBlock from '../CodeBlock';

const Optimization = () => {
  return (
    <article>
      <h2>Оптимизация в React</h2>
      <p>
        Оптимизация помогает избежать лишних рендеров и повысить
        производительность приложения. React предоставляет несколько
        инструментов для этого.
      </p>

      <h3>React.memo</h3>
      <p>
        Повышает производительность, мемоизируя результат компонента и
        предотвращая повторные рендеры, если props не изменились.
      </p>
      <CodeBlock
        code={`const MyComponent = React.memo(function(props) {
  return <div>{props.name}</div>;
});`}
      />

      <h3>React.lazy и Suspense</h3>
      <p>
        Позволяют загружать компоненты лениво (по требованию), что уменьшает
        размер первоначального бандла. Suspense показывает запасной UI, пока
        компонент загружается.
      </p>
      <CodeBlock
        code={`const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <React.Suspense fallback={<div>Загрузка...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}`}
      />

      <h3>useMemo</h3>
      <p>
        Меморизирует результат вычислений между рендерами, чтобы не выполнять
        тяжелые операции лишний раз.
      </p>
      <CodeBlock
        code={`const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}
      />

      <h3>useCallback</h3>
      <p>
        Меморизирует функцию, чтобы передавать ее в дочерние компоненты и
        предотвращать их лишние перерисовки.
      </p>
      <CodeBlock
        code={`const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`}
      />

      <h3>Profiler</h3>
      <p>
        Компонент для измерения производительности приложения — позволяет
        понять, какие компоненты и когда рендерятся.
      </p>
      <CodeBlock
        code={`<Profiler id="App" onRender={(id, phase, actualDuration) => {
  console.log({ id, phase, actualDuration });
}}>
  <App />
</Profiler>`}
      />

      <p>
        Использование этих инструментов в комплексе позволяет контролировать и
        уменьшать нагрузку на рендеринг, улучшая UX и скорость работы
        React-приложений.
      </p>
    </article>
  );
};

export default Optimization;
