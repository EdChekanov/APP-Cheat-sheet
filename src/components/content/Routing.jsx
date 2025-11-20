import CodeBlock from '../CodeBlock';

const Routing = () => {
  return (
    <article>
      <h2>Маршрутизация (Routing) в React</h2>
      <p>
        Роутинг в React позволяет создавать несколько страниц и навигацию без
        перезагрузки браузера, управляя отображением компонентов в зависимости
        от URL.
      </p>

      <h3>Базовая настройка с react-router-dom v6</h3>
      <CodeBlock
        code={`import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Главная страница</h2>;
}

function About() {
  return <h2>О нас</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Главная</Link> | <Link to="/about">О нас</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`}
      />

      <h3>Вложенные маршруты и Outlet</h3>
      <p>Для организации вложенной навигации:</p>
      <CodeBlock
        code={`import { Outlet, Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Панель управления</h2>
      <nav>
        <Link to="profile">Профиль</Link> | <Link to="settings">Настройки</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function Profile() {
  return <h3>Профиль пользователя</h3>;
}

function Settings() {
  return <h3>Настройки</h3>;
}`}
      />

      <h3>Пример конфигурации вложенных маршрутов</h3>
      <CodeBlock
        code={`<Routes>
  <Route path="dashboard" element={<Dashboard />}>
    <Route path="profile" element={<Profile />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>`}
      />

      <h3>Навигация по ссылкам с Link</h3>
      <CodeBlock
        code={`import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
    </nav>
  );
}`}
      />

      <h3>useParams</h3>
      <p>Получение параметров маршрута:</p>
      <CodeBlock
        code={`import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();
  return <div>Товар ID: {id}</div>;
}`}
      />

      <h3>useNavigate</h3>
      <p>Программная навигация (переход по маршрутам):</p>
      <CodeBlock
        code={`import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('/login')}>
      Выйти
    </button>
  );
}`}
      />

      <h3>useLocation</h3>
      <p>Получение текущего URL и состояния маршрута:</p>
      <CodeBlock
        code={`import { useLocation } from 'react-router-dom';

function CurrentPath() {
  const location = useLocation();
  return <div>Текущий путь: {location.pathname}</div>;
}`}
      />

      <p>
        React Router — мощный инструмент, который упрощает создание SPA с
        удобной навигацией и динамическими маршрутами.
      </p>
    </article>
  );
};

export default Routing;
