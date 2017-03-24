import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './main.html';
import './components/js/card_actions.js';
import './components/js/card_contact.js';
import './components/js/card_tax-organizer.js';
import './components/js/chatbot.js';
import './components/js/chat-contact.js';


/*Heder Var change user*/
var employeeProfile = {
  "name": "Lisa Wiltz",
  "imageUrl": "images/Lisa_Employee.jpg"
};
var mobilityManagerProfile = {
  "name": "Hans Stinssen",
  "imageUrl": "images/Hans_MobilityManager.jpg"
};
var headMobilityProfile = {
  "name": "Emma Fort",
  "imageUrl": "images/Emma_HeadOfMobility.jpg"
};

/*Route pages*/

Router.route('/', {
  template: 'loginPage',
  title: 'Login '
});
Router.route('/layoutTest', {
  template: 'layoutTest',
  title: 'Login '
});

Router.route('/home', {
  template: 'home',
  title: 'Login page'
});
Router.route('/dashboard', {
  data: employeeProfile,
  title: 'Dashboard employee'
});
Router.route('/dashboardMobilityManager', {
  data: mobilityManagerProfile,
  title: 'Dashboard mobility manager'
});
Router.route('/loginEmployee', {
  title: 'Login employee'
});
Router.route('/loginMobility',{
  title: 'Login mobility'
});
Router.route('/loginHeadMobility',{
  title: 'Login head mobility'
});
Router.route('/repatriationEmployee', {
  data: employeeProfile,
  title: 'Repatriation employee'
});
Router.route('/taskManager', {
  data: mobilityManagerProfile,
  title: 'Task manager'
});
Router.route('/knowledgeCenter', {
  data: mobilityManagerProfile,
  title: 'Knowledge center'
});
Router.route('/taxAndSocialSecurity', {
  data: headMobilityProfile,
  title: 'Tax and social security'
});
Router.route('/compensation', {
  data: headMobilityProfile,
  title: 'Compensation'
});
Router.route('/dashboardEmployeeOn', {
  data: employeeProfile,
  title: 'Dashboard employee on'
});
Router.route('/dashboardModalUpload', {
  data: employeeProfile,
  title: 'Dashboard modal upload'
});
Router.route('/dashboardHeadOfMobility', {
  data: headMobilityProfile,
  title: 'Dashboard head of mobility'
});
Router.route('/insight', {
  data: headMobilityProfile,
  title: 'Insight'
});
Router.route('/employeeProfile', {
  data: mobilityManagerProfile,
  title: 'Employee profile'
});
Router.route('/viewAssignmentDashboard', {
  data: employeeProfile,
  title: 'View assignment dashboard'
});
Router.route('/immigration', {
  data: headMobilityProfile,
  title: 'Immigration'
});
Router.route('/businessTraveler', {
  data: headMobilityProfile,
  title: 'Business traveler'
});
Router.route('/calendar', {
  data: employeeProfile,
  title: 'Calendar'
});
Router.route('/endPage',{
  title: 'End page'
});


/* When routing to a new page, scroll to top */
Tracker.autorun(function() {
  var current = Router.current();
  Tracker.afterFlush(function() {
    $(window).scrollTop(0);
  });
});


/*Add Google Font*/
WebFontConfig = {
  google: { families: ["Bitter:400,700,400italic", "Noto Sans:regular,italic,700,400,700italic"] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
  console.log("async fonts loaded", WebFontConfig);
})();


