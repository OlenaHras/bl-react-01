import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

const icons = [
  <FaRegThumbsUp />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiTreeDoor />,
];

export const Statistics = ({ data, title }) => {
  return (
    <>
      <div>
        {title && <StatisticTitle>{title}</StatisticTitle>}

        <StatisticsList>
          {data.map((el, idx) => {
            return (
              <StatisticItem
                key={el.id}
                title={el.title}
                total={el.total}
                icon={icons[idx]}
              />
            );
          })}
        </StatisticsList>
      </div>
    </>
  );
};
