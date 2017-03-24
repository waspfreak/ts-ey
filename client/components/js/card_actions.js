import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

/*Dashboard*/
Template.dashboard.helpers({
  actionItem1: [
    {
       colorIcon: "red",
       title: "Data collection",
       idLink: "1", /*for this class link1*/
       position: "first", /*first last or ''*/
       openCloseAll: "hidden",
       openClose: "hidden",
       clickOpen: true, /*toggle class link*/
       iconAction: true, /*change when upload doc*/
       actionSubItem: [
         {
           idSublik: "1",
           iconColor: "green",
           titleSub: "Power of attorney",
           subTitle: "Submitted 12/20/2016",
           position: "first", /*first last or*/
           iconChangeSmall: '',
           openClose: "hidden",
         },
         {
           idSublik: "1",
           iconColor: "red",
           titleSub: "Passport",
           subTitle: "Upload by 12/31/2016",
           subTitle2: "Uploaded 12/28/2017",
           position: " ", /*first last or*/
           iconChangeSmall: "icon-change_small",
           ifUlploadChange: "if-upload-hide",
           ifUploadShow: "if-upload-show",
           openClose: "hidden"

         },

       ]
     },
     {
       colorIcon: "green",
       title: "Drafting",
       idLink: " ", /*for this class link1*/
       position: " ", /*first last or ''*/
       openClose: "hidden",
       clickOpen: false,
       iconAction: true, /*change when upload doc*/
       iconHideBeforeUpload: "before-upload",


     },
     {
       colorIcon: " ",
       title: "Employee approval",
       idLink: " ", /*for this class link1*/
       position: " ", /*first last or ''*/
       openClose: "hidden",
     },
     {
       colorIcon: " ",
       title: "Filing",
       idLink: " ", /*for this class link1*/
       position: " ", /*first last or ''*/
       openClose: "hidden",
     },
     {
       colorIcon: " ",
       title: "Decision",
       idLink: " ", /*for this class link1*/
       position: "last", /*first last or ''*/
       openClose: "hidden",
     }
  ],
  titleValue1: [
    {title: "Work permit application", id: "2", colorIcon: "red"}
  ]
});

/*dashboardEmployeeOn*/
Template.dashboardEmployeeOn.helpers({
  actionItem2: [
    {
       colorIcon: "green",
       title: "Data collection",
       idLink: "1", /*for this class link1*/
       position: "first", /*first last or ''*/
       openCloseAll: "hidden",
       openClose: "hidden",
       clickOpen: true,
       iconAction: true,
       actionSubItem: [
         {
           idSublik: "1",
           iconColor: "green",
           titleSub: "TRACer inputs",
           subTitle: "Submitted 12/12/2017",
           position: "first", /*first last or*/
           iconChangeSmall: '',
           openClose: "hidden",
           //showGreeStatus: "hidden"
         }
       ]
     },
     {
        colorIcon: "red",
        title: "Review",
        idLink: "4", /*for this class link1*/
        position: "", /*first last or ''*/
        openCloseAll: "hidden",
        openClose: "hidden",
        clickOpen: true,
        iconAction: true,
        actionSubItem: [
          {
            idSublik: "4",
            iconColor: "red",
            titleSub: "Monthly calendar data",
            subTitle: "Lock by 12/30/2017",
            position: "first", /*first last or*/
            iconChangeSmall: '',
            openClose: "hidden",
          }
        ]
      },
      {
         colorIcon: " ",
         title: "Submit",
         idLink: "3", /*for this class link1*/
         position: "last", /*first last or ''*/
         openCloseAll: " ",
         openClose: ""
       }
  ],
  titleValue2: [
    {title: "Calendar", id: "2", colorIcon: "red"}
  ]
});