/*Left Nav*/
Template.navLeft.helpers({
  item: [
    { text: 'Home', icon: 'home', link: '/dashboardMobilityManager', id: 'home' },
    { text: 'Operations', icon: 'people', link: '', parentNavItem: true, id: 'operations' },
    {
      text: 'Tax and social security',
      icon: 'subdirectory_arrow_right',
      link: '',
      subMenu: true,
      id: 'tax-social-security'
    },
    { text: 'Immigration', icon: 'subdirectory_arrow_right', link: '', subMenu: true, id: 'immigration' },
    { text: 'Compensation', icon: 'subdirectory_arrow_right', link: '', subMenu: true, id: 'compensation' },
    { text: 'Business traveler', icon: 'subdirectory_arrow_right', link: '', subMenu: true, id: 'business-traveler' },
    { text: 'Mobile employees', icon: 'assignment_ind', link: '/employeeProfile', id: 'mobile-employees' },
    { text: 'Insight', icon: 'library_books', link: '', id: 'insight' },
    { text: 'Knowledge center', icon: 'local_library', link: '/knowledgeCenter', id: 'knowledge-center' },
    { text: 'Task manager', icon: 'done_all', link: '/taskManager', id: 'task-manager' },
    { text: 'Contacts', icon: 'contacts', link: '', id: 'contacts' },
  ],
});

Template.navLeftHeadMob.helpers({
  item: [
    { text: 'Home', icon: 'home', link: '/dashboardHeadOfMobility', id: 'home' },
    { text: 'Operations', icon: 'people', parentNavItem: true, id: 'operations' },
    {
      text: 'Tax and social security',
      icon: 'subdirectory_arrow_right',
      link: '/taxAndSocialSecurity',
      subMenu: true,
      id: 'tax-social-security'
    },
    { text: 'Immigration', icon: 'subdirectory_arrow_right', link: '/immigration', subMenu: true, id: 'immigration' },
    {
      text: 'Compensation',
      icon: 'subdirectory_arrow_right',
      link: '/compensation',
      subMenu: true,
      id: 'compensation'
    },
    {
      text: 'Business traveler',
      icon: 'subdirectory_arrow_right',
      link: '/businessTraveler',
      subMenu: true,
      id: 'business-traveler'
    },
    { text: 'Mobile employees', icon: 'assignment_ind', link: '', id: 'mobile-employees' },
    { text: 'Insight', icon: 'library_books', link: 'insight', id: 'insight' },
    { text: 'Knowledge center', icon: 'local_library', link: '', id: 'knowledge-center' },
    { text: 'Task manager', icon: 'done_all', link: '', id: 'task-manager' },
    { text: 'Contacts', icon: 'contacts', link: '', id: 'contacts' },
  ],
});

Template.navLeftEmployee.helpers({
  item: [
    { text: 'Home', icon: 'home', link: '/dashboard', id: 'home' },
    { text: 'Calendar', icon: 'today', link: '/calendar', id: 'calendar' },
    { text: 'Documents', icon: 'library_books', link: '', id: 'documents' },
    { text: 'Knowledge center', icon: 'local_library', link: '' },
    { text: 'Task manager', icon: 'done_all', link: '' },
    { text: 'Contacts', icon: 'contacts', link: '', id: 'contact' }
  ],
});


/**toggles the show class to sub menus*/
Template.navLeft.events({
  'click .parentNavItem': function(event, template) {
    let subMenus = template.findAll('.subMenu');

    subMenus.map((subMenu) => {
      if (subMenu.classList.contains('show')) {
        subMenu.classList.remove('show');
      } else {
        subMenu.classList.add('show');
      }
    });
  }
});


/**click add show class to sub menu*/
Template.navLeftHeadMob.events({
  'click .parentNavItem': function(event, template) {
    let subMenus = template.findAll('.subMenu');

    // Remove the class 'show' from potentially current active link.
    if (subMenus[0].classList.contains('show')) {
      subMenus.map((subMenu) => {
        subMenu.classList.remove('show');
      });
    }

    // Add the class 'show' to the clicked link.
    subMenus.map((subMenu) => {
      subMenu.classList.add('show');
    });
  }
});

// /**click add active class nav*/
// Template.navMob.events({
//   'click .ey-nav-link-bloc': function(event, template) {
//
//     // Remove the class 'active' from potentially current active link.
//     var activeLink = template.find('.ey-nav-link-bloc')
//     if (activeLink) {
//       activeLink.classList.remove('active')
//     }
//     // Add the class 'active' to the clicked link.
//     event.currentTarget.classList.add('active')
//
//   }
// })


