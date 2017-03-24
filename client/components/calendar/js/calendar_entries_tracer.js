Template.calendarEntriesTracerCard.onCreated(function() {
  this.currentCard = new ReactiveVar("calendarEntriesTracer1");
});

Template.calendarEntriesTracerCard.helpers({
  cardMap: function() {
    return Template.instance().currentCard.get();
  }
});

Template.calendarEntriesTracerCard.events({
  'click .work-option': function(event, template) {
    template.currentCard.set("calendarEntriesTracer2");
  },
});
