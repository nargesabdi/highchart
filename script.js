Highcharts.chart('container', {
    credits:{
    enabled: false
    },
    chart: {
      type: 'line'
    },
    title: {
      text: 'نمودار میزان بارندگی'
    },
    xAxis: {
      categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور']
    },
    yAxis: {
      title: {
        text: 'میلی متر'
      }
    },
    series: [{
      name: 'تهران',
      data: [7, 6, 9, 14, 18, 21]
    }, {
      name: 'قزوین',
      data: [3, 4, 5, 8, 11, 15]
    }]
  });