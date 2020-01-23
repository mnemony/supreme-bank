// templates for credit values reanges

const basic = `
<h2>Co zrobisz z otrzymanym kredytem?</h2>
<div class="card-deck">
            <div class="card">
                <img class="responsive-image" src="images/spaimage.jpg" alt="">
                <h3>Weekend w spa?</h3>
            </div>
            <div class="card">
                <img class="responsive-image" src="images/blender.jpeg" alt="">
                <h3>Nowy blender?</h3>
            </div>
        </div>
`

const silver = `
<h2>Co zrobisz z otrzymanym kredytem?</h2>
<div class="card-deck">
            <div class="card">
                <img class="responsive-image" src="images/egypt.jpg" alt="">
                <h3>Wycieczka do Egiptu?</h3>
            </div>
            <div class="card">
                <img class="responsive-image" src="images/mobile.jpg" alt="">
                <h3>Nowy smartfon?</h3>
            </div>
        </div>
`

const gold = `
<h2>Co zrobisz z otrzymanym kredytem?</h2>
<div class="card-deck">
            <div class="card">
                <img class="responsive-image" src="images/studia.jpg" alt="">
                <h3>Studia podyplomowe?</h3>
            </div>
            <div class="card">
                <img class="responsive-image" src="images/laptok.jpg" alt="">
                <h3>Laptop?</h3>
            </div>
        </div>
`

const platinium = `
<h2>Co zrobisz z otrzymanym kredytem?</h2>
<div class="card-deck">
            <div class="card">
                <img class="responsive-image" src="images/wyspa.jpg" alt="">
                <h3>Podróż życia?</h3>
            </div>
            <div class="card">
                <img class="responsive-image" src="images/remont.jpg" alt="">
                <h3>Remont?</h3>
            </div>
        </div>
`

// templates for investment fund

const investBasic = `<div class="possible">Studia pierwszego stopnia na prywatnej uczelni</div>
<div class="possible">Kilkuletnie kursy języków obcych + wakacyjne praktyki językowe za zgranicą</div>
<div class="possible">Start w małym biznesie: mobilna kawiarnia, usługi specjalistyczne, mały sklep internetowy?
</div>`

const investBasicPlus = `<div class="possible">Studia I i II stopnia na prywatnej uczelni w Polsce</div>
<div class="possible">Kilkuletnie kursy języków obcych + wakacyjne praktyki językowe za zgranicą</div>
<div class="possible">Start w małym biznesie: mobilna kawiarnia, usługi specjalistyczne, mały sklep internetowy?
</div>`

const investSilver = `
<div class="possible">Rok niestacjonarnych studiów lekarskich w Polsce</div>
      <div class="possible">Wkład na nowe mieszkanie deweloperskie</div>
      <div class="possible">Kurs pilota samolotu turystycznego wraz z licencją
      </div>
`
const investSilverPlus = `
<div class="possible">Rezerwowy budżet na niezapowiedziane wydatki</div>
<div class="possible">Rok niestacjonarnych studiów lekarskich w Polsce</div>
      <div class="possible">Wkład na nowe mieszkanie deweloperskie</div>
      <div class="possible">Kurs pilota samolotu turystycznego wraz z licencją
      </div>
`

const investGold = `
<div class="possible">Studia w Niemczech, Austrii lub Skandynawii?</div>
      <div class="possible">Wyposażenie i prace wykończeniowe małego mieszkania.</div>
      <div class="possible">Własny sklep, usługi finansowe, mała gastronomia?
      </div>
`

const investPrime = `
<div class="possible">Studia magisterskie na większości uczelni w Wielkiej Brytanii</div>
      <div class="possible">Szkolenie wraz licencją na pilota śmigłowca</div>
      <div class="possible">Budżet pozwalający na szeroki wybór działalności gospodarczej
      </div>
`


const returnInfo = function (a, b) {
    return `
    <h2 class="orange-flash"> Po ${a} latach uda Ci się zaoszczędzić ${b} zł</h2>
    <h3>To wystarczy na:</h3>
    `
}