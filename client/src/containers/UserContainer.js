import React from 'react';
import UserTable from '../components/UserTable';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const UserContainer = ({users}) => {
  
  // function refreshPage() {
  //   window.location.reload(false);
  // }

    const transportTotal = users.map((user)=> {
        return (
          user.transportScore
        )
    })

    const foodTotal = users.map((user)=> {
      return (
        user.foodScore
      )
  })

  const travelTotal = users.map((user)=> {
    return (
      user.travelScore
    )
  })

  const userNames = users.map((user)=> {
    return (
      user.firstName
    )
  })

    const options = {
      chart: {
        type: 'bar'
    },
    title: {
        text: 'See how you compare to other users'
    },
    xAxis: {
        categories: userNames
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Co2 emissions in kgs'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Transport',
        data: transportTotal
    }, {
        name: 'Food',
        data: foodTotal
    }, {
        name: 'Travel',
        data: travelTotal
    }]
    };
    
  return (
    <div>
      <button>See how you compare</button>
          <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
        </div>
    </div>
  )
}

export default UserContainer