var countries = {
    AU: "Australia",
    BR: "Brazil",
    CA: "Canada",
    CH: "Switzerland",
    DE: "Germany",
    DK: "Denmark",
    ES: "Spain",
    FI: "Finland",
    FR: "France",
    GB: "United Kingdom",
    IE: "Ireland",
    IR: "Iran",
    NL: "Netherlands",
    NZ: "New Zealand",
    TR: "Turkey",
    US: "United States of America"
}

function showData(){
	$.ajax({
  		url: 'https://randomuser.me/api/',
  		dataType: 'json',
  		success: function(data) {
		    console.log(data)
		    var regDate = data.results[0].registered 
		    var dateBirth = data.results[0].dob
		    var gender = data.results[0].gender
		    var location = data.results[0].location.street
		    var nat = data.results[0].nat
		    var nation = countries[data.results[0].nat]
		    var email = data.results[0].email
		    var phone = data.results[0].phone
		    var img = data.results[0].picture.large

		    var nat = nat.toLowerCase()
		    var classIcon = 'flag flag-icon flag-icon-'+nat

		    var parsedRegDate = regDate.split(' ')[0].split('-').join('/')
		    var parsedDateBirth = dateBirth.split(' ')[0].split('-').join('/') 

		    $('.registration-date').text(parsedRegDate)
		    $('.born-date').text(parsedDateBirth)
		    $('.gender').text(gender)
		    $('.address').text(location)
		    $('.email').text(email)
		    $('.phone').text(phone)
		    $('.profile-image').attr('src', img)
		    $('.nationality').html('<i class="'+classIcon+'"></i><span>'+nation+'</span>')

  		}
	})
}

showData()

$('#button').on('click', function(e){
	showData()
})
