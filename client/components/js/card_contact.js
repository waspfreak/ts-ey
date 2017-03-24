const employeeContacts = [
  {

    imageUrl: "images/Ricardo-Fortissimo.jpg",
    name: "Ricardo Fortissimo",
    jobTitle: "Immigration Adviser"
  },
  {
    imageUrl: "images/natasha_dsouza.jpg",
    name: "Natasha D'Souza",
    jobTitle: "Home Mobility Manager"
  }
];


Template.dashboard.helpers({
  contacts: [
    {
      imageUrl: "images/Ricardo-Fortissimo.jpg",
      name: "Jonas Müller",
      jobTitle: "Mobility Manager, EY"
    }
  ]
});

Template.dashboard.helpers({
  contacts: employeeContacts
});

Template.dashboardEmployeeOn.helpers({
  contacts: employeeContacts
});

Template.repatriationEmployee.helpers({
  contacts: employeeContacts
});

Template.dashboardMobilityManager.helpers({
  contacts: [
    {
      imageUrl: "images/Jonas-Muller.jpg",
      name: "Jonas Müller",
      jobTitle: "Mobility Manager, EY"
    }
  ]
});

Template.dashboardHeadOfMobility.helpers({
  contacts: [
    {
      imageUrl: "images/Paula-Mancini.jpg",
      name: "Paula Mancini",
      jobTitle: "EY Partner"
    }
  ]
});

Template.viewAssignmentDashboard.helpers({
  contacts: [
    {
      imageUrl: "images/amanda-graves.jpg",
      name: "Amanda Graves",
      jobTitle: "Home Mobility Manager"
    },
    {
      imageUrl: "images/alan-strickland.jpg",
      name: "Alan Strickland",
      jobTitle: "Home Mobility Manager"
    },
    {
      imageUrl: "images/diana-kraub.png",
      name: "Diana Krauß",
      jobTitle: "Tax Adviser",
      jsClass: "js-chat-contact" //Js classs use to open chatbot only not style this class
    }
  ]
});

Template.insight.helpers({
  contacts: [
    {
      imageUrl: "images/Jeremy-Smiths.jpg",
      name: "Jeremy Smiths",
      jobTitle: "EY Analytics Team"
    }
  ]
});
