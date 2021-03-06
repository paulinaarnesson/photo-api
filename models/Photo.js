module.exports = (bookshelf) => {
	return bookshelf.model('Photo', {
		tableName: 'photo',
		albums() {
			return this.belongsToMany('Album');
		},
		users() {
			return this.belongsTo('User');
		},
	}, {
		fetchById(id, fetchOptions = {}) {
			return new this({ id }).fetch(fetchOptions);
		},
	});
}
