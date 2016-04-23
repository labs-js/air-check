var mongoSchema =   mongoose.Schema;
var symptomSchema  = {
    "symptoms" : Array,
    "latitude" : {type: String, default: ""},
    "longitude": {type: String, default:""}
};
mongoose.model('symptoms',symptomSchema);