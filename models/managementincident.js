var mongoose = require('mongoose'), 
	Schema = mongoose.Schema;

var ManagementIncidentSchema = mongoose.Schema({
  referenceNumber: Number,
  summary: String,
  currentStatus: String,
  endUser: String,
  minutesToBreach: Number,
  logged: { type: Date, 'default': Date.now }
});

module.exports = mongoose.model('ManagementIncidentSchema', ManagementIncidentSchema);