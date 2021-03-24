let users = [
    {id: 1, nama: 'putra', email: 'putra@gmail.com'},
    {id: 2, nama: 'hengki', email: 'hengki@gmail.com'}
]

module.exports ={
	Index:function(request, response){
	response.render('user/index', {users})
	},
	Store:function(request, response){
		console.log(request.body)
		users.push(request.body)
		response.send({
		status: true,
		method: request.method,
		message: 'Data berhasil disimpan',
		data: users,
		url: request.url
		})
	},
    update:function(request, response){
		const id = request.params.id

		User.findById(id, function(error, data){
			if (error) console.log(error)
			response.render('pages/user/edit',{user: data})
		})
	},
	Update:function (request, response){
	// const id = req.params //json
	const id = request.params.id
		users.filter(user => {
			if(user.id == id) {
				user.id = id
				user.name = request.body.name
				user.email = request.body.email

				return user
			}
		})
	// res.send(id)
		response.json({
			status: true,
			method: request.method,
			message: 'Data berhasil diubah',
			data: users,
			url: request.url
		})
	},

	Delete:function (request, response) {
		let id = request.params.userId
		users = users.filter(user => user.id != id)
		response.json({
			status: true,
			method: request.method,
			message: 'Data berhasil dihapus',
			data: users,
			url: request.url
		}) //string
	}

}