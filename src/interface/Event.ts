interface Event {
  date: Date;
  title: string;
  address: string;
}

export interface EventsProps {
  events: Event[];
}