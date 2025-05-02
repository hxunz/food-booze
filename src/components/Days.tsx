const Days: React.FC = () => {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  return (
    <div className="grid grid-cols-7 gap-4 w-full font-bold">
      {days.map((day) => (
        <div key={day} className='text-center inline-block text-red'>{day}</div>
      ))}
      <div className='background-color' />
    </div>
  );
}

export default Days;