/*actionsAssignment*/
Template.viewAssignmentDashboard.helpers({
  actionItem3: [
    {
      colorIcon: "green",
      title: "Briefing",
      idLink: "1", /*for this class link1*/
      position: "first", /*first last or ''*/
      openCloseAll: "hidden",
      openClose: "hidden",
      clickOpen: true,
      iconAction: true,
      actionSubItem: [
         {
           idSublik: "1",
           iconColor: "green",
           titleSub: "Call with Diana",
           subTitle: "Completed 12/18/2018",
           position: "first", /*first last or*/
           iconChangeSmall: "",
           openClose: "hidden"
           //showGreeStatus: "hidden"
         }
       ]
     },
     {
        colorIcon: "red",
        title: "Data collection",
        idLink: "5", /*for this class link1*/
        position: "", /*first last or ''*/
        openCloseAll: "hidden",
        openClose: "hidden",
        clickOpen: true,
        iconAction: true,
        actionSubItem: [
          {
            idSublik: "5",
            iconColor: "red",
            titleSub: "Tax organizer",
            subTitle: "Complete by 12/31/2018",
            position: "first", /*first last or*/
            iconChangeSmall: '',
            openClose: "hidden"
          }
        ]
      },
      {
         colorIcon: " ",
         title: "Drafting",
         idLink: "3", /*for this class link1*/
         position: "", /*first last or ''*/
         openCloseAll: " ",
         openClose: "",
         iconAction: "",
       },
       {
          colorIcon: " ",
          title: "Review",
          idLink: "4", /*for this class link1*/
          position: "", /*first last or ''*/
          openCloseAll: " ",
          openClose: "",
          iconAction: "",
        },
        {
           colorIcon: " ",
           title: "Filing",
           idLink: "4", /*for this class link1*/
           position: "", /*first last or ''*/
           openCloseAll: " ",
           openClose: "",
           iconAction: "",
         },
         {
            colorIcon: "",
            title: "Reconciliation",
            idLink: "4", /*for this class link1*/
            position: "last", /*first last or ''*/
            openCloseAll: " ",
            openClose: "",
            iconAction: "",
          },

  ],
  titleValue3: [
    {title: "Brazil tax return FY18", id: "2",  colorIcon: "red"}
  ],
  titleValueSec1: [
    {title: "Repatriation", id: "1", colorIcon: "red"}
  ],

  ShowSecDrop: [
    {secDrop: false}
  ], /*If have secondary drop show*/
  actionItemSec1: [
    {
      colorIcon: "red",
      title: "Briefing",
      idLink: "7", /*for this class link1*/
      position: "first", /*first last or ''*/
      openCloseAll: "hidden",
      openClose: "hidden",
      clickOpen: true,
      iconAction: true,
      actionSubItem: [
         {
           idSublik: "7",
           iconColor: "red",
           titleSub: "Call with Amanda Graves",
           subTitle: "Complete by 01/31/2019",
           position: "first", /*first last or*/
           iconChangeSmall: " ",
           openClose: "hidden",
          //showGreeStatus: "hidden"
         }
       ]
    },
    {
      colorIcon: "",
      title: "Shipping",
      idLink: "8", /*for this class link1*/
      position: "first", /*first last or ''*/
      openCloseAll: " ",
      openClose: "hidden",
      clickOpen: true,
      iconAction: "",
      actionSubItem: [
         {
           idSublik: "8",
           iconColor: " ",
           titleSub: "Shipment valuation",
           subTitle: "Complete by 03/31/2019",
           position: "first", /*first last or*/
           iconChangeSmall: " ",
            openClose: "hidden",
           //showGreeStatus: "hidden"
         }
       ]
    },
    {
      colorIcon: " ",
      title: "Feedback",
      idLink: "9", /*for this class link1*/
      position: "first", /*first last or ''*/
      openCloseAll: "hidden",
      openClose: "hidden",
      clickOpen: true,
      iconAction: "",
      actionSubItem: [
         {
           idSublik: "9",
           iconColor: " ",
           titleSub: "Satisfaction survey",
           subTitle: "Complete by 07/31/2019",
           position: "first", /*first last or*/
           iconChangeSmall: " ",
           openClose: "hidden",
           //showGreeStatus: "hidden"
         }
       ]
    },
    {
      colorIcon: " ",
      title: "Self-assessment",
      idLink: "10", /*for this class link1*/
      position: " ", /*first last or ''*/
      lastLink: "last--content",
      spanHideL:"hide-div-last", /*div for last item when have subitem*/
      openCloseAll: "hidden",
      openClose: "hidden",
      clickOpen: true,
      iconAction: "",
      actionSubItem: [
         {
           idSublik: "10",
           iconColor: " ",
           titleSub: "Self-assessment",
           subTitle: "Complete by 07/31/2019",
           position: "first", /*first last or*/
           iconChangeSmall: '',
           openClose: "hidden",
           spanHideSubL: "hide-div", /*hide border when is last item with subitem*/
         }
       ]
    }

  ]
});


/*action card template toggle class*/
Template.actionCardData.events({
  'click .dropdownTitle1': function(e) {
   $('.dropLink1').toggleClass('hidden');
   $('.down1').toggleClass('hidden');
   $('.up1').toggleClass('hidden');
   $('.margin-close').toggleClass('margin');
   $('.if-open').toggleClass('open2');
   $('.if-close').toggleClass('extra-margin');
  },
  'click .dropdownTitle2': function(e) {
   $('.dropLink2').toggleClass('hidden');
   $('.down2').toggleClass('hidden');
   $('.up2').toggleClass('hidden');
   $('.if-open').toggleClass('open');
   //$('.if-close').toggleClass('extra-margin');
   $('.margin-close').toggleClass('margin');
  },
  'click .link1': function(e) {
    $('.sublink1').toggleClass('hidden');
    $('.down1').toggleClass('hidden');
    $('.up1').toggleClass('hidden');
  },
  'click .link2': function(e) {
    $('.sublink2').toggleClass('hidden');
    $('.down2').toggleClass('hidden');
    $('.up2').toggleClass('hidden');
  },
  'click .link3': function(e) {
    $('.sublink3').toggleClass('hidden');
    $('.down3').toggleClass('hidden');
    $('.up3').toggleClass('hidden');
  },
  'click .link4': function(e) {
    $('.sublink4').toggleClass('hidden');
    $('.down4').toggleClass('hidden');
    $('.up4').toggleClass('hidden');
  },
  'click .link5': function(e) {
    $('.sublink5').toggleClass('hidden');
    $('.down5').toggleClass('hidden');
    $('.up5').toggleClass('hidden');
  },
  'click .link6': function(e) {
    $('.sublink6').toggleClass('hidden');
    $('.down6').toggleClass('hidden');
    $('.up6').toggleClass('hidden');
  },
  'click .link7': function(e) {
    $('.sublink7').toggleClass('hidden');
    $('.down7').toggleClass('hidden');
    $('.up7').toggleClass('hidden');
  },
  'click .link8': function(e) {
    $('.sublink8').toggleClass('hidden');
    $('.down8').toggleClass('hidden');
    $('.up8').toggleClass('hidden');
  },
  'click .link9': function(e) {
    $('.sublink9').toggleClass('hidden');
    $('.down9').toggleClass('hidden');
    $('.up9').toggleClass('hidden');
  },
  'click .link10': function(e) {
    $('.sublink10').toggleClass('hidden');
    $('.down10').toggleClass('hidden');
    $('.up10').toggleClass('hidden');
    $('.hide-div-last').toggleClass('hidden');
  }

});