/*MODAL UPLOAD DOC DASHBOARD PAGE*/
Template.dashboard.events({
  'click .ey-travel-card__btn': function(event, template) {
    // Remove the class 'active' from potentially current active link.
    var activeLink = template.find('.overlay')
    if (activeLink) {
      activeLink.classList.add('show');
    }
    // Add the class 'active' to the clicked link.
    event.currentTarget.classList.remove('show');
  }
})


Template.dashboard.events({
  'click .ey-travel-card__btn': function(event, template) {

    // Remove the class 'active' from potentially current active link.
    var activeLink = template.find('.overlay')
    if (activeLink) {
      activeLink.classList.add('show');
      //console.log("ey-travel-card__btn");
    }
    // Add the class 'active' to the clicked link.
    event.currentTarget.classList.remove('show');


  }
})

/*Tax and Social Security*/
Template.taxAndSocialSecurity.onCreated(function() {
  this.currentCard = new ReactiveVar("taxMap");
});

Template.taxAndSocialSecurity.helpers({
  card: function() {
    return Template.instance().currentCard.get();
  }
});

Template.taxAndSocialSecurity.events({
  'click .ey-dropdown-list_item_link': function( event, template ) {
    var currentCard = $( event.target );
    if (currentCard.text() === 'Employee tax return') {
      template.currentCard.set( "taxMapEtr");
    }
    if (currentCard.text() === 'Deadlines') {
      template.currentCard.set("taxMapDeadlines");
    }
    if (currentCard.text() === 'National income tax FY17') {
      template.currentCard.set( "taxMap");
    }
  },

  'click .map-dropdown': function() {
    $('.map-dropdown-item').addClass('w--open');
  }
});

/*Business Traveler*/
Template.businessTraveler.onCreated( function() {
  this.topCard = new ReactiveVar( "travelSummary" );
  this.bottomCard = new ReactiveVar( "travelers" );
  this.dropdownTitle = new ReactiveVar("Travel summary");
});

Template.businessTraveler.helpers({
  topCard: function() {
    return Template.instance().topCard.get();
  },
  bottomCard: function() {
    return Template.instance().bottomCard.get();
  },
  dropdownTitle: function() {
    return Template.instance().dropdownTitle.get();
  },
  topCardData: function() {
    return { "dropdownTitle": Template.instance().dropdownTitle.get() };
  }
});

Template.businessTraveler.events({
  'click .ey-dropdown-list_item_link': function(event, template) {
    var currentCard = $( event.target );
    if (currentCard.text() === 'Travel summary') {
      template.topCard.set("travelSummary");
      template.bottomCard.set("travelers");
    }
    if (currentCard.text() === 'Permanent establishment risk') {
      template.topCard.set("permanentRisk");
      template.bottomCard.set("travelers");
    }
    if (currentCard.text() === 'Cost') {
      template.topCard.set("businessTravelerCost");
      template.bottomCard.set("travelers-filtered-table");
    }
    if (currentCard.text() !== 'Travel frequency') {
      template.dropdownTitle.set(currentCard.text());
    }
  },

  'click .map-dropdown': function() {
    $('.map-dropdown-item').addClass('w--open');
  },

  'click .permanent-risk__zoom-in-hover-button': function(event, template) {
      template.topCard.set("businessTravelerRiskZoom");
      template.bottomCard.set("travelers-filtered-table");
      template.dropdownTitle.set("Permanent establishment risk");
  },

  'click .permanent-risk__zoom-out-hover-button': function(event, template) {
      template.topCard.set("permanentRisk");
      template.bottomCard.set("travelers");
      template.dropdownTitle.set("Permanent establishment risk");
  }
});


/*Modal Mobilit Manager Dashboard*/
Template.dashboardMobilityManager.events({
  'click .my-task-btn': function(event, template) {

    // Remove the class 'show' from potentially current show link.
    var activeLink = template.find('.overlay')
    if (activeLink) {
      activeLink.classList.add('show');
    }
    // Add the class 'show' to the clicked link.
    event.currentTarget.classList.remove('show');

  }
})

