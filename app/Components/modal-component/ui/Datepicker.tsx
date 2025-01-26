import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface DatePickerProps {
  onDateSelect?: (date: Date) => void;
  className?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ onDateSelect, className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [year, setYear] = useState<number>(selectedDate.getFullYear());
  const [month, setMonth] = useState<number>(selectedDate.getMonth());

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
  ];

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '-');
  };

  const createButton = (text: number, isDisabled: boolean = false, type: number = 0): React.ReactElement => {
    const currentDate = new Date();
    const comparisonDate = new Date(year, month + type, text);

    const isToday = 
      currentDate.getDate() === text &&
      currentDate.getFullYear() === year &&
      currentDate.getMonth() === month;

    const isSelected = selectedDate.getTime() === comparisonDate.getTime();

    return (
      <button
        key={`${text}-${type}`}
        disabled={isDisabled}
        className={`
          aspect-square rounded-[8px] text-[12px]
          ${isDisabled ? 'opacity-50 cursor-not-allowed text-gray-400' : 'text-black hover:bg-gray-400'}
          ${isToday && !isDisabled ? 'bg-purple-100 text-purple-600' : ''}
          ${isSelected ? 'bg-black text-white' : ''}
        `}
        onClick={() => !isDisabled && handleDateClick(comparisonDate)}
      >
        {text}
      </button>
    );
  };

  const displayDates = (): React.ReactElement[] => {
    const buttons: React.ReactElement[] = [];

    // Previous month's dates
    const lastOfPrevMonth = new Date(year, month, 0);
    for (let i = 0; i <= lastOfPrevMonth.getDay(); i++) {
      const text = lastOfPrevMonth.getDate() - lastOfPrevMonth.getDay() + i;
      buttons.push(createButton(text, true, -1));
    }

    // Current month's dates
    const lastOfMonth = new Date(year, month + 1, 0);
    for (let i = 1; i <= lastOfMonth.getDate(); i++) {
      buttons.push(createButton(i, false));
    }

    // Next month's dates
    const firstOfNextMonth = new Date(year, month + 1, 1);
    for (let i = firstOfNextMonth.getDay(); i < 7; i++) {
      const text = firstOfNextMonth.getDate() - firstOfNextMonth.getDay() + i;
      buttons.push(createButton(text, true, 1));
    }

    return buttons;
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    onDateSelect?.(date);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <input 
        type="text" 
        className={`w-full p-2 border rounded-md text-[12px] text-[#3A3A3AB2] focus:ring-[#0E0E0F] focus:border-purple-200 ${className}`}
        placeholder=""
        value={formatDate(selectedDate)}
        onClick={() => setIsOpen(true)}
        readOnly
      />
      {isOpen && (
        <div className="absolute h-64 top-full z-50 mt-1 px-4 py-2 bg-white border rounded-[16px] shadow-lg">
          <div className="flex items-center justify-between mb-2 text-[12px] pb-2 border-b">
            <button 
              className="text-slate-600 text-[12px] hover:text-purple-200"
              onClick={() => {
                const prevMonth = month === 0 ? 11 : month - 1;
                const prevYear = month === 0 ? year - 1 : year;
                setMonth(prevMonth);
                setYear(prevYear);
              }}
            >
              <MdKeyboardArrowLeft />
            </button>
            <div className="flex items-center space-x-2">
              <select 
                className="text-[12px] border rounded px-2 py-1 w-full"
                value={`${months[month]}`}
                onChange={(e) => setMonth(months.indexOf(e.target.value))}
              >
                {months.map(m => (
                  <option key={m} value={m}>{m} {year}</option>
                ))}
              </select>
            </div>
            <button 
              className="text-slate-600 text-[12px] hover:text-[#0E0E0F]"
              onClick={() => {
                const nextMonth = month === 11 ? 0 : month + 1;
                const nextYear = month === 11 ? year + 1 : year;
                setMonth(nextMonth);
                setYear(nextYear);
              }}
            >
              <MdKeyboardArrowRight/>
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <span key={day} className="text-[12px] font-semibold text-slate-900">{day}</span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {displayDates()}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;