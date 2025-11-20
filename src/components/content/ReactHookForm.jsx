import CodeBlock from '../CodeBlock';

const ReactHookForm = () => {
  return (
    <article>
      <h2>React Hook Form - Быстрая и удобная работа с формами в React</h2>
      <p>
        React Hook Form — библиотека для простого и эффективного управления
        формами в React с минимальным повторением кода. Использует React хуки
        для управления состоянием и валидацией форм.
      </p>

      <h3>Установка</h3>
      <CodeBlock code={`npm install react-hook-form`} />

      <h3>Базовый пример использования</h3>
      <CodeBlock
        code={`import { useForm } from 'react-hook-form';

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName', { required: true })} placeholder="Имя" />
      {errors.firstName && <p>Это поле обязательно</p>}

      <input type="submit" />
    </form>
  );
}`}
      />

      <h3>Регистрация полей</h3>
      <p>
        Функция <code>register</code> связывает input с механизмом валидации и
        состоянием формы.
      </p>

      <h3>Обработка ошибок валидации</h3>
      <p>
        В объекте <code>errors</code> содержатся ошибки по каждому полю, можно
        выводить сообщения.
      </p>

      <h3>Пример с валидацией email</h3>
      <CodeBlock
        code={`<input 
  {...register('email', { required: 'Email обязателен', pattern: { value: /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/, message: 'Некорректный email' } })} 
  placeholder="Email" 
/>
{errors.email && <p>{errors.email.message}</p>}`}
      />

      <h3>Контроль чекбоксов и radio</h3>
      <CodeBlock
        code={`<input type="checkbox" {...register('agree')} />
<label>Согласен с условиями</label>

<input type="radio" value="male" {...register('gender')} /> Мужской
<input type="radio" value="female" {...register('gender')} /> Женский`}
      />

      <p>
        React Hook Form минимизирует перерендеры и значительно упрощает работу с
        формами и их валидацией в React.
      </p>
    </article>
  );
};

export default ReactHookForm;
