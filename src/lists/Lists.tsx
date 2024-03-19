import DurationList from "./DurationList";
import EventList from "./EventList";
import SpeedList from "./SpeedList";

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