/*Modal Tax payment dashboardMobilityManager*/
Template.dashboardMobilityManager.events({
  'click .my-task-btn2': function(event, template) {

    // Remove the class 'show' from potentially current show link.
    var activeLink = template.find('.overlay-tax-payment')
    if (activeLink) {
      activeLink.classList.add('show');
    }
    // Add the class 'show' to the clicked link.
    event.currentTarget.classList.remove('show');

  }
})

Template.dashboardMobilityManager.events({
  'click .close': function(event, template) {

    // Remove the class 'show' from potentially current show link.
    var activeLink = template.find('.overlay');
    var taxActiveLink = template.find('.overlay-tax-payment');
    if (activeLink) {
      activeLink.classList.remove('show');
      taxActiveLink.classList.remove('show');
    }
    // Add the class 'show' to the clicked link.
    event.currentTarget.classList.add('hidden');
  }
})


Template.modal.events({
  'click .modal-btn': function(event, template) {

    // Remove the class 'show' from potentially current show link.
    var activeLink = template.find('.dni')
    if (activeLink) {
      activeLink.classList.add('show');
    }
    // Add the class 'show' to the clicked link.
    event.currentTarget.classList.remove('show');

  }
})

Template.modal.events({
  'click .ey-primary-button': function(event, template) {

    // Remove the class 'show' from potentially current show link.
    var activeLink = template.find('.modal-done')
    if (activeLink) {
      activeLink.classList.add('show');
    }
    // Add the class 'show' to the clicked link.
    event.currentTarget.classList.remove('show');

  }
})

Template.dashboard.events({
  'click .btn-done': function(event, template) {

    var activeLink = template.find('.overlay');
    var greeIcon = template.find('.icon-change');
    var greeIcon2 = template.find('.icon-change_small');
    var alertLink = template.find('.top-alert');
    var greyIcon = template.find('.icon-change-grey');
    var updateTxt = template.find('.update-txt');
    var updateTxtRed = template.find('.update-txt-red');
    var activeLink1 = template.find('.card-imi-1');
    var activeSecLink = template.find('.card-imi-2');
    var hideTxtUpload = template.find('.hide-travel-risk');
    // var active3Link = template.find('.pending-before');
    // var active4Link = template.find('.pending-after');
    var changeIco = template.find('.before-upload');
    var ifUlploadChange = template.find('.if-upload-hide');
    var ifUploadShow = template.find('.if-upload-show');
    if (activeLink) {

      activeLink.classList.remove('show');
      greeIcon.classList.remove('red');
      greeIcon.classList.add('green');
      greeIcon2.classList.add('green');
      alertLink.classList.add('hidden');
      greyIcon.classList.add('hidden');
      updateTxt.classList.add('hidden');
      updateTxtRed.classList.remove('hidden');
      activeLink1.classList.add('hidden');
      activeSecLink.classList.add('show');
      hideTxtUpload.classList.add('hidden');
      // active3Link.classList.add('hidden');
      // active4Link.classList.add('show');
      changeIco.classList.remove('hidden');
      ifUlploadChange.classList.add('hidden');
      ifUploadShow.classList.remove('hidden');

    }
    // Add the class 'show' to the clicked link.
    event.currentTarget.classList.remove('hidden');

  }
})



Template.dashboardHeadOfMobility.events({
  'click .head-mobility-costs_graph': function(event, template) {
    var image = template.find('.head-mobility-costs_graph');
    $(".head-mobility-costs_graph").fadeOut(100, function() {
      var imageSource = $(".head-mobility-costs_graph").attr("src");
      if (imageSource == "images/HOM_dashboard3.png") {
        $(".head-mobility-costs_graph").attr("src", "images/HOM_dashboard2.png");
      } else {
        $(".head-mobility-costs_graph").attr("src", "images/HOM_dashboard3.png");
      }

    }).fadeIn(300);
  }
});

