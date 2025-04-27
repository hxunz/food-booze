const Dates: React.FC = () => {
  const current = new Date();

  const year = current.getFullYear();
  const month = current.getMonth();

  const lastDate = new Date(year, month + 1, 0).getDate();

  const dates = Array.from({ length: lastDate }, (v, i) => i + 1);

  return (
    <div className="grid grid-cols-7 gap-4 w-full">
      {dates.map((day) => (
        <div key={day} className='text-center inline-block text-red'>{day}</div>
      ))}
      <div className='background-color' />
    </div>
  );
}

export default Dates;
