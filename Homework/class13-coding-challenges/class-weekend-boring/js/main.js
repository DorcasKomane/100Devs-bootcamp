//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', checkDayOfTheWeek);

function checkDayOfTheWeek(){
  let dayOfTheWeek = document.querySelector('#day').value.toLowerCase();

  if ( dayOfTheWeek === 'tuesday' || dayOfTheWeek === 'thursday' )
    console.log('YOU HAVE CLASS TODAY!');
  else if(dayOfTheWeek === 'wednesday')
    console.log('IT\'S HUMPDAY!');
  else if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday')
    console.log('IT\'S THE WEEKEEEEEEEEND!')
  else console.log('BORING');

}