import Dates from './Dates';
import Days from './Days';

const Calendar: React.FC = () => {
  const current = new Date();

  const year = current.getFullYear();
  const month = current.getMonth() + 1;

  return (
    <div className='flex flex-col items-center justify-center-safe'>
      <div className='text-2xl font-bold m-4'>
        {month}
      </div>
      <div>
        <Days />
        <Dates
          year={year}
          month={month}
        />
      </div>
    </div>
  );
}

export default Calendar;
