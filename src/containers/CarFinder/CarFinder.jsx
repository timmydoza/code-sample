import React, { Component } from 'react';
import CarList from '../../components/CarList/CarList';
import CarModal from '../../components/CarModal/CarModal';

class CarFinder extends Component {

  state = {
    cars: [{
      "key": 1,
      "year": 2013,
      "make": "Kia",
      "model": "Optima",
      "mileage": 24235,
      "drivetrain": "FWD",
      "bodytype": "sedan",
      "image_url": "http://www.optimaforums.com/forum/attachments/new-member-introductions/11137d1347548855-new-2013-kia-optima-sx-l-titanium-photo.jpg",
      "created_at": "2016-10-14T20:13:22.586Z"
      },
      {
      "key": 2,
      "year": 2013,
      "make": "Hyundai",
      "model": "Accent",
      "mileage": 21587,
      "drivetrain": "FWD",
      "bodytype": "sedan",
      "image_url": "http://www.conceptcarz.com/images/Hyundai/2013-Hyundai-Accent-Sedan-Image-01.jpg",
      "created_at": "2016-11-14T20:13:22.586Z"
      }],
    filters: {
      year: null,
      mileage: null,
      date: null
    },
    searchText: '',
    selectedCarKey: null
  }

  selectCar = (selectedCarKey) => {
    this.setState({
      selectedCarKey
    });
  }



  render() {
    return (
      <main>
        <CarList 
          cars={this.state.cars}
          selectCar={this.selectCar}
          selectedCarKey={this.state.selectedCarKey}
        />
        <CarModal />
      </main>
    );
  }
}

export default CarFinder;
