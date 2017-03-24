Template.calendarEntriesDeviceCard.onCreated(function() {
  this.currentCard = new ReactiveVar("calendarEntriesDevice1");
});

Template.calendarEntriesDeviceCard.helpers({
  cardMap: function() {
    return Template.instance().currentCard.get();
  }
});

Template.calendarEntriesDeviceCard.events({
  'click .work-option': function(event, template) {
    template.currentCard.set("calendarEntriesDevice2");
  },
});
