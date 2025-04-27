const Dates: React.FC = () => {
  const dates = Array.from({ length: 31 }, (v, i) => i + 1);

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
