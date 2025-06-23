'use client';

interface DatesProps {
  year: number;
  month: number;
}

const Dates: React.FC<DatesProps> = ({ year, month }) => {
  const lastDate = new Date(year, month + 1, 0).getDate();

  const dates = Array.from({ length: lastDate }, (v, i) => i + 1);

  const handleClickOpenDialog = () => {
    alert('open');
  };

  return (
    <>
      <div className="grid grid-cols-7 gap-4 w-full p-4">
        {dates.map((day) => (
          <button
            key={day}
            className='text-center inline-block text-red cursor-pointer'
            onClick={handleClickOpenDialog}
          >
            {day}
          </button>
        ))}
        <div className='background-color' />
      </div>
      <dialog>
        <button>close</button>
        <div>
          Record your alcohol !
        </div>
      </dialog>
    </>
  );
}

export default Dates;
