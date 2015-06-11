// Returns accesors
'use strict';

var dataset = [];
var countries = ['DE', 'UK', 'US', 'AR', 'BR', 'CL', 'RU', 'RO', 'AF', 'AU'];
var country;
var lat;
var lon;
var x;
var y;
var date;

function randomDate(start, end) {
  var dt = start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(dt);
}

for(var i = 0; i < 10; i++ ){
  country = _.sample(countries);
  date = randomDate(new Date(2050, 0, 1), new Date());
  lat = _.random(-90, 90);
  lon = _.random(-180, 180, true);
  x = _.random(0, 300);
  y = _.random(0, 300);
  dataset.push({
    id: i,
    date: date,
    x: x,
    y: y,
    country:
    country,
    lat:lat,
    lon:lon,
  });
}

var t1 = {
  url: 'https://docs.google.com/spreadsheet/ccc?key=1UW1uOa7uoLZTC5M7NspVSWZeCUJJJUspY75GAIKzhAw#gid=0', // jshint ignore:line
  backend: 'gdocs',
  as: 'gdocs_example'
};

var t2 = {
  url: 'data/example.csv', // jshint ignore:line
  backend: 'csv',
  as: 'csv_example'
};

var t3 = {
  backend: 'inline',
  records: dataset,
  as: 'inline_example'
};

/// TODO: Proxy loadsh functions.
tables(t2)
.ops([
  {
    method: 'set',
    table: 'csv_example'
  },
  // {
  //   method: 'join',
  //   table: 'gdocs_example',
  //   where: {cmp: '=', left:'country', right: 'country'}
  // },
  // {
  //   method: 'filter',
  //   where: {cmp: '<', left:'id', right: 300}
  // },
  // // {
  // //   method:'limit',
  // //   start: 0,
  // //   numRows: 2
  // // },
  // {
  //   method:'sort',
  //   field: 'x',
  //   order: 'desc'
  // },
  {
    method:'sum',
    as: 'total',
    field: 'Achievement14E',
    groupBy: 'SchoolId'
  },
  // {
  //   method:'rename',
  //   oldName: 'country',
  //   newName: 'pais'
  // },
  // // {
  // //   method:'groupBy',
  // //   field: 'pais'
  // // },
  // {
  //   method:'delete',
  //   field: 'date'
  // },
  // {
  //   method:'add',
  //   field: 'extraido',
  //   type: 'column',
  //   from: {
  //     type: 'row',
  //     table: 'gdocs_example',
  //     field: 'country',
  //     from: 1,
  //     to: 5
  //   }
  // },
  // {
  //   method:'trim',
  //   fields: ['pais', 'extraido', 'label']
  // },
  // {
  //   method: 'cast',
  //   fields: [{
  //     field: 'lat',
  //     type: 'float',
  //     args: []
  //   }]
  // },
  // {
  //   method: 'substr',
  //   field: 'extra',
  //   start: 0,
  //   end: 3
  // }
])
.execute(function(data){
  console.log(data);
});
