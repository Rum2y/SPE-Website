import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import "./calendar.css";

export default function Calendar() {
  const apiKey = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;
  const apiId = import.meta.env.VITE_GOOGLE_CALENDAR_ID;

  const formatEventDates = (event) => {
    const start =
      event.start.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const end = event.end
      ? event.end.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
      : start;
    return { start, end };
  };

  const getEventDetails = (event) => {
    const { start, end } = formatEventDates(event);
    const title = event.title;
    const description = event.extendedProps.description || "";
    const location = event.extendedProps.location || "";
    return { start, end, title, description, location };
  };

  const handleMouseEnter = (info) => {
    info.jsEvent.preventDefault();
    const { title, location, start, end } = getEventDetails(info.event);

    const eventDetails = `
      <div>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Start:</strong> ${info.event.start.toLocaleString()}</p>
        <p><strong>End:</strong> ${info.event.end ? info.event.end.toLocaleString() : "Not available"}</p>
      </div>
    `;

    info.jsEvent.target.setAttribute("data-tooltip-id", "my-tooltip");
    info.jsEvent.target.setAttribute("data-tooltip-content", eventDetails);
  };

  const handleEventClick = (info) => {
    info.jsEvent.preventDefault();
    const { start, end, title, description, location } = getEventDetails(
      info.event
    );

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${start}/${end}&details=${encodeURIComponent(
      description
    )}&location=${encodeURIComponent(location)}`;

    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <div className="w-[800px]">
          <FullCalendar
            plugins={[dayGridPlugin, googleCalendarPlugin]}
            googleCalendarApiKey={apiKey}
            events={{ googleCalendarId: apiId }}
            initialView="dayGridMonth"
            contentHeight={"auto"}
            eventMouseEnter={handleMouseEnter}
            eventClick={handleEventClick}
          />
        </div>
        <Tooltip
          id="my-tooltip"
          style={{
            zIndex: 1000,
            backgroundColor: "rgba(255, 255, 255, 1)",
            color: "black",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            padding: "10px",
          }}
          render={({ content }) => (
            <span dangerouslySetInnerHTML={{ __html: content }} />
          )}
        />
      </div>
    </>
  );
}
