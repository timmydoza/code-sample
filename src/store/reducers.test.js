import reducer, { initialState } from './reducers';

const testCars = [
  {
    year: 2014,
    make: 'Jaguar',
    model: 'XK',
    mileage: 9852,
    drivetrain: 'RWD',
    bodytype: 'convertible',
    image_url: 'http://st.motortrend.com/uploads/sites/10/2015/09/2014-Jaguar-XKR-S-GT-front-three-quarter-in-motion-02.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  }, {
    year: 2013,
    make: 'Audi',
    model: 'A5',
    mileage: 17216,
    image_url: 'http://st.motortrend.com/uploads/sites/5/2012/07/2013-Audi-A5-front-three-quarter-in-motion.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  }, {
    year: 2013,
    make: 'Jeep',
    model: 'Wrangler Unlimited',
    mileage: 19000,
    image_url: 'http://blog.caranddriver.com/wp-content/uploads/2014/07/2013-Jeep-Wrangler-Unlimited-Rubicon-10th-Anniversary-Edition-PLACEMENT.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
];

describe('the reducer', () => {

  it('should return the default state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('the SAVE_CARS action', () => {

    it('should save cars to allCars, sort the cars, and calcualte total pages', () => {
      const verificationCars = [
        {
          year: 2013,
          make: 'Audi',
          model: 'A5',
          mileage: 17216,
          image_url: 'http://st.motortrend.com/uploads/sites/5/2012/07/2013-Audi-A5-front-three-quarter-in-motion.jpg',
          created_at: '2016-10-14T20:13:22.586Z',
        }, {
          year: 2013,
          make: 'Jeep',
          model: 'Wrangler Unlimited',
          mileage: 19000,
          image_url: 'http://blog.caranddriver.com/wp-content/uploads/2014/07/2013-Jeep-Wrangler-Unlimited-Rubicon-10th-Anniversary-Edition-PLACEMENT.jpg',
          created_at: '2016-10-14T20:13:22.586Z',
        }, {
          year: 2014,
          make: 'Jaguar',
          model: 'XK',
          mileage: 9852,
          drivetrain: 'RWD',
          bodytype: 'convertible',
          image_url: 'http://st.motortrend.com/uploads/sites/10/2015/09/2014-Jaguar-XKR-S-GT-front-three-quarter-in-motion-02.jpg',
          created_at: '2016-10-14T20:13:22.586Z',
        },
      ];

      expect(reducer(initialState, {type: 'SAVE_CARS', cars: testCars})).toEqual({
        ...initialState,
        allCars: testCars,
        totalPages: 1,
        filteredSortedCars: verificationCars
      });
    });
  });

  describe('the SET_PAGE action', () => {
    it('should not let the pagination go out of range', () => {
      expect(reducer({...initialState, totalPages: 3}, {type: 'SET_PAGE', pageChange: -1})).toEqual({...initialState, totalPages: 3});
      expect(reducer({...initialState, totalPages: 3}, {type: 'SET_PAGE', pageChange: 5})).toEqual({...initialState, currentPage: 3, totalPages: 3});
    });

    it('should set the page', () => {
      expect(reducer({...initialState, totalPages: 3}, {type: 'SET_PAGE', pageChange: 1})).toEqual({...initialState, currentPage: 2, totalPages: 3});
    });
  });


});