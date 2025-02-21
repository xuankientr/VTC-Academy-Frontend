import Section from './Section';
const MusicPlayer = () => {
  const motChatYeuDoiData = [
    {
      id: 1,
      image: 'https://nhacchuonghinhnen.com/wp-content/uploads/2020/06/hinh-nen-jack-j97-cuc-dep-danh-cho-dien-thoai-va-may-tinh-10.jpg',
      title: 'Ngày Hạnh Phúc',
      subtitle: 'Hãy tận hưởng ngày tràn đầy niềm vui...',
    },
    {
      id: 2,
      image: 'https://nhacchuonghinhnen.com/wp-content/uploads/2020/06/hinh-nen-jack-j97-cuc-dep-danh-cho-dien-thoai-va-may-tinh-10.jpg',
      title: 'Nhạc Giải Trí',
      subtitle: 'Danh sách nhạc giúp bạn giải trí...',
    },
    {
      id: 3,
      image: 'https://nhacchuonghinhnen.com/wp-content/uploads/2020/06/hinh-nen-jack-j97-cuc-dep-danh-cho-dien-thoai-va-may-tinh-10.jpg',
      title: 'V-Pop Tươi Vui',
      subtitle: 'Những ca khúc V-Pop đầy sôi động...',
    },
    {
      id: 4,
      image: 'https://nhacchuonghinhnen.com/wp-content/uploads/2020/06/hinh-nen-jack-j97-cuc-dep-danh-cho-dien-thoai-va-may-tinh-10.jpg',
      title: 'Nhạc Chữa Buồn',
      subtitle: 'Khi bạn cần chút năng lượng tích cực...',
    },
    {
      id: 5,
      image: 'https://nhacchuonghinhnen.com/wp-content/uploads/2020/06/hinh-nen-jack-j97-cuc-dep-danh-cho-dien-thoai-va-may-tinh-10.jpg',
      title: 'Đi Làm Vì Đam Mê',
      subtitle: 'List nhạc đầy năng lượng cho ngày làm việc...',
    },
  ];
  const remixData = [
    {
      id: 6,
      image: 'https://nhacchuonghinhnen.com/wp-content/uploads/2020/06/hinh-nen-jack-j97-cuc-dep-danh-cho-dien-thoai-va-may-tinh-10.jpg',
      title: 'Remix 1',
      subtitle: 'Bùng cháy với nhạc dance sôi động...',
    },
    {
      id: 7,
      image: 'https://nhacchuonghinhnen.com/wp-content/uploads/2020/06/hinh-nen-jack-j97-cuc-dep-danh-cho-dien-thoai-va-may-tinh-10.jpg',
      title: 'Remix 2',
      subtitle: 'Hòa nhịp cùng giai điệu remix...',
    },
    // ... có thể thêm nhiều item khác
  ];
  return (
    <div className='container mx-auto px-4'>
      <Section title='Một Chất Yêu Đời' cards={motChatYeuDoiData} />
      <Section title='Remix Là Dance Luôn' cards={remixData} />
    </div>
  );
};
export default MusicPlayer;
