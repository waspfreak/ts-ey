Template.taxOrganizer.rendered = function() {
  $('.tax-organizer-bar_yellow').animate({
    marginLeft: '0'
  }, 1500);
}

Template.taxOrganizer.events({
  'click .dropdown-progress': function(e) {
   $('.main-box').toggleClass('hidden');
   $('.downTax').toggleClass('hidden');
   $('.upTax').toggleClass('hidden');
 },
 'click .validate': function(event, template){
       var nextModal = template.find('.first');
       if(activeLink){
         nextModal.classList.add('hidden');
       }
 }

});

Template.viewAssignmentDashboard.events({
  'click .open-modal': function(event, template){
    var openModal = template.find('.overlay');
     if(openModal){
       openModal.classList.remove('hidden');
     }
  },
 'click .validate': function(event, template){
       var nextModal = template.find('.first');
       var secModal = template.find('.second');
       var firstBtn = template.find('.first-btn');
       var secBtn = template.find('.sec-btn');
      //  var homeBtn = template.find('.close-btn');
       if(nextModal){
         nextModal.classList.add('hidden');
         secModal.classList.add('show');
         firstBtn.classList.add('hidden');
         secBtn.classList.add('show');
        //  homeBtn.classList.add('hidden');
       }
 },
 'click .close': function(event, template){
   var nextModal = template.find('.second');
   var secModal = template.find('.first');
   var closeModal = template.find('.overlay');
    if(closeModal){
      nextModal.classList.add('hidden');
      secModal.classList.add('show');

      closeModal.classList.add('hidden');
    }
 },
 'click .close': function(event, template){
   var nextModal = template.find('.second');
   var secModal = template.find('.first');
   var firstBtn = template.find('.first-btn');
   var secBtn = template.find('.sec-btn');
   var closeModal = template.find('.overlay');
    if(closeModal){
      nextModal.classList.add('hidden');
      nextModal.classList.remove('show');
      secModal.classList.add('show');
      secModal.classList.remove('hidden');
      firstBtn.classList.add('show');
      firstBtn.classList.remove('hidden');
      secBtn.classList.add('hidden');
      secBtn.classList.remove('show');
      closeModal.classList.add('hidden');
    }
 },
 'click .yes-btn': function(event, template){
   var updateData = template.find('.overlay');
   var updateNumber = template.find('.update-number');
   var updateNumberNext = template.find('.update-number-next');
   var updateNumberFirst = template.find('.update-number-next-fir');
   var updateNumberNextFirst = template.find('.update-number-next-sec');
   var homeBtn = template.find('.close-btn');
    if(updateData){
      updateData.classList.add('hidden');
      updateNumber.classList.add('hidden');
      updateNumberNext.classList.add('show');
      updateNumberFirst.classList.add('hidden');
      updateNumberNextFirst.classList.add('show');
      homeBtn.classList.add('hidden');
    }
 },


});



Template.taxOrganizerlist.helpers({
    item: [
            {
              "title": "Demographics",
              "icon": "check_circle",
              "Iconcolor": "green",
            },
            {
              "title": "Compensation",
              "icon": "check_circle",
              "Iconcolor": "green",
            },
            {
              "title": "Other income",
              "icon": "warning",
              "Iconcolor": "red",
            },
            {
              "title": "Deductions and credit",
              "icon": "check_circle",
              "Iconcolor": "green",
            },
            {
              "title": "Other information",
              "icon": "warning",
              "Iconcolor": "red",
            },
            {
              "title": "Documents",
              "icon": "warning",
              "Iconcolor": "red",
            }
          ],

});
