const NotFound = () => {
  return (
    <article style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>😵 404 — Страница не найдена</h1>
      <p>Похоже, вы заблудились! Такой страницы у нас нет.</p>
      <p>Но не волнуйтесь, даже карта сокровищ иногда ведет в тупик.</p>
      <img
        src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
        alt="Confused animated"
        style={{ maxWidth: '300px', margin: '1rem auto', display: 'block' }}
      />
      <p>
        Попробуйте вернуться на&nbsp;
        <a href="/" style={{ color: '#007acc', textDecoration: 'none' }}>
          главную страницу
        </a>
        &nbsp;и начать заново.
      </p>
    </article>
  );
};

export default NotFound;
