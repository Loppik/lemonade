type DataType = null|undefined|EventType[];
type ErrorType = null|undefined|string;

export interface HomeEventsState {
  data: DataType
  isLoading: boolean
  isError: ErrorType
}

export interface GetHomeEventsAction {
  type: string,
  payload: {
    location?: { longitude: number, latitude: number },
    data?: DataType,
    error?: ErrorType
  }
}

export type EventType = {
  cost: number
  cover: string
  currency: string
  start: string
  host_expanded: {image_avatar: string}
  latitude: number
  longitude: number
  title: string
}

export type HomeEventsActionTypes = GetHomeEventsAction;
