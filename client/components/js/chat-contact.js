import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.viewAssignmentDashboard.events({
  'click .js-chat-contact': function(e) {
   $('.chatchat-contact').toggleClass('open open-contact');
   $('.js-chat-contact-show').toggleClass('open');
   if($('.js-chat').hasClass('open-chat2')){
     $('.js-chat').toggleClass('open open-chat2');
     $('.js-chatbot-show').toggleClass('open open-chat2');
   }
   if($('.option').hasClass('open')){
     $('.option').removeClass('open');
   }
  //  $('.js-chat').toggleClass('open open-chat2');
  //  $('js-chat-contact-show').toggleClass('open');

 },

 'click .close' : function(e){
   $('.js-chat-contact-show').removeClass('open');
   $('.chatchat-contact').removeClass('open');
   if ($('.js-skype-content').hasClass('open')){
       $('.js-skype-content').addClass('hidden');
   }
   if($('.js-icon1').hasClass('active')){
     $('.js-icon1').removeClass('active');
   }
   if ($('.js-call-content').hasClass('open')){
      $('.js-call-content').addClass('hidden');
   }
   if($('.js-icon2').hasClass('active')){
     $('.js-icon2').removeClass('active');
   }
   if($('.option').hasClass('open')){
     $('.option').removeClass('open')
   }
 },

 'click .js-more-option': function(e){
   $('.option').toggleClass('open');
   if ($('.js-skype-content').hasClass('open')){
       $('.js-skype-content').addClass('hidden');
   }
   if($('.js-icon1').hasClass('active')){
     $('.js-icon1').removeClass('active');
   }
   if ($('.js-call-content').hasClass('open')){
      $('.js-call-content').addClass('hidden');
   }
   if($('.js-icon2').hasClass('active')){
     $('.js-icon2').removeClass('active');
   }
 },

 'click .js-skype': function(e){
   $('.js-skype-content').toggleClass('hidden');
   $('.js-skype-content').addClass('open');
   $('.js-icon1').toggleClass('active');
   if ($('.js-skype-content').hasClass('open')){
      $('.js-call-content').addClass('hidden');
   }
   if($('.js-icon2').hasClass('active')){
     $('.js-icon2').removeClass('active');
   }
 },
 'click .js-call': function(e){
   $('.js-call-content').toggleClass('hidden');
   $('.js-call-content').addClass('open');
   $('.js-icon2').toggleClass('active');
    if ($('.js-call-content').hasClass('open')){
       $('.js-skype-content').addClass('hidden');
    }
    if($('.js-icon1').hasClass('active')){
      $('.js-icon1').removeClass('active');
    }
    //if $('.js-icon1').hasClass('active').removeClass('active');
 },
 'click .js-return': function(e){
   $('.js-call-content').toggleClass('hidden');
   $('.js-icon1').removeClass('active');
   $('.js-icon2').removeClass('active');
   $('.js-skype-content').addClass('hidden');
   $('.js-call-content').addClass('hidden');
   $('.option').toggleClass('open');
 },

 'click .js-chat-box': function(e) {
   $('.js-chat-contact-show').removeClass('open');
   $('.chatchat-contact').removeClass('open');
 },


});
