import { Template } from 'meteor/templating';

Template.calendar.onCreated(function() {
  this.currentCard = new ReactiveVar("calendarCardState1");
});

Template.calendar.helpers({
  cardMap: function() {
    return Template.instance().currentCard.get();
  }
});

Template.calendar.events({
  'click .add-sources' : () => {
    $('.calendar-sources-modal.overlay').addClass('show');
  },
  'click .modal-link' : () => {
    $('.calendar-date-modal.overlay').addClass('show');
  },
  'click .close' : () => {
    $('.calendar-sources-modal.overlay').removeClass('show');
    $('.calendar-date-modal.overlay').removeClass('show');
  },
  'click .outlook-link' : (event, template) => {
    $('.calendar-sources-modal.overlay').removeClass('show');
    template.currentCard.set("calendarCardState2");
  },
  'click .add-tracer-entry' : (event, template) => {
    template.currentCard.set("calendarCardState3");
  },
  'click .add-device-entry' : (event, template) => {
    template.currentCard.set("calendarCardState4");
  },
  'click .add-outlook-entry' : (event, template) => {
    template.currentCard.set("calendarCardState5");
  },
  'click .add-verify-entry' : (event, template) => {
    template.currentCard.set("calendarCardState6");
  },
  'click .full-year-summary-option' : (event, template) => {
    template.currentCard.set("calendarCardFullYear");
  },
  'click .monthly-view-option' : (event, template) => {
    template.currentCard.set("calendarCardState6");
  }
});

Template.modalSources.helpers({
  smallCards: function() {
    return [
      {
        title: 'EY TRACer',
        text: 'Use EY’s proprietary smartphone app to provide GPS data for location inputs',
        activated: true,
        icon: true
      },
      {
        title: 'Outlook calendar',
        text: 'Look up event information from an Outlook calendar for time and activity inputs',
        outlook: true
      },
      {
        title: 'Travel history',
        text: 'Use known travel data to validate location input',
      },
      {
        title: 'Google calendar',
        text: 'Look up event information from a Google calendar for time and activity inputs',
      },
      {
        title: 'Device location',
        text: 'Use GPS data to validate location input',
        activated: true
      },
      {
        title: 'Sync timesheets',
        text: 'Use your timesheet data for time and activity inputs',
      }
    ];
  }
});
