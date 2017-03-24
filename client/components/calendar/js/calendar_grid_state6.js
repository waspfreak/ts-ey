import { twoEmptyGrey, greyALNonWork, greenNYCWork, greenSZXWork, emptyGreen, twoGreenNYCWork, twoGreyBankHoliday, sunday, lightGreenWork } from './calendar_grid_helpers.js';

Template.calendarGridState6.helpers({
  row1: [
    {
      boxes: sunday
    },
    {
      date: '1',
      boxes: [ greyALNonWork, greenNYCWork ]
    },
    {
      date: '2',
      boxes: twoGreenNYCWork
    },
    {
      date: '3',
      boxes: twoGreenNYCWork
    },
    {
      date: '4',
      boxes: [ greenSZXWork, greenSZXWork ]
    },
    {
      date: '5',
      boxes: [ greenSZXWork, greenSZXWork ]
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
      boxes: [ greenSZXWork, greenSZXWork ]
    },
    {
      date: '9',
      boxes: [ greenSZXWork, greenSZXWork ]
    },
    {
      date: '10',
      boxes: twoGreenNYCWork
    },
    {
      date: '11',
      boxes: twoGreenNYCWork
    },
    {
      date: '12',
      boxes: twoGreenNYCWork
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
      boxes: twoGreenNYCWork
    },
    {
      date: '16',
      warning: true,
      boxes: twoGreenNYCWork,
      modal: true
    },
    {
      date: '17',
      boxes: twoGreenNYCWork
    },
    {
      date: '18',
      boxes: twoGreenNYCWork
    },
    {
      date: '19',
      boxes: twoGreenNYCWork
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
      boxes: twoGreenNYCWork
    },
    {
      date: '23',
      boxes: [ greyALNonWork, greyALNonWork ]
    },
    {
      date: '24',
      boxes: [ greyALNonWork, greenSZXWork]
    },
    {
      date: '25',
      boxes: twoGreyBankHoliday
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
      boxes: [ greyALNonWork, greenSZXWork]
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
