var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schemaTheLoai = new Schema({
    _id: { 
    	type: 'String', 
    	unique: true, 
    	default: function() { 
    		return new Date().getTime().toString(8) 
    	} 
    },
    name: { type: String },
    nameKhongDau: { type: String },
    loaitin: {[
    	_id: {
    		type: 'String', 
	    	unique: true, 
	    	default: function() { 
	    		return new Date().getTime().toString(8) 
	    	}
    	},
    	name: { type: String },
    	nameKhongDau: { type: String },
    ]}
}, { timestamps: true });

schemaTheLoai.virtual('id').get(function() {
    return this._id.toHexString();
});

// schemaTheLoai.plugin(mongoosePaginate);

module.exports = mongoose.model('TheLoai', schemaTheLoai);