import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';

const DatePickerWrapper = () => {
  const [startDate, setStartDate] = useState();
  const ExampleCustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
    <input
      value={value}
      className="example-custom-input"
      onClick={onClick}
      onChange={onChange}
      ref={ref}
    />
  ));
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
      dayClassName={() => 'example-datepicker-day-class'}
      popperClassName="example-datepicker-class"
      todayButton="TODAY"
    />
  );
};

DatePickerWrapper.displayName = 'DatePicker';

export default DatePickerWrapper;
