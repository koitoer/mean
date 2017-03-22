var configValues = require('./config');

module.exports = {

	getDbConnectionString : function(){
		return 'mongodb://'+ configValues.uname +':'+configValues.password + '@ds137730.mlab.com:37730/nodetodo-koitoer';
	}
}