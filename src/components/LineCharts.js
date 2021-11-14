import React from 'react'
import { Line  } from 'react-chartjs-2'

function LineCharts() {
    const data = {
        labels: ['Jan','Feb','March','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'],
        dataSets: [
            {
                labels: 'Value',
                data: []
            }
        ]
    }
    return (
        <div>
            <Line data={}/>
        </div>
    )
}

export default LineCharts
