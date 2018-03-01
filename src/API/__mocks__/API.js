const mockData = [
  {
    "key": 1,
    "year": 2014,
    "make": "Jaguar",
    "model": "XK",
    "mileage": 9852,
    "drivetrain": "RWD",
    "bodytype": "convertible",
    "image_url": "http://st.motortrend.com/uploads/sites/10/2015/09/2014-Jaguar-XKR-S-GT-front-three-quarter-in-motion-02.jpg",
    "created_at": "2016-10-14T20:13:22.586Z"
  },
  {
    "key": 2,
    "year": 2013,
    "make": "Audi",
    "model": "A5",
    "mileage": 17216,
    "image_url": "http://st.motortrend.com/uploads/sites/5/2012/07/2013-Audi-A5-front-three-quarter-in-motion.jpg",
    "created_at": "2015-10-14T20:13:22.586Z"
  },
  {
    "key": 3,
    "year": 2013,
    "make": "Jeep",
    "model": "Wrangler Unlimited",
    "mileage": 19000,
    "image_url": "http://blog.caranddriver.com/wp-content/uploads/2014/07/2013-Jeep-Wrangler-Unlimited-Rubicon-10th-Anniversary-Edition-PLACEMENT.jpg",
    "created_at": "2017-10-14T20:13:22.586Z"
  }
];

export default () => {
  return new Promise(resolve => resolve(mockData));
}