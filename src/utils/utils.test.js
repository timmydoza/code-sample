import { getSortFn, getFilterFn } from './utils';

const testData = [
  {
    year: 1,
    mileage: 2,
    created_at: '2014-10-14T20:13:22.586Z'
  },
  {
    year: 3,
    mileage: 1,
    created_at: '2015-10-14T20:13:22.586Z'
  },
  {
    year: 2,
    mileage: 3,
    created_at: '2016-10-14T20:13:22.586Z'
  }
];

describe('the getSortFn', () => {
  it('should sort by year from oldest to newest', () => {
    const verificationData = [
      {
        year: 1,
        mileage: 2,
        created_at: '2014-10-14T20:13:22.586Z'
      },
      {
        year: 2,
        mileage: 3,
        created_at: '2016-10-14T20:13:22.586Z'
      },
      {
        year: 3,
        mileage: 1,
        created_at: '2015-10-14T20:13:22.586Z'
      }
    ];
    const sortedData = testData.slice().sort(getSortFn('year'));
    expect(sortedData).toEqual(verificationData);
  });

  it('should sort by mileage from highest to lowest', () => {
    const verificationData = [
      {
        year: 2,
        mileage: 3,
        created_at: '2016-10-14T20:13:22.586Z'
      },
      {
        year: 1,
        mileage: 2,
        created_at: '2014-10-14T20:13:22.586Z'
      },
      {
        year: 3,
        mileage: 1,
        created_at: '2015-10-14T20:13:22.586Z'
      }
    ];
    const sortedData = testData.slice().sort(getSortFn('mileage'));
    expect(sortedData).toEqual(verificationData);
  });

  it('should sort by date from newest to oldest', () => {
    const verificationData = [
      {
        year: 2,
        mileage: 3,
        created_at: '2016-10-14T20:13:22.586Z'
      },
      {
        year: 3,
        mileage: 1,
        created_at: '2015-10-14T20:13:22.586Z'
      },
      {
        year: 1,
        mileage: 2,
        created_at: '2014-10-14T20:13:22.586Z'
      }
    ];
    const sortedData = testData.slice().sort(getSortFn('created_at'));
    expect(sortedData).toEqual(verificationData);
  });
});