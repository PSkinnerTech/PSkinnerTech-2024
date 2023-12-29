import { useState } from "react";
import Calendar from "./calendar";

const CalButton = ({
  secondaryText,
  color = "#181818",
  children,
}: {
  secondaryText?: string;
  color?: string;
  children?: React.ReactNode;
}) => {
  const [isCalendarVisible, setCalendarVisibility] = useState(false);

  const toggleCalendarVisibility = () => {
    setCalendarVisibility(!isCalendarVisible);
  };

  return (
    <>
      {!isCalendarVisible && (
        <div className="flex items-center mt-3 bg-transparent justify-center ">
          <div
            style={{
              backgroundColor: color,
              cursor: "pointer",
            }}
            className="flex items-center gap-1 py-3  px-3 font-medium text-white rounded-2xl max-w-fit mt-2 md:col-span-1 col-span-2 row-span-2 md:py-4 shadow-grid flex-col justify-center @container "
            onClick={toggleCalendarVisibility}
          >
            <span className="text-base">Open Calendar</span>
          </div>
        </div>
      )}
      {isCalendarVisible && (
        <Calendar
          isCalendarVisible={isCalendarVisible}
          toggleCalendarVisibility={toggleCalendarVisibility}
        />
      )}
    </>
  );
};

export default CalButton;
