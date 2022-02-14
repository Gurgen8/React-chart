//custom Pie chart

export const options = {
    colors: ["#fbcf71", "#1f7bb6", "#00acac"],
    labels: ["Total Views", "Total Click", "Signups",],
    plotOptions: {
        pie: {
            startAngle: 0,
            endAngle: 360,
            expandOnClick: true,
            offsetX: 0,
            margin: 20,
            offsetY: 0,
            customScale: 1,
            dataLabels: {
                offset: 0,
                minAngleToShowLabel: 10
            },

            donut: {
                size: '70%',
                background: 'transparent',
                border: "none",
                margin: "20px",
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '22px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 600,
                        color: undefined,
                        offsetY: -10,
                        formatter: function (val) {
                            return val
                        }
                    },

                    value: {
                        show: true,
                        fontSize: '16px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        color: undefined,
                        offsetY: 16,
                        formatter: function (val) {
                            return val
                        }
                    },
                    title: {
                        text: undefined,
                        align: 'left',
                        margin: 10,
                        offsetX: 0,
                        offsetY: 0,
                        floating: false,
                        style: {
                            fontSize: '14px',
                            fontWeight: 'bold',
                            fontFamily: undefined,
                            color: '#263238'
                        },
                    },
                    total: {
                        show: true,
                        text: "200",
                        showAlways: true,
                        label: 50,
                        fontSize: '35px',
                        fontFamily: 'Open sans',
                        fontWeight: 500,
                        color: '#ccc',
                        margin: "20px",
                        formatter: function () {
                            return

                        }
                    }
                }
            },
        }

    }
}

