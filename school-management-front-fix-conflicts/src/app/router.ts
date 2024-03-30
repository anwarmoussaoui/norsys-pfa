import RouterType from "./routerType";

export const routes: RouterType[] = [
  {
    id: 1,
    groupTitle: 'Organisation',
    group: 'Administration',
    isOpen: false,
    subGroup: [
      {
        id: 1,
        title: 'Suivi académique',
        route: 'students',
        active: false,
      },
      {
        id: 2,
        title: 'Gestion du personnel',
        route: 'staff',
        active: false,
      },
      {
        id: 3,
        title: 'Congés et absences',
        route: 'absence/cards',
        active: false,
      },
      {
        id: 4,
        title: 'Administration des groupes',
        route: 'groups',
        active: false,
      },
      /*{
        id: 5,
        title: 'Horaires et emplois du temps',
        route: '.',
        active: false,
      }*/
    ]
  },

];
