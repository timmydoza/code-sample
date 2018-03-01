import { getSortFn, getFilterFn } from './utils';

const testSortData = [
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
    const sortedData = testSortData.slice().sort(getSortFn('year'));
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
    const sortedData = testSortData.slice().sort(getSortFn('mileage'));
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
    const sortedData = testSortData.slice().sort(getSortFn('created_at'));
    expect(sortedData).toEqual(verificationData);
  });
});

const testFilterData = [
  {
    make: 'Honda',
    model: 'Accord',
    year: '2010'
  },
  {
    make: 'Honda',
    model: 'Fit',
    year: '2010'
  },
  {
    make: 'Subaru',
    model: 'Impreza',
    year: '2011'
  }
]
describe('the getFilterFn', () => {
  it('should filter results by a partial term, ignoring case', () => {
    const verificationData = [
      {
        make: 'Subaru',
        model: 'Impreza',
        year: '2011'
      }
    ];

    const filteredData = testFilterData.filter(getFilterFn('suba'));
    expect(filteredData).toEqual(verificationData);
  });

  it('should filter results by multiple partial terms, ignoring case', () => {
    const verificationData = [
      {
        make: 'Honda',
        model: 'Accord',
        year: '2010'
      },
      {
        make: 'Honda',
        model: 'Fit',
        year: '2010'
      }
    ];

    const filteredData = testFilterData.filter(getFilterFn('hon 201'));
    expect(filteredData).toEqual(verificationData);
  });

    it('should filter results by all three complete terms, ignoring case', () => {
    const verificationData = [
      {
        make: 'Subaru',
        model: 'Impreza',
        year: '2011'
      }
    ];

    const filteredData = testFilterData.filter(getFilterFn('sUBaRU ImPREza 2011'));
    expect(filteredData).toEqual(verificationData);
  });

  it('should not return results with incorrect terms that contain matching terms, e.g. "hondaa"', () => {
    const verificationData = [];

    const filteredData = testFilterData.filter(getFilterFn('hondaa'));
    expect(filteredData).toEqual(verificationData);
  });

  it('should only filter results of a car has all search terms', () => {
    const verificationData = [];

    const filteredData = testFilterData.filter(getFilterFn('honda subaru'));
    expect(filteredData).toEqual(verificationData);
  });
});