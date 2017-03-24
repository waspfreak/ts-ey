import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

Template.stateCompliance.onCreated( function() {
  this.currentCard = new ReactiveVar( "stateOfComplianceContent1" );
});

Template.stateCompliance.rendered = function() {
  if ('ontouchstart' in document) {
    $('.state-compliance-card').addClass('touch');
  }
};

Template.stateCompliance.helpers({
  cardMap: function() {
    return Template.instance().currentCard.get();
  },
  templateGestures: {
    'swipeleft .state-compliance-content': function (event, templateInstance) {
      let currentCard = templateInstance.currentCard.get();

      if (currentCard === 'stateOfComplianceContent1') {
        templateInstance.currentCard.set("stateOfComplianceContent2");
      }

      if (currentCard === 'stateOfComplianceContent2') {
        templateInstance.currentCard.set("stateOfComplianceContent3");
      }
    },
    'swiperight .state-compliance-content': function (event, templateInstance) {
      let currentCard = templateInstance.currentCard.get();

      if (currentCard === 'stateOfComplianceContent2') {
        templateInstance.currentCard.set("stateOfComplianceContent1");
      }

      if (currentCard === 'stateOfComplianceContent3') {
        templateInstance.currentCard.set("stateOfComplianceContent2");
      }
    }
  }
});

Template.stateCompliance.events({
  'click .nav-left-icon': function (event, template) {
    let currentCard = template.currentCard.get();

    if (currentCard === 'stateOfComplianceContent2') {
      template.currentCard.set("stateOfComplianceContent1");
    }

    if (currentCard === 'stateOfComplianceContent3') {
      template.currentCard.set("stateOfComplianceContent2");
    }
  },
  'click .nav-right-icon': function (event, template) {
    let currentCard = template.currentCard.get();

    if (currentCard === 'stateOfComplianceContent1') {
      template.currentCard.set("stateOfComplianceContent2");
    }

    if (currentCard === 'stateOfComplianceContent2') {
      template.currentCard.set("stateOfComplianceContent3");
    }
  },
  'click .c3-event-rect-3': function(event, template) {
    $('.dashboard-head-mobility .overlay').addClass('show');
  }
});

Template.stateOfComplianceContent1.rendered = function () {
  var blankData = [
    ['data1', 0, 0, 0, 0],
    ['data2', 0, 0, 0, 0],
  ];

  var chartData = [
    ['data1', 0, 0, 1024, 1248], //transparent
    ['data2', 1565, 1024, 206, 317], //yellow
  ];

  var chart = c3.generate({
    bindto: '#soc-tax-graph',
    color: {
      pattern: ['rgba(200,200,200,0)', 'black']
    },
    data: {
      columns: blankData,
      type: 'bar',
      labels: {
        format: function (v) { return d3.format(',')(v) },
      },
      groups: [['data1', 'data2', 'data3']]
    },
    bar: {
      width: 28
    },
    axis: {
      rotated: true,
      x: {
        type: 'category',
        categories: [
          'Authorized',
          'Completed',
          'In progress',
          'At risk',
        ]
      },
      y: {
        show: false,
      }
    },
    tooltip: {
      show: false
    },
    transition: {
      duration: 1000
    },
    legend: {
      show: false
    },
    size: {
      height: 205,
    }
  });

  setTimeout(function () {
    chart.load ({columns: chartData});

    $('.ey-card-travel-bar-soc').animate({
      marginLeft: '0'
    }, 1000);
  }, 500);
};


Template.socSubchart.rendered = function () {
  var blankData = [
    ['data1', 0, 0, 0, 0, 0, 0],
  ];

  var chartData = [
    ['data1', 17, 15, 16, 13, 18, 15],
  ];

  var chart = c3.generate({
    bindto: '#soc-subchart',
    color: {
      pattern: ['#f0f0f0']
    },
    data: {
      columns: blankData,
      type: 'bar',
    },
    bar: {
      width: 18
    },
    axis: {
      x: {
        type: 'category',
        categories: [
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
        ]
      },
      y: {
        show: false,
      }
    },
    tooltip: {
      show: false
    },
    transition: {
      duration: 1500
    },
    legend: {
      show: false
    },
    size: {
      height: 160,
      width: 200
    }
  });

  setTimeout(function () {
    chart.load ({columns: chartData});
  }, 500);
};

Template.stateOfComplianceContent2.rendered = function () {
  $('.ey-card-travel-bar-soc2').animate({
    marginLeft: '0'
  }, 1000);
};

Template.socSubchart2.rendered = function () {
  var blankData = [
    ['data1', 0, 0, 0, 0, 0, 0],
  ];

  var chartData = [
    ['data1', 13, 14, 15, 17, 14, 16],
  ];

  var chart = c3.generate({
    bindto: '#soc-subchart2',
    color: {
      pattern: ['#f0f0f0']
    },
    data: {
      columns: blankData,
      type: 'bar',
    },
    bar: {
      width: 18
    },
    axis: {
      x: {
        type: 'category',
        categories: [
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
        ]
      },
      y: {
        show: false,
      }
    },
    tooltip: {
      show: false
    },
    transition: {
      duration: 1500
    },
    legend: {
      show: false
    },
    size: {
      height: 160,
      width: 200
    }
  });

  setTimeout(function () {
    chart.load ({columns: chartData});
    $('.ey-card-travel-bar-soc3').animate({
      marginLeft: '0'
    }, 1000);
  }, 500);
};
