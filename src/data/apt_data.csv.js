import * as d3 from 'd3';

const data = await d3.csv('apt_data.csv');
process.stdout.write(csvFormat(data));