Template.stateCompliance.events({
  'click .state-compliance__risk-link': function(event, template) {
    $('.dashboard-head-mobility .overlay').addClass('show');
  }
});

Template.modalHeadOfMobility.events({
  'click .close-modal': function(event, template) {
    $('.dashboard-head-mobility .overlay').removeClass('show');
  }
});

   Template.employeeProfileCosts.events({
      'click .clickable': function(event, template){
          $('.employee-profile-costs .clickable').toggleClass('expanded expandable');
          $('.employee-profile-status__table-header').toggleClass('no-border');
      }
   });

   Template.employeeProfileStatus.events({
      'click .clickable': function(event, template){
          $(event.target).closest('.employee-profile-status__table-body').toggleClass('expanded expandable');
      }
    });

  Template.header.events({
      'click .header__dots-container': function(event, template){
          $('.header__dots-dropdown ').toggleClass('hide show');
      },
      'click .header__dots-dropdown-option.change-profile': function(event, template){
          Router.go('/home');
      },
      'click .header__dots-dropdown-option.end-demo': function(event, template){
        Router.go('/endPage');
      }
   });

   Template.headerEmployee.events({
      'click .header__dots-container': function(event, template){
          $('.header__dots-dropdown').toggleClass('hide show');
          if ($('.header-employee__dropdown.show').length) {
            $('.header-employee__dropdown.show').toggleClass('hide show');
          }
      },
      'click .header__dots-dropdown-option.change-profile': function(event, template){
          Router.go('/home');
      },
      'click .header__dots-dropdown-option.end-demo': function(event, template){
          Router.go('/endPage');
      },
      'click .header__user-name ,.header__profile-picture-container': function(event, template){
          $('.header-employee__dropdown').toggleClass('hide show');
          if ($('.header__dots-dropdown.show').length) {
            $('.header__dots-dropdown.show').toggleClass('hide show');
          }
      },
      'click .header__dots-dropdown-option.business-traveler': function(event, template){
          Router.go('/dashboard');
      },
      'click .header__dots-dropdown-option.managing-compliance': function(event, template){
          Router.go('/dashboardEmployeeOn');
      },
      'click .header__dots-dropdown-option.on-assignment': function(event, template){
          Router.go('/viewAssignmentDashboard');
      }

   });

Template.endPage.events({
  'click .end-page-arrow-item.restart': function(event, template){
    Router.go('/home');
  },
  'click .end-page-arrow-item.feedback': function(event, template){
    window.location = 'https://eysurveytool.ey.com/wix/p1195504.aspx';
  }
});


Template.home.created = function() {
  $('html, body').addClass('home');
};

Template.dashboard.created = function() {
  $('html, body').addClass('dashboard');
  $('html, body').removeClass('home');
};

Template.dashboard.rendered = function() {
  var cardImmigrationTwo = template.find('.card-imi-2');
  cardImmigrationTwo.classList.add('hidden');
};

Template.dashboardHeadOfMobility.created = function() {
  $('html, body').removeClass('home');
  $('html, body').addClass('dashboard');
};

Template.dashboardMobilityManager.created = function() {
  $('html, body').removeClass('home');
  $('html, body').addClass('dashboard');
};


/*Nav left*/

