import SingerItem from './SingerItem';

const SingerList = () => {
  const singers = [
    { id: 1, name: 'Mỹ Tâm', city: 'Đà Nẵng' },
    { id: 2, name: 'Sơn Tùng MTP', city: 'Thái Bình' },
    { id: 3, name: 'Kiên Trịnh', city: 'Quảng Nam' },
  ];
  return (
    <ul className='space-y-4'>
      {singers.map((singer, index) => (
        <SingerItem name={singer.name} city={singer.city} key={index} />
      ))}
    </ul>
  );
};
export default SingerList;
