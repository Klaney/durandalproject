var mongoose = require('mongoose'), 
	Schema = mongoose.Schema
	moment = require('moment');

var ManagementIncidentSchema = mongoose.Schema({
  referenceNumber: Number,
  summary: String,
  currentStatus: String,
  endUser: String,
  minutesToBreach: Number,
  logged: { type: String, 'default': moment().format('MM/DD/YYYY h:mm:ssa') }
});

module.exports = mongoose.model('ManagementIncidentSchema', ManagementIncidentSchema);