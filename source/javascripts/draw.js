$(function() {
  $("#chart").highcharts({
    chart: { type: 'scatter' },
    title: { text: "Hello, world!" },
    xAxis: { categories: ['a', 'b', 'c'] },
    yAxis: { title: { text: "Millions USD" } },
    series: [
      {
        name: 'xxx',
        data: [1, 2, 10, 15]
      },
      {
        name: 'yyy',
        data: [3, 2, 10, 30]
      }
    ]
  });
});
