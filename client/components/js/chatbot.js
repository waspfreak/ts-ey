import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

let clearChat = () => {
  $('#chat-input').val('');
  $('#chat-answer').text('');
  $('.help-docs').remove();
  $('#chat-answer-container').removeClass('show');
  $('#chat-question-container').removeClass('show');
};

Template.chatbot.events({
  'click .js-chat-box': function(e) {
    //clearChat();
    $('.js-chatbot-show').toggleClass('open open-chat2');
    $('.js-chat').toggleClass('open open-chat2');
    $('js-chat-contact-show').toggleClass('open');
 },
 'click .close' : function(e){
   $('.js-chatbot-show').removeClass('open open-chat2');
   $('.js-chat').removeClass('open open-chat2');
 }
});


Template.chatLive.events({
  'click #chat-submit': function(event, template) {
    var showQuestion = () => {
      $('#chat-question-container').addClass('show');
    };
    var showAnswer = () => {
      $('#chat-answer-container').addClass('show');
    };

    let hasNoAttachment = $('.help-docs.attachment').length === 0;

    var question = $('#chat-input').val();
    var cont1 = "<div class='help-docs chat-line_bloc documentation'><div class='chat-live_answer'><span class='icon'><i class='material-icons'>chat_bubble_outline</i></span><p class='content documentation'><i class='material-icons icon-left'>local_library</i><span>Brazil: Tax 2017</span><small>Domestic Tax Guidance</small><i class='material-icons icon-right'>chevron_right</i></p></div></div>";
    var cont2 = "<div class='help-docs chat-line_bloc documentation'><div class='chat-live_answer'><span class='icon'><i class='material-icons'>chat_bubble_outline</i></span><p class='content documentation'><i class='material-icons icon-left'>library_books</i><span>EY: Brazil Tax</span><small>Non-Resident Tax Guide</small><i class='material-icons icon-right'>chevron_right</i></p></div></div>";
    var cont3 = "<div class='help-docs chat-line_bloc documentation'><div class='chat-live_answer'><span class='icon'><i class='material-icons'>chat_bubble_outline</i></span><p class='content documentation'><img class='avatar'src='./images/julio-cesar.png'><span>Julio Cesar</span> <small>Brazil Tax Adviser</small><i class='material-icons icon-right'>chevron_right</i></p></div></div>"
    var dianaContact = "<div class='help-docs chat-line_bloc documentation attachment'><div class='chat-live_answer'><span class='icon'><i class='material-icons'>chat_bubble_outline</i></span><p class='content documentation'><img class='avatar'src='./images/diana-kraub.png'><span>Diana Krauβ</span> <small>Tax Adviser</small><i class='material-icons icon-right'>chevron_right</i></p></div></div>";
    var valerieBottas = "<div class='help-docs chat-line_bloc documentation attachment'><div class='chat-live_answer'><span class='icon'><i class='material-icons'>chat_bubble_outline</i></span><p class='content documentation'><img class='avatar'src='./images/Valerie-Bottas.jpg'><span>Valerie Bottas</span> <small>Immigration Adviser</small><i class='material-icons icon-right'>chevron_right</i></p></div></div>";
    var natashaSouza = "<div class='help-docs chat-line_bloc documentation attachment'><div class='chat-live_answer'><span class='icon'><i class='material-icons'>chat_bubble_outline</i></span><p class='content documentation'><img class='avatar'src='./images/natasha_dsouza.jpg'><span>Natasha D'Souza</span> <small>Mobility Manager</small><i class='material-icons icon-right'>chevron_right</i></p></div></div>";
    var taxReturnBox = cont1 + cont2 + cont3;
    var nothing = " ";
    var doesntMach = "<div class='help-docs chat-line_bloc documentation attachment'><div class='chat-live_answer'><span class='icon'><i class='material-icons'>chat_bubble_outline</i></span><p class='content documentation link-only'><i class='material-icons icon-left'>local_library</i><span>Knowledge Center</span><i class='material-icons icon-right'>chevron_right</i></p></div></div>";
    var myProfile = "<div class='help-docs chat-line_bloc documentation attachment'><div class='chat-live_answer'><span class='icon'><i class='material-icons'>chat_bubble_outline</i></span><p class='content documentation link-only'><i class='material-icons icon-left'>local_library</i><span>My Profile</span><i class='material-icons icon-right'>chevron_right</i></p></div></div>";
    var taxRatesBox = cont3;
    var eyForeignExchange = "<div class='help-docs chat-line_bloc documentation attachment'><div class='chat-live_answer'><span class='icon'><i class='material-icons'>chat_bubble_outline</i></span><p class='content documentation link-only'><i class='material-icons icon-left'>library_books</i><span>EY Foreign Exchange</span><i class='material-icons icon-right'>chevron_right</i></p></div></div>";
    var eyTaxChecker = "<div class='help-docs chat-line_bloc documentation attachment'><div class='chat-live_answer'><span class='icon'><i class='material-icons'>chat_bubble_outline</i></span><p class='content documentation link-only'><i class='material-icons icon-left'>library_books</i><span>EY Tax Checker</span><i class='material-icons icon-right'>chevron_right</i></p></div></div>";
    var accessWikiMoves = "<div class='help-docs chat-line_bloc documentation attachment'><div class='chat-live_answer'><span class='icon'><i class='material-icons'>chat_bubble_outline</i></span><p class='content documentation link-only'><i class='material-icons icon-left'>library_books</i><span>Access 'WikiMoves'</span><i class='material-icons icon-right'>chevron_right</i></p></div></div>";


    if(question.includes('tax return') || question.includes('Tax return')) {
      $('#chat-answer').text('Your current tax return is due on 31 January. It is currently in review and we will get back to you if we need more information. Based on your information from last year, you are expecting a $3,000 liability. Contact Diana if you need more help.');
      $('#chat-question').text(question);
      showQuestion();
      setTimeout(function () { return showAnswer(); }, 2000);
      setTimeout(function () {
        if (hasNoAttachment) {
          var usefulDocs = $(dianaContact);
          $('#chat-answer-container').append(usefulDocs);
        }
      }, 2000);
    }

    else if(question.includes('work permit') || question.includes('Work permit')) {
      $('#chat-answer').text('Your work permit is being drafted. It has been at this stage of the process for 1 day. You should receive a decision on your work permit application within 2 weeks.');
      $('#chat-question').text(question);
      showQuestion();
      setTimeout(function () { return showAnswer(); }, 2000);
      setTimeout(function () {
        if (hasNoAttachment) {
          var usefulDocs = $(valerieBottas);
          $('#chat-answer-container').append(usefulDocs);
        }
      }, 2000);
    }


    else if (question.includes('visa') || question.includes('Visa')) {
      $('#chat-answer').text('Your work permit is being drafted. It has been at this stage of the process for 1 day. You should receive a decision on your work permit application within 2 weeks.');
      $('#chat-question').text(question);
      showQuestion();
      setTimeout(function () { return showAnswer(); }, 1000);
      setTimeout(function () {
        if (hasNoAttachment) {
          var usefulDocs = $(valerieBottas);
          $('#chat-answer-container').append(usefulDocs);
        }
      }, 2000);
    }

    else if (question.includes('package') || question.includes('Package')) {
      $('#chat-answer').text('You are on a LocalPlus package which includes relocation support and a housing allowance. You can view more details in your profile details.');
      $('#chat-question').text(question);
      showQuestion();
      setTimeout(function () { return showAnswer(); }, 1000);
      setTimeout(function () {
        if (hasNoAttachment) {
          var usefulDocs = $(myProfile);
          $('#chat-answer-container').append(usefulDocs);
        }
      }, 2000);
    }

    else if (question.includes('relocation') || question.includes('Relocation')) {
      $('#chat-answer').text('You have a relocation allowance included within your package. You can explore your package further in your profile details. Contact your mobility manager should you have any questions, or want to raise any concerns.');
      $('#chat-question').text(question);
      showQuestion();
      setTimeout(function () { return showAnswer(); }, 1000);
      setTimeout(function () {
        if (hasNoAttachment) {
          var usefulDocs = $(myProfile + natashaSouza);
          $('#chat-answer-container').append(usefulDocs);
        }
      }, 2000);
    }

    else if (question.includes('exchange') || question.includes('Exchange')) {
      $('#chat-answer').text("1 USD will currently exchange into 3.08 BRL. For more exchange rates, please check EY's FX checker.");
      $('#chat-question').text(question);
      showQuestion();
      setTimeout(function () { return showAnswer(); }, 1000);
      setTimeout(function () {
        if (hasNoAttachment) {
          var usefulDocs = $(eyForeignExchange);
          $('#chat-answer-container').append(usefulDocs);
        }
      }, 2000);
    }

    else if (question.includes('tax rates') || question.includes('Tax rates')) {
      $('#chat-answer').text("You can check the relevant tax rates using EY's tax tool.");
      $('#chat-question').text(question);
      showQuestion();
      setTimeout(function () { return showAnswer(); }, 1000);
      setTimeout(function () {
        if (hasNoAttachment) {
          var usefulDocs = $(eyTaxChecker);
          $('#chat-answer-container').append(usefulDocs);
        }
      }, 2000);
    }

    else if (question.includes('live') || question.includes('Live')) {
      $('#chat-answer').text("You can check what other travelers have to say about about living in different places using EY's WikiMoves tool.");
      $('#chat-question').text(question);
      showQuestion();
      setTimeout(function () { return showAnswer(); }, 1000);
      setTimeout(function () {
        if (hasNoAttachment) {
          var usefulDocs = $(accessWikiMoves);
          $('#chat-answer-container').append(usefulDocs);
        }
      }, 2000);
    }

    else {
      $('#chat-answer').text("Sorry, I can't help you answer this question now. I'm currently learning more about this area. Perhaps you can find out more information using the EY Knowledge Center.");
      $('#chat-question').text(question);
      showQuestion();
      setTimeout(function () { return showAnswer(); }, 1000);
      setTimeout(function () {
        if (hasNoAttachment) {
          var usefulDocs = $(doesntMach);
          $('#chat-answer-container').append(usefulDocs);
        }
      }, 2000);
    }
  },

  'keydown #chat-input': (event, template) => {
    var scroll = () =>{
      $().scrollTop
    };
    var showAnswer = () => {
      $('#chat-answer-container').addClass('show');
    };

    var showQuestion = () => {
      $('#chat-question-container').addClass('show');
    };

    let hasNoAttachment = $('.help-docs.attachment').length === 0;

    if (event.keyCode == 13) {
      var question = $('#chat-input').val();
      var cont1 = "<div class='help-docs chat-line_bloc documentation'><div class='chat-live_answer'><span class='icon'><i class='material-icons'>chat_bubble_outline</i></span><p class='content documentation'><i class='material-icons icon-left'>local_library</i><span>Brazil: Tax 2017</span><small>Domestic Tax Guidance</small><i class='material-icons icon-right'>chevron_right</i></p></div></div>";
      var cont2 = "<div class='help-docs chat-line_bloc documentation'><div class='chat-live_answer'><span class='icon'><i class='material-icons'>chat_bubble_outline</i></span><p class='content documentation'><i class='material-icons icon-left'>library_books</i><span>EY: Brazil Tax</span><small>Non-Resident Tax Guide</small><i class='material-icons icon-right'>chevron_right</i></p></div></div>";
      var cont3 = "<div class='help-docs chat-line_bloc documentation'><div class='chat-live_answer'><span class='icon'><i class='material-icons'>chat_bubble_outline</i></span><p class='content documentation'><img class='avatar'src='./images/julio-cesar.png'><span>Julio Cesar</span> <small>Brazil Tax Adviser</small><i class='material-icons icon-right'>chevron_right</i></p></div></div>";
      var dianaContact = "<div class='help-docs chat-line_bloc documentation attachment'><div class='chat-live_answer'><span class='icon'><i class='material-icons'>chat_bubble_outline</i></span><p class='content documentation'><img class='avatar'src='./images/diana-kraub.png'><span>Diana Krauβ</span> <small>Tax Adviser</small><i class='material-icons icon-right'>chevron_right</i></p></div></div>";
      var valerieBottas = "<div class='help-docs chat-line_bloc documentation attachment'><div class='chat-live_answer'><span class='icon'><i class='material-icons'>chat_bubble_outline</i></span><p class='content documentation'><img class='avatar'src='./images/Valerie-Bottas.jpg'><span>Valerie Bottas</span> <small>Immigration Adviser</small><i class='material-icons icon-right'>chevron_right</i></p></div></div>";
      var natashaSouza = "<div class='help-docs chat-line_bloc documentation attachment'><div class='chat-live_answer'><span class='icon'><i class='material-icons'>chat_bubble_outline</i></span><p class='content documentation'><img class='avatar'src='./images/natasha_dsouza.jpg'><span>Natasha D'Souza</span> <small>Mobility Manager</small><i class='material-icons icon-right'>chevron_right</i></p></div></div>";
      var taxReturnBox = cont1 + cont2 + cont3;
      var nothing = " ";
      var doesntMach = "<div class='help-docs chat-line_bloc documentation attachment'><div class='chat-live_answer'><span class='icon'><i class='material-icons'>chat_bubble_outline</i></span><p class='content documentation link-only'><i class='material-icons icon-left'>local_library</i><span>Knowledge Center</span><i class='material-icons icon-right'>chevron_right</i></p></div></div>";
      var myProfile = "<div class='help-docs chat-line_bloc documentation attachment'><div class='chat-live_answer'><span class='icon'><i class='material-icons'>chat_bubble_outline</i></span><p class='content documentation link-only'><i class='material-icons icon-left'>local_library</i><span>My Profile</span><i class='material-icons icon-right'>chevron_right</i></p></div></div>";
      var taxRatesBox = cont3;
      var eyForeignExchange = "<div class='help-docs chat-line_bloc documentation attachment'><div class='chat-live_answer'><span class='icon'><i class='material-icons'>chat_bubble_outline</i></span><p class='content documentation link-only'><i class='material-icons icon-left'>library_books</i><span>EY Foreign Exchange</span><i class='material-icons icon-right'>chevron_right</i></p></div></div>";
      var eyTaxChecker = "<div class='help-docs chat-line_bloc documentation attachment'><div class='chat-live_answer'><span class='icon'><i class='material-icons'>chat_bubble_outline</i></span><p class='content documentation link-only'><i class='material-icons icon-left'>library_books</i><span>EY Tax Checker</span><i class='material-icons icon-right'>chevron_right</i></p></div></div>";
      var accessWikiMoves = "<div class='help-docs chat-line_bloc documentation attachment'><div class='chat-live_answer'><span class='icon'><i class='material-icons'>chat_bubble_outline</i></span><p class='content documentation link-only'><i class='material-icons icon-left'>library_books</i><span>Access 'WikiMoves'</span><i class='material-icons icon-right'>chevron_right</i></p></div></div>";


      if(question.includes('tax return') || question.includes('Tax return')) {
        $('#chat-answer').text('Your current tax return is due on 31 January. It is currently in review and we will get back to you if we need more information. Based on your information from last year, you are expecting a $3,000 liability. Contact Diana if you need more help.');
        $('#chat-question').text(question);
        showQuestion();
        setTimeout(function () { return showAnswer(); }, 1000);
        setTimeout(function () {
          if (hasNoAttachment) {
            var usefulDocs = $(dianaContact);
            $('#chat-answer-container').append(usefulDocs);
          }
        }, 2000);
      }

      else if(question.includes('work permit') || question.includes('Work permit')) {
        $('#chat-answer').text('Your work permit is being drafted. It has been at this stage of the process for 1 day. You should receive a decision on your work permit application within 2 weeks.');
        $('#chat-question').text(question);
        showQuestion();
        setTimeout(function () { return showAnswer(); }, 1000);
        setTimeout(function () {
          if (hasNoAttachment) {
            var usefulDocs = $(valerieBottas);
            $('#chat-answer-container').append(usefulDocs);
          }
        }, 2000);
      }


      else if (question.includes('visa') || question.includes('Visa')) {
        $('#chat-answer').text('Your work permit is being drafted. It has been at this stage of the process for 1 day. You should receive a decision on your work permit application within 2 weeks.');
        $('#chat-question').text(question);
        showQuestion();
        setTimeout(function () { return showAnswer(); }, 1000);
        setTimeout(function () {
          if (hasNoAttachment) {
            var usefulDocs = $( valerieBottas );
            $('#chat-answer-container').append(usefulDocs);
          }
        }, 2000);
      }

      else if (question.includes('package') || question.includes('Package')) {
        $('#chat-answer').text('You are on a LocalPlus package which includes relocation support and a housing allowance. You can view more details in your profile details.');
        $('#chat-question').text(question);
        showQuestion();
        setTimeout(function () { return showAnswer(); }, 1000);
        setTimeout(function () {
          if (hasNoAttachment) {
            var usefulDocs = $(myProfile);
            $('#chat-answer-container').append(usefulDocs);
          }
        }, 2000);
      }

      else if (question.includes('relocation') || question.includes('Relocation')) {
        $('#chat-answer').text('You have a relocation allowance included within your package. You can explore your package further in your profile details. Contact your mobility manager should you have any questions, or want to raise any concerns.');
        $('#chat-question').text(question);
        showQuestion();
        setTimeout(function () { return showAnswer(); }, 1000);
        setTimeout(function () {
          if (hasNoAttachment) {
            var usefulDocs = $(myProfile + natashaSouza);
            $('#chat-answer-container').append(usefulDocs);
          }
        }, 2000);
      }

      else if (question.includes('exchange') || question.includes('Exchange')) {
        $('#chat-answer').text("1 USD will currently exchange into 3.08 BRL. For more exchange rates, please check EY's FX checker.");
        $('#chat-question').text(question);
        showQuestion();
        setTimeout(function () { return showAnswer(); }, 1000);
        setTimeout(function () {
          if (hasNoAttachment) {
            var usefulDocs = $(eyForeignExchange);
            $('#chat-answer-container').append(usefulDocs);
          }
        }, 2000);
      }

      else if (question.includes('tax rates') || question.includes('Tax rates')) {
        $('#chat-answer').text("You can check the relevant tax rates using EY's tax tool.");
        $('#chat-question').text(question);
        showQuestion();
        setTimeout(function () { return showAnswer(); }, 1000);
        setTimeout(function () {
          if (hasNoAttachment) {
            var usefulDocs = $(eyTaxChecker);
            $('#chat-answer-container').append(usefulDocs);
          }
        }, 2000);
      }

      else if (question.includes('live') || question.includes('Live')) {
        $('#chat-answer').text("You can check what other travelers have to say about about living in different places using EY's WikiMoves tool.");
        $('#chat-question').text(question);
        showQuestion();
        setTimeout(function () { return showAnswer(); }, 1000);
        setTimeout(function () {
          if (hasNoAttachment) {
            var usefulDocs = $(accessWikiMoves);
            $('#chat-answer-container').append(usefulDocs);
          }
        }, 2000);
      }

      else {
        $('#chat-answer').text("Sorry, I can't help you answer this question now. I'm currently learning more about this area. Perhaps you can find out more information using the EY Knowledge Center.");
        $('#chat-question').text(question);
        showQuestion();
        setTimeout(function () { return showAnswer(); }, 1000);
        setTimeout(function () {
          if (hasNoAttachment) {
            var usefulDocs = $(doesntMach);
            $('#chat-answer-container').append(usefulDocs);
          }
        }, 2000);
      }
    }

    if (event.keyCode == 8 || event.keyCode == 46 ) {
      $('#chat-answer').text('');
      $('.help-docs').remove();
      $('#chat-answer-container').removeClass('show');
      $('#chat-question-container').removeClass('show');
    }
  }
});
