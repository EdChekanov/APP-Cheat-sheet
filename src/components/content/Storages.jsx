import CodeBlock from '../CodeBlock';

const Storages = () => {
  return (
    <article>
      <h2>Web Storage: LocalStorage, SessionStorage и Cookies</h2>
      <p>
        Эти механизмы позволяют хранить данные в браузере для улучшения
        пользовательского опыта и сохранения состояния.
      </p>

      <h3>LocalStorage</h3>
      <p>Данные сохраняются без срока окончания, доступны между сессиями.</p>
      <CodeBlock
        code={`// Записать данные
localStorage.setItem('username', 'ivan');

// Получить данные
const username = localStorage.getItem('username');

// Удалить данные
localStorage.removeItem('username');

// Очистить все данные
localStorage.clear();`}
      />

      <h3>SessionStorage</h3>
      <p>
        Данные сохраняются только на время текущей сессии (пока вкладка браузера
        открыта).
      </p>
      <CodeBlock
        code={`// Записать данные
sessionStorage.setItem('token', '123abc');

// Получить данные
const token = sessionStorage.getItem('token');

// Удалить данные
sessionStorage.removeItem('token');

// Очистить все данные
sessionStorage.clear();`}
      />

      <h3>Cookies</h3>
      <p>
        Маленькие данные с опциональным временем жизни, отправляемые на сервер с
        каждым запросом.
      </p>
      <CodeBlock
        code={`// Создать cookie на 1 день
document.cookie = "user=ivan; max-age=86400; path=/";

// Получить cookie — проще всего через document.cookie
console.log(document.cookie);

// Удалить cookie путем установки отрицательного max-age
document.cookie = "user=; max-age=0; path=/";`}
      />

      <p>
        Важно учитывать особенности каждого механизма и выбирать их исходя из
        задач по хранению данных.
      </p>
    </article>
  );
};

export default Storages;