Template.nav.rendered = function() {
  let $home = $('#home');
  let $operations = $('#operations');
  switch (Iron.Location.get().path) {
    case "/dashboard":
      $home.addClass('active');
      break;
    case "/dashboardEmployeeOn":
      $home.addClass('active');
      break;
    case "/dashboardHeadOfMobility":
      $home.addClass('active');
      break;
    case "/employeeProfile":
      $('#mobile-employees').addClass('active');
      break;
    case "/dashboardMobilityManager":
      $home.addClass('active');
      break;
    case "/viewAssignmentDashboard":
      $home.addClass('active');
      break;
    case "/repatriationEmployee":
      $home.addClass('active');
      break;
    case "/knowledgeCenter":
      $('#knowledge-center').addClass('active');
      break;
    case "/taskManager":
      $('#task-manager').addClass('active');
      break;
    case "/calendar":
      $('#calendar').addClass('active');
      break;
    case "/insight":
      $('#insight').addClass('active');
      break;
    case "/taxAndSocialSecurity":
      $operations.addClass('active');
      $('.subMenu').each((i, item) => {
        $(item).addClass('show');
      });
      $('#tax-social-security').addClass('active');
      break;
    case "/immigration":
      $operations.addClass('active');
      $('.subMenu').each((i, item) => {
        $(item).addClass('show');
      });
      $('#immigration').addClass('active');
      break;
    case "/compensation":
      $operations.addClass('active');
      $('.subMenu').each((i, item) => {
        $(item).addClass('show');
      });
      $('#compensation').addClass('active');
      break;
    case "/businessTraveler":
      $operations.addClass('active');
      $('.subMenu').each((i, item) => {
        $(item).addClass('show');
      });
      $('#business-traveler').addClass('active');
      break;
    default:
      $home.addClass('active');
  }
};


/*Login index page*/

Template.loginMobility.created = function() {
  $('html, body').addClass('home');
  $('html, body').removeClass('dashboard');
};

Template.loginEmployee.created = function() {
  $('html, body').addClass('home');
  $('html, body').removeClass('dashboard');
};

Template.loginHeadMobility.created = function() {
  $('html, body').addClass('home');
  $('html, body').removeClass('dashboard');
};

Template.endPage.created = function() {
  $('html, body').addClass('home');
  $('html, body').removeClass('dashboard');
};

Template.endPage.created = function() {
  $('html, body').addClass('home');
  $('html, body').removeClass('dashboard');
};

Template.endPage.created = function() {
  $('html, body').addClass('home');
  $('html, body').removeClass('dashboard');
};

Template.dashboardEmployeeOn.rendered = function() {
  $('.ey-card-travel-bar-tax').animate({
    marginLeft: '0'
  }, 1000);

  $('.ey-card-travel-bar-vat').animate({
    marginLeft: '0'
  }, 1000);
}

Template.modalTaxPaymentAuthorization.events({
  'click .approve': function(event, template) {
    var activeLink = template.find('.line-hidden');
    if (activeLink) {
      activeLink.classList.add('hidden');
    }
  }
});
Template.modalTaxPaymentAuthorization.events({
  'click .approve_1': function(event, template) {

    var activeLink = template.find('.line-hidden_1');
    if (activeLink) {
      activeLink.classList.add('hidden');
    }
  }
})

Template.modalTaxPaymentAuthorization.events({
  'click .approve_2': function(event, template) {

    var activeLink = template.find('.line-hidden_2');
    if (activeLink) {
      activeLink.classList.add('hidden');
    }
  }
})

Template.modalTaxPaymentAuthorization.events({
  'click .approve_3': function(event, template) {

    var activeLink = template.find('.line-hidden_3');
    if (activeLink) {
      activeLink.classList.add('hidden');
    }
  }
})

/**click add active class nav*/
Template.taskManager.events({
  'click .modal-task-manager-btn-open': function(event, template) {

    // Remove the class 'active' from potentially current active link.
    var activeLink = template.find('.overlay')
    if (activeLink) {
      activeLink.classList.remove('hidden')
    }
    // Add the class 'active' to the clicked link.
    event.currentTarget.classList.add('show')
  }
});

/**click add active class nav*/
Template.taskManager.events({
  'click .button-btn2': function(event, template) {

    var activeLink = template.find('.overlay');
    var lineUpdate = template.find('.modal-line-action');
    if (activeLink) {
      activeLink.classList.add('hidden');
      lineUpdate.classList.add('show');
    }
    // Add the class 'active' to the clicked link.
    event.currentTarget.classList.add('show')
  }
});

Template.taskManager.events({
  'click .click_1': function(event, template) {

    var activeLink = template.find('.click_2');
    var secActiveLink = template.find('.click_1');
    var familyHidden = template.find('.family');
    var familyHidden1 = template.find('.family1');
    if (activeLink) {
      activeLink.classList.add('show');
      secActiveLink.classList.add('hidden');
      familyHidden.classList.add('hidden');
      familyHidden1.classList.add('hidden');

    }
  }
});

