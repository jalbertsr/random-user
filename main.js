/* global $ */

const countries = {
  AU: 'Australia',
  BR: 'Brazil',
  CA: 'Canada',
  CH: 'Switzerland',
  DE: 'Germany',
  DK: 'Denmark',
  ES: 'Spain',
  FI: 'Finland',
  FR: 'France',
  GB: 'United Kingdom',
  IE: 'Ireland',
  IR: 'Iran',
  NL: 'Netherlands',
  NZ: 'New Zealand',
  TR: 'Turkey',
  US: 'United States of America'
}

const showData = () => {
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: (data) => {
      const { registered, dob, gender, nat, email, phone, location, picture } = data.results[0]
      
      const parsedRegDate = registered.date.split(' ')[0].split('-').join('/')
      const parsedDateBirth = dob.date.split(' ')[0].split('-').join('/')

      $('.registration-date').text(parsedRegDate)
      $('.born-date').text(parsedDateBirth)
      $('.gender').text(gender)
      $('.address').text(location.street)
      $('.email').text(email)
      $('.phone').text(phone)
      $('.profile-image').attr('src', picture.large)
      $('.nationality').html(`<i class="flag flag-icon flag-icon-${nat.toLowerCase()}"></i><span>${countries[data.results[0].nat]}</span>`)
    }
  })
}

showData()

$('#button').on('click', (e) => {
  showData()
})
