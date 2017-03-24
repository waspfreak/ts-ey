Template.insight.onCreated(function() {
  this.currentCard = new ReactiveVar("insightProgram");
});

Template.insight.helpers({
  cardMap: function() {
    return Template.instance().currentCard.get();
  }
});

Template.insight.events({
  'click .open-dropdown': function(event, template) {
    var currentCard = $(event.target);
    if (currentCard.text() === 'Program') {
      template.currentCard.set("insightProgram");
    }
    if (currentCard.text() === 'Talent') {
      template.currentCard.set("insightTalent");
    }
    if (currentCard.text() === 'Industry analysis') {
      template.currentCard.set("insightIndustryAnalysis");
    }
  },
});

Template.insightIndustryAnalysis.helpers({
  tableData: [
    {
      iconColour: 'grey-alt',
      text: 'Americas'
    },
    {
      iconColour: 'grey',
      text: 'APAC'
    },
    {
      iconColour: 'grey-tint1',
      text: 'EMEA'
    },
    {
      dash: true,
      iconColour: 'yellow',
      text: 'Target'
    },
    {
      dash: true,
      iconColour: 'black',
      text: 'Industry average'
    },
  ],
  dropdownData: [
    {
      title: 'Regions'
    },
    {
      title: 'Past 3 years'
    },
    {
      title: 'Business unit'
    },
    {
      title: 'Grade'
    }
  ]
});

Template.insightProgram.helpers({
  tableData: [
    {
      iconColour: 'grey-alt',
      text: 'Americas'
    },
    {
      iconColour: 'grey-tint2',
      text: 'APAC'
    },
    {
      iconColour: 'yellow',
      text: 'EMEA'
    },
  ],
  dropdownData: [
    {
      title: 'Policy type'
    },
    {
      title: 'Geography'
    },
    {
      title: 'Year'
    },
    {
      title: 'Business unit'
    },
    {
      title: 'Grade'
    }
  ]
});

Template.insightTalent.helpers({
  tableData: [
    {
      iconColour: 'grey-tint2',
      text: 'Below expectations'
    },
    {
      iconColour: 'grey',
      text: 'Meet expectations'
    },
    {
      iconColour: 'yellow',
      text: 'Above expectations'
    },
  ],
  dropdownData: [
    {
      title: 'Long term assignees'
    },
    {
      title: 'Geography'
    },
    {
      title: '2016'
    },
    {
      title: 'Business unit'
    },
    {
      title: 'All'
    }
  ]
});

Template.insightProgram.rendered = function() {
  let blankData = [
    ['data1', 1200000, 1200000, 1200000, 1200000, 1200000, 1200000, 1200000, 1200000],
    ['data2', 1200000, 1200000, 1200000, 1200000, 1200000, 1200000, 1200000, 1200000],
    ['data3', 1200000, 1200000, 1200000, 1200000, 1200000, 1200000, 1200000, 1200000],
  ];

  let chartData = [
    ['data1', 1379732, 1441159, 1462481, 1521165, 1582647, 1518119, 1609057, 1618561], //grey apac
    ['data2', 1374061, 1394068, 1330415, 1377986, 1484795, 1494410, 1577613, 1538728], //yellow emea
    ['data3', 1296370, 1309172, 1343052, 1373782, 1400705, 1404790, 1457947, 1502085], //dark grey americas
  ];

  let chart = c3.generate({
    bindto: '#insight-program-graph',
    size: {
      height: 335,
      width: 500
    },
    data: {
      columns: blankData,
      type: 'area-spline',
      axes: {
        data1: 'y2',
        data2: 'y2',
        data3: 'y2',
      },
      colors: {
        data2: '#ffe600',
        data3: '#646464',
        data1: '#c0c0c0',
      }
    },
    axis: {
      y: {
        show: false
      },
      y2: {
        show: true,
        tick: {
          format: d3.format(".3s")
        },
        min: 1200000,
        max: 1650000,
      },
      x: {
        type: 'category',
        categories: [
          'Q1',
          'Q2',
          'Q3',
          'Q4',
          'Q1',
          'Q2',
          'Q3',
          'Q4',
        ],
        padding: {
          right: -0.35,
        }
      }
    },
    grid: {
      x: {
        lines: [
          {value: 3.5},
        ]
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
    }
  });

  setTimeout(function() {
    chart.load({ columns: chartData });
  }, 100);
};

Template.insightTalent.rendered = function() {
  var blankData = [
    ['data1', 0, 0, 0, 0, 0, 0],
    ['data2', 0, 0, 0, 0, 0, 0],
    ['data3', 0, 0, 0, 0, 0, 0],
  ];

  var chartData = [
    ['data1', 27.08, 28.34, 26.2, 37.01, 43.02, 28.66], //light grey developing
    ['data2', 32.29, 42.55, 21.1, 19.8, 27.22, 23.57], //dark grey average
    ['data3', 40.61, 29.1, 52.6, 43.18, 29.75, 47.76], //yellow strong
  ];

  var chart = c3.generate({
    bindto: '#insight-talent-graph',
    color: {
      pattern: ['#c0c0c0', '#808080', '#ffe600']
    },
    size: {
      height: 335,
      width: 510
    },
    data: {
      columns: blankData,
      type: 'bar',
      order: false,
      groups: [
        ['data1', 'data2', 'data3']
      ]
    },
    bar: {
      width: 25
    },
    padding: {
      left: 120
    },
    axis: {
      rotated: true,
      x: {
        type: 'category',
        categories: [
          'Vice President',
          'Director',
          'Senior Manager',
          'Manager',
          'Senior',
          'Associate'
        ],
      },
      y: {
        show: true,
        tick: {
          format: function (d) { return d + "%"; },
        },
        max: 99,
      },
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
  });

  setTimeout(function () {
    chart.load ({columns: chartData});
  }, 100);
};

Template.insightIndustryAnalysis.rendered = function() {
  var blankData = [
    ['data1', 0, 0, 0, 0, 0, 0],
    ['data2', 0, 0, 0, 0, 0, 0],
    ['data3', 0, 0, 0, 0, 0, 0],
  ];

  var chartData = [
    ['data1', 21, 20, 21, 21, 22, 23], //dark grey americas
    ['data2', 35, 30, 20, 25, 24, 26], //medium grey apac
    ['data3', 18, 17, 12, 12, 13, 14], //light grey emea
  ];

  var chart = c3.generate({
    bindto: '#insight-industry-analysis-graph',
    color: {
      pattern: ['#333333', '#808080', '#c0c0c0']
    },
    size: {
      height: 335,
      width: 480
    },
    data: {
      columns: blankData,
      type: 'bar',
      order: false,
    },
    axis: {
      x: {
        type: 'category',
        categories: [
          'H1',
          'H2',
          'H1',
          'H2',
          'H1',
          'H2',
        ]
      },
      y: {
        show: false
      },
      y2: {
        show: true,
        default: [0,40],
        tick: {
          count: 8,
          values:[0,5,10,15,20,25,30,35,40]
        }
      },
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
    grid: {
      y: {
        lines: [
          {value: 24},
          {value: 18},
        ]
      }
    },
  });

  setTimeout(function () {
    chart.load ({columns: chartData});
  }, 100);
};
