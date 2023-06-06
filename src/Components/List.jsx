import iconList from '../../assets/images/icon-list.svg';

export function List() {
  const updates = [
    { key: 1, desc: 'Product discovery and building what matters' },
    { key: 2, desc: 'Measuring to ensure updates are a success' },
    { key: 3, desc: 'And much more!' },
  ];

  return (
    <ul>
      {updates.map((update) => (
        <li key={update.key}>
          <img src={iconList} /> {update.desc}
        </li>
      ))}
    </ul>
  );
}
