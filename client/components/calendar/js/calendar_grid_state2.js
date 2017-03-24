import { twoEmptyGrey, twoEmptyGreen, greyALNonWork, emptyGrey, twoGreyBankHoliday, sunday } from './calendar_grid_helpers.js';

Template.calendarGridState2.helpers({
  row1: [
    {
      boxes: sunday
    },
    {
      date: '1',
      boxes: [ greyALNonWork, emptyGrey ]
    },
    {
      date: '2',
      boxes: twoEmptyGrey
    },
    {
      date: '3',
      boxes: twoEmptyGrey
    },
    {
      date: '4',
      boxes: twoEmptyGrey
    },
    {
      date: '5',
      boxes: twoEmptyGrey
    },
    {
      date: '6',
      boxes: twoEmptyGrey
    }
  ],
  row2: [
    {
      date: '7',
      boxes: sunday
    },
    {
      date: '8',
      boxes: twoEmptyGrey
    },
    {
      date: '9',
      boxes: twoEmptyGrey
    },
    {
      date: '10',
      boxes: twoEmptyGreen
    },
    {
      date: '11',
      boxes: twoEmptyGreen
    },
    {
      date: '12',
      boxes: twoEmptyGreen
    },
    {
      date: '13',
      boxes: twoEmptyGrey
    }
  ],
  row3: [
    {
      date: '14',
      boxes: sunday
    },
    {
      date: '15',
      boxes: twoEmptyGreen
    },
    {
      date: '16',
      warning: true,
      boxes: twoEmptyGreen
    },
    {
      date: '17',
      boxes: twoEmptyGreen
    },
    {
      date: '18',
      boxes: twoEmptyGreen
    },
    {
      date: '19',
      boxes: twoEmptyGreen
    },
    {
      date: '20',
      boxes: twoEmptyGrey
    }
  ],
  row4: [
    {
      date: '21',
      boxes: sunday
    },
    {
      date: '22',
      warning: true,
      boxes: twoEmptyGreen
    },
    {
      date: '23',
      boxes: [ greyALNonWork, greyALNonWork ]
    },
    {
      date: '24',
      boxes: [ greyALNonWork, emptyGrey]
    },
    {
      date: '25',
      boxes: [ greyALNonWork, greyALNonWork ]
    },
    {
      date: '26',
      boxes: twoGreyBankHoliday
    },
    {
      date: '27',
      boxes: twoEmptyGrey
    }
  ],
  row5: [
    {
      date: '28',
      boxes: sunday,
      today: true
    },
    {
      date: '29',
      boxes: [ greyALNonWork, emptyGrey]
    },
    {
      date: '30',
      boxes: twoGreyBankHoliday
    },
    {
      date: '1',
      disabledDate: true,
      boxes: twoEmptyGrey
    },
    {
      date: '2',
      disabledDate: true,
      boxes: twoEmptyGrey
    },
    {
      date: '3',
      disabledDate: true,
      boxes: twoEmptyGrey
    },
    {
      date: '4',
      disabledDate: true,
      boxes: twoEmptyGrey
    },
  ],
});
