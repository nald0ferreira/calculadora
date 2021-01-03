const form = document.querySelector('form#form')
form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    //EVENT que previne o comportamento padrão do navegador
    event.preventDefault()

    //Variáveis para receber os parametros inseridos através das functions
    const age = getIputNumberValue('age')
    const weight = getIputNumberValue('weight')
    const height = getIputNumberValue('height')
    const gender = getSelectedValue('gender')
    const activity_level = getSelectedValue('activity_level')

    //Cálculo da Taxa Metabólica Basal
    const tmb = (
        gender === 'female' 
            ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
            : (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
        )
    
    const maintenance = Math.round(tmb * Number(activity_level))
    const loseWeight = maintenance - 450
    const gainWeight = maintenance + 450
    
    //Início Div Layout
    const layout = `
    <h2>Aqui está o resultado:</h2>
    <div class="result-content">
      <ul>
        <li>
          Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
        </li>
        <li>
          Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>.
        </li>
        <li>
          Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.
        </li>
        <li>
          Para ganhar peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.
        </li>
      </ul>
    </div>
    `
    //Final Div Layout

    const result = document.getElementById('result')
    result.innerHTML = layout
    
}
//Funcões que recebem os paramentros dos Id's
function getSelectedValue(id){
    const select = document.getElementById(id)
    return select.options[select.selectedIndex].value
}

function getIputNumberValue(id){
    return Number(document.getElementById(id).value)
}