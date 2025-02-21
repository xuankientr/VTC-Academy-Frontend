import Card from './Card';
import PropTypes from 'prop-types';

const Section = ({ title, cards = [] }) => {
  return (
    <div className='mb-8'>
      <h2 className='text-xl font-bold mb-4'>{title}</h2>

      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {cards.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

// Định nghĩa PropTypes cho Section (chứ không phải cho Card)
Section.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.array,
};

export default Section;
