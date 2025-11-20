import CodeBlock from '../CodeBlock';

const HOC = () => {
  return (
    <article>
      <h2>Что такое HOC (Higher-Order Component) в React?</h2>
      <p>
        HOC — это функция, которая принимает компонент и возвращает новый
        компонент с расширенными возможностями. Это паттерн для повторного
        использования логики между компонентами.
      </p>

      <h3>Основы создания HOC</h3>
      <CodeBlock
        code={`function withExtraProps(WrappedComponent) {
  return function EnhancedComponent(props) {
    return <WrappedComponent extra="Добавлено из HOC" {...props} />;
  };
}`}
      />

      <h3>Использование HOC</h3>
      <CodeBlock
        code={`const EnhancedButton = withExtraProps(Button);

<EnhancedButton onClick={() => alert('Hi!')} />`}
      />

      <h3>Пример реального HOC – подписка на данные</h3>
      <CodeBlock
        code={`function withSubscription(WrappedComponent, selectData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: selectData(props) };
      this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
      DataSource.addChangeListener(this.handleChange);
    }
    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }
    handleChange() {
      this.setState({ data: selectData(this.props) });
    }
    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}`}
      />

      <p>
        HOC сохраняют неизменность оборачиваемого компонента и расширяют его
        функциональность, позволяя применять композицию вместо наследования и
        мутаций.
      </p>
    </article>
  );
};

export default HOC;
