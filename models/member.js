var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');//mã hóa và giải mã mật khẩu.

var Schema = mongoose.Schema;

var memberSchema = new Schema({
	info: {
		firstname: String,
		lastname: String,
		phone: String,
		company: String,
		address: String,
		cities: [{ type: Schema.ObjectId, ref: 'City'}],// store array city _id
		countries: [{type: Schema.ObjectId, ref: 'Country'}]// store array country _id

	},
	local: {// Use local
		email: String,
		password: String,
		adminPin: String,
		activeToken: String,
		activeExpires: Date,
		resetPasswordToken: String,
		resetPasswordExpires: Date
	},
	facebook: { //Use passport facebook
		id: String,
		token: String,
		email: String,
		name: String,
		photo: String
	},
	google: {// use passport google
		id: String,
		token: String,
		email: String,
		name: String,
		photo: String
	},
	newsletter: Boolean,//True or False
	roles: String, //ADMIN, MOD, MEMBER, VIP
	status: String //Trạng thái: ACTIVE, INACTIVE, SUSPENDED
}, {
	timestamps: true
});

//Mã hóa mật khẩu
memberSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//Giải mã mật khẩu
memberSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

memberSchema.methods.isInActivated = function(checkStatus){
	if(checkStatus === "INACTIVE"){
		return true;
	}else{
		return false;
	}
};

memberSchema.methods.isSuspended = function(checkStatus){
	if(checkStatus === "SUSPENDED"){
		return true;
	}else{
		return false;
	}
};

module.exports = mongoose.model('Member', memberSchema);