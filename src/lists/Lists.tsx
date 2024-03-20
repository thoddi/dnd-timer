import DurationList from "./durations/DurationList";
import EventList from "./events/EventList";
import SpeedList from "./speeds/SpeedList";

function Lists() {
  return (
    <div className="lists">
      <SpeedList></SpeedList>
      <hr />
      <DurationList></DurationList>
      <hr />
      <EventList></EventList>
    </div>
  );
}

export default Lists;