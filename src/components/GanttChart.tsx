// import { useState } from "react";
// import { Scheduler, Event } from "@bitnoi.se/react-scheduler";

// const GanttChart = () => {
//   const [events, setEvents] = useState([
//     {
//       id: 1,
//       title: "Planning",
//       start: "2024-09-15T09:00:00",
//       end: "2024-09-30T17:00:00",
//     },
//     {
//       id: 2,
//       title: "Design",
//       start: "2024-09-30T09:00:00",
//       end: "2024-10-15T17:00:00",
//     },
//     {
//       id: 3,
//       title: "Development",
//       start: "2024-10-15T09:00:00",
//       end: "2024-11-05T17:00:00",
//     },
//     {
//       id: 4,
//       title: "Testing & Launch",
//       start: "2024-11-05T09:00:00",
//       end: "2024-11-15T17:00:00",
//     },
//   ]);

//   const handleEventChange = (updatedEvent) => {
//     // You can handle event changes like drag or resize here
//     setEvents((prevEvents) =>
//       prevEvents.map((event) => (event.id === updatedEvent.id ? updatedEvent : event))
//     );
//   };

//   return (
//     <Scheduler
//       events={events}
//       onEventChange={handleEventChange}
//       view="week" // You can choose other views like "day", "month", etc.
//     >
//       {events.map((event) => (
//         <Event key={event.id} event={event} />
//       ))}
//     </Scheduler>
//   );
// };

// export default GanttChart;
