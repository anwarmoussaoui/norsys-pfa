export default interface RouterType {
  id: number,
  groupTitle: string,
  group: string,
  isOpen: boolean,
  subGroup: {
    id: number,
    title: string,
    route: string,
    active: boolean
  }[]
}
