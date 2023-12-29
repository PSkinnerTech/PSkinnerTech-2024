import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
// @ts-ignore
const Calendar = ({ isCalendarVisible, toggleCalendarVisibility }) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      console.log("calprint", getCalApi);
    })();
  }, []);

  return (
    <>
      {!isCalendarVisible && (
        <div
          style={{
            backgroundColor: "#111111",
          }}
          className="flex items-center gap-1 text-sm font-medium text-white rounded-lg max-w-fit"
          onClick={toggleCalendarVisibility}
        ></div>
      )}
      {isCalendarVisible && (
        <Cal
          namespace="coffee-time"
          calLink="pskinnertech/coffee-time"
          style={{
            width: "100%",
            height: "100%",
            overflow: "scroll",
            padding: "2em",
          }}
          config={{ layout: "month_view" }}
        />
      )}
    </>
  );
};

export default Calendar;