Template.taskManager.events({
  'click .click_2': function(event, template) {

    var familyHidden = template.find('.family');
    var familyHidden1 = template.find('.family1');
    var activeLink = template.find('.click_2');
    var secActiveLink = template.find('.click_1');

    if (familyHidden) {
      familyHidden.classList.remove('hidden');
      familyHidden1.classList.remove('hidden');
      secActiveLink.classList.remove('hidden');
      activeLink.classList.remove('show');
    }
  }
});


/**SHOW MODAL TASK MANAGER IF IS Toby McManaman*/
Template.taskManager.events({
  'click .next-task-manager': function(event, template) {
    if (template.find('.name-input').value === 'Toby McManaman') {
      var activeLink = template.find('.modal-task-manager-sec-box');
      var nextActiveLink = template.find('.task-manager-modal-footer');
      var secBtntActiveLink = template.find('.btn2');
      if (activeLink) {
        activeLink.classList.add('show');
        nextActiveLink.classList.add('hidden');
        secBtntActiveLink.classList.add('show');
      }
      // Add the class 'active' to the clicked link.
      event.currentTarget.classList.add('show')
    }
  }
});

Template.taskManager.events({
  'click .close': function(event, template) {

    var activeLink = template.find('.overlay');
    if (activeLink) {
      activeLink.classList.add('hidden');

    }
    // Add the class 'active' to the clicked link.
    event.currentTarget.classList.add('show')
  },
  'click .back-button': function(event, template) {

    var activeLink = template.find('.overlay');
    if (activeLink) {
      activeLink.classList.add('hidden');

    }
    // Add the class 'active' to the clicked link.
    event.currentTarget.classList.add('show')
  }
});


Template.dropdownHeadMobilityYear.events({
  'click .ey__dropdown': function(event, template) {
    $(event.target).closest('.ey__dropdown').find('.ey-dropdown-list__item').toggle();
  }
});

Template.dropdownHeadMobility.events({
  'click .ey__dropdown': function(event, template) {
    $(event.target).closest('.ey__dropdown').find('.ey-dropdown-list__item').toggle();
  }
});

Template.headMobilityCosts.events({
  'click .ey__dropdown': function(event, template) {
    $(event.target).closest('.ey__dropdown').find('.ey-dropdown-list__item').toggle();
  }
});

Template.compensationOverview.events({
  'click .ey__dropdown': function(event, template) {
    $(event.target).closest('.ey__dropdown').find('.ey-dropdown-list__item').toggle();
  }
});

Template.taskManager.events({
  'click .ey__dropdown': function(event, template) {
    $(event.target).closest('.ey__dropdown').find('.ey-dropdown-list__item').toggle();
  }
});

Template.taxAndSocialSecurity.events({
  'click .ey__dropdown': function(event, template) {
    // console.log($(event.target));
    $(event.target).closest('.ey__dropdown').find('.ey-dropdown-list__item').toggle();
  }
});

Template.dashboardMobilityManager.events({
  'click .ey__dropdown': function(event, template) {
    $(event.target).closest('.ey__dropdown').find('.ey-dropdown-list__item').toggle();
  }
});


/*Immigration Card Maps*/

Template.immigration.onCreated(function() {
  this.currentCard = new ReactiveVar("cardSummary");
});

Template.immigration.helpers({
  cardMap: function() {
    return Template.instance().currentCard.get();
  }
});

Template.immigration.events({
  'click .link-dropdow-card-map': function(event, template) {
    var currentCard = $(event.target);
    if (currentCard.text() === 'Summary') {
      template.currentCard.set("cardSummary");
    }
    if (currentCard.text() === 'Assessments') {
      template.currentCard.set("cardAssessments");
    }
    if (currentCard.text() === 'Trending') {
      template.currentCard.set("cardTrending");
    }
  }
});
