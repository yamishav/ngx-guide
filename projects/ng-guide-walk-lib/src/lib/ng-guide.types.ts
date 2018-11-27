export type eventType = 'open' | 'close';

export interface WalkEvent {
  step: number;
  event: eventType;
}

