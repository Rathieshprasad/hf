var mightyBoxes = document.querySelectorAll('.mighty-box')

mightyBoxes.forEach(function (mightyBox) {
  mightyBox.addEventListener('mouseover', function () {
    var pricingButton = mightyBox.querySelector(
      '.pricing-button.box-pricing-button'
    )
    pricingButton.style.backgroundColor = 'red'
  })

  mightyBox.addEventListener('mouseout', function () {
    var pricingButton = mightyBox.querySelector(
      '.pricing-button.box-pricing-button'
    )
    pricingButton.style.backgroundColor = ''
  })
})

function toggleActive(button) {
  document.querySelectorAll('.pricing-calc-tabs').forEach((btn) => {
    btn.classList.remove('active')
  })

  button.classList.add('active')
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('agent-based-pricing').onclick = function () {
    document.getElementById('agent-based-pricing').classList.add('selected')
    document.getElementById('unlimited-agents').classList.remove('selected')
    document.querySelector('#annual').click()

    var priceElements = document.querySelectorAll('.pricing-dollar-amt-snip')

    priceElements.forEach(function (element) {
      element.innerHTML = 'Per agent/mo'
    })
    document.getElementById('monthly').style.display = 'block'

    document.getElementById('unlimited-agents-a').style.backgroundColor =
      '#ffeada'
    document.getElementById('agent-based-pricing-a').style.backgroundColor =
      '#fff'

    document.getElementById('mighty').innerHTML = 'Mighty'
    document.getElementById('fantastic').innerHTML = 'Fantastic'
    document.getElementById('enterprise').innerHTML = 'Enterprise'
    document.getElementById('enterprise-plus').innerHTML = 'Enterprise Plus'
    document.getElementById('mighty-tb').innerHTML = 'Mighty'
    document.getElementById('fantastic-tb').innerHTML = 'Fantastic'
    document.getElementById('enterprise-tb').innerHTML = 'Enterprise'
    document.getElementById('enterprise-plus-tb').innerHTML = 'Enterprise Plus'
  }
  document.getElementById('unlimited-agents').onclick = function () {
    document.getElementById('agent-based-pricing').classList.remove('selected')
    document.getElementById('unlimited-agents').classList.add('selected')
    document.querySelector('#annual').click()

    var priceElements = document.querySelectorAll('.pricing-dollar-amt-snip')

    priceElements.forEach(function (element) {
      element.innerHTML = '/ month'
    })

    document.getElementById('monthly').style.display = 'none'

    document.getElementById('unlimited-agents-a').style.backgroundColor = '#fff'
    document.getElementById('agent-based-pricing-a').style.backgroundColor =
      '#ffeada'

    document.getElementById('mighty').innerHTML = 'Starter'
    document.getElementById('fantastic').innerHTML = 'Growth'
    document.getElementById('enterprise').innerHTML = 'Scale'
    document.getElementById('enterprise-plus').innerHTML = 'Scale Plus'
    document.getElementById('mighty-tb').innerHTML = 'Starter'
    document.getElementById('fantastic-tb').innerHTML = 'Growth'
    document.getElementById('enterprise-tb').innerHTML = 'Scale'
    document.getElementById('enterprise-plus-tb').innerHTML = 'Scale Plus'
  }
  document.querySelector('#monthly').onclick = function () {
    toggleActive(this)
    var elementsToHide = document.querySelectorAll(
      '.pricing-savings-percentage-value'
    )

    elementsToHide.forEach(function (element) {
      element.style.display = 'none'
    })

    document.getElementById('mighty-price').innerHTML = '39'
    document.getElementById('fantastic-price').innerHTML = '59'
    document.getElementById('enterprise-price').innerHTML = '72'
    document.getElementById('enterprise-plus-price').innerHTML = '99'
  }
  document.querySelector('#annual').onclick = function () {
    toggleActive(this)
    var elementsToHide = document.querySelectorAll(
      '.pricing-savings-percentage-value'
    )

    elementsToHide.forEach(function (element) {
      element.style.display = 'block'
    })

    if (
      document.getElementById('unlimited-agents').classList.contains('selected')
    ) {
      // Unlimited Agents pricing
      document.getElementById('mighty-price').innerHTML = '1,499'
      document.getElementById('fantastic-price').innerHTML = '1,999'
      document.getElementById('enterprise-price').innerHTML = '2,999'
      document.getElementById('enterprise-plus-price').innerHTML = '4,999'
      var elementsToHide = document.querySelectorAll(
        '.pricing-savings-percentage-value'
      )

      elementsToHide.forEach(function (element) {
        element.style.display = 'none'
      })
    } else {
      // Agent-Based pricing
      document.getElementById('mighty-price').innerHTML = '29'
      document.getElementById('fantastic-price').innerHTML = '39'
      document.getElementById('enterprise-price').innerHTML = '52'
      document.getElementById('enterprise-plus-price').innerHTML = '64'
      var valuesToAssign = [
        '25% Savings<sup>*</sup>',
        '16% Savings<sup>*</sup>',
        '12% Savings<sup>*</sup>',
        '10% Savings<sup>*</sup>',
      ]

      var elements = document.querySelectorAll(
        '.pricing-savings-percentage-value'
      )

      elements.forEach(function (element, index) {
        // Check if the index is within the bounds of the array
        if (index < valuesToAssign.length) {
          // Assign a value from the array to each element
          element.innerHTML = valuesToAssign[index]
        } else {
          // Handle the case when there are more elements than values
          console.error('Not enough values provided for all elements.')
        }
      })
    }
  }
  document.querySelector('#two-year').onclick = function () {
    toggleActive(this)
    var elementsToHide = document.querySelectorAll(
      '.pricing-savings-percentage-value'
    )

    elementsToHide.forEach(function (element) {
      element.style.display = 'block'
    })

    if (
      document.getElementById('unlimited-agents').classList.contains('selected')
    ) {
      // Unlimited Agents pricing
      document.getElementById('mighty-price').innerHTML = '1,149'
      document.getElementById('fantastic-price').innerHTML = '1,599'
      document.getElementById('enterprise-price').innerHTML = '2,399'
      document.getElementById('enterprise-plus-price').innerHTML = '3,999'
      var valuesToAssign = [
        '23% Savings<sup>*</sup>',
        '20% Savings<sup>*</sup>',
        '20% Savings<sup>*</sup>',
        '20% Savings<sup>*</sup>',
      ]

      var elements = document.querySelectorAll(
        '.pricing-savings-percentage-value'
      )

      elements.forEach(function (element, index) {
        // Check if the index is within the bounds of the array
        if (index < valuesToAssign.length) {
          // Assign a value from the array to each element
          element.innerHTML = valuesToAssign[index]
        } else {
          // Handle the case when there are more elements than values
          console.error('Not enough values provided for all elements.')
        }
      })
    } else {
      // Agent-Based pricing
      document.getElementById('mighty-price').innerHTML = '26'
      document.getElementById('fantastic-price').innerHTML = '39'
      document.getElementById('enterprise-price').innerHTML = '52'
      document.getElementById('enterprise-plus-price').innerHTML = '64'
      var valuesToAssign = [
        '33% Savings<sup>*</sup>',
        '34% Savings<sup>*</sup>',
        '34% Savings<sup>*</sup>',
        '35% Savings<sup>*</sup>',
      ]

      var elements = document.querySelectorAll(
        '.pricing-savings-percentage-value'
      )

      elements.forEach(function (element, index) {
        // Check if the index is within the bounds of the array
        if (index < valuesToAssign.length) {
          // Assign a value from the array to each element
          element.innerHTML = valuesToAssign[index]
        } else {
          // Handle the case when there are more elements than values
          console.error('Not enough values provided for all elements.')
        }
      })
    }
  }
  document.querySelector('#three-year').onclick = function () {
    toggleActive(this)
    var elementsToHide = document.querySelectorAll(
      '.pricing-savings-percentage-value'
    )

    elementsToHide.forEach(function (element) {
      element.style.display = 'block'
    })
    if (
      document.getElementById('unlimited-agents').classList.contains('selected')
    ) {
      // Unlimited Agents pricing
      document.getElementById('mighty-price').innerHTML = '1,299'
      document.getElementById('fantastic-price').innerHTML = '1,729'
      document.getElementById('enterprise-price').innerHTML = '2,609'
      document.getElementById('enterprise-plus-price').innerHTML = '4,329'
      var valuesToAssign = [
        '13% Savings<sup>*</sup>',
        '13% Savings<sup>*</sup>',
        '13% Savings<sup>*</sup>',
        '13% Savings<sup>*</sup>',
      ]

      var elements = document.querySelectorAll(
        '.pricing-savings-percentage-value'
      )

      elements.forEach(function (element, index) {
        // Check if the index is within the bounds of the array
        if (index < valuesToAssign.length) {
          // Assign a value from the array to each element
          element.innerHTML = valuesToAssign[index]
        } else {
          // Handle the case when there are more elements than values
          console.error('Not enough values provided for all elements.')
        }
      })
    } else {
      // Agent-Based pricing
      document.getElementById('mighty-price').innerHTML = '27'
      document.getElementById('fantastic-price').innerHTML = '41'
      document.getElementById('enterprise-price').innerHTML = '55'
      document.getElementById('enterprise-plus-price').innerHTML = '69'
      var valuesToAssign = [
        '30% Savings<sup>*</sup>',
        '30% Savings<sup>*</sup>',
        '30% Savings<sup>*</sup>',
        '30% Savings<sup>*</sup>',
      ]

      var elements = document.querySelectorAll(
        '.pricing-savings-percentage-value'
      )

      elements.forEach(function (element, index) {
        // Check if the index is within the bounds of the array
        if (index < valuesToAssign.length) {
          // Assign a value from the array to each element
          element.innerHTML = valuesToAssign[index]
        } else {
          // Handle the case when there are more elements than values
          console.error('Not enough values provided for all elements.')
        }
      })
    }
  }

  var questionColumns = document.querySelectorAll('.question-column')

  questionColumns.forEach(function (questionColumn) {
    var h6Element = questionColumn.querySelector('h6')
    var pElement = questionColumn.querySelector('p')
    var downArrow = questionColumn.querySelector('#down-arrow')

    h6Element.addEventListener('click', function () {
      if (pElement.style.display === 'none' || pElement.style.display === '') {
        downArrow.classList.add('arrow-rotate')
        pElement.style.display = 'block'
        pElement.style.height = 'auto'
        var pElementHeight = pElement.clientHeight + 'px'
        pElement.style.height = '0'
        setTimeout(function () {
          pElement.style.height = pElementHeight
        }, 0)
      } else {
        downArrow.classList.remove('arrow-rotate')
        pElement.style.height = '0'
        setTimeout(function () {
          pElement.style.display = 'none'
        }, 200)
      }
      pElement.style.transition = 'height 0.2s ease-out'
    })

    var knowMoreButton = document.querySelector('.know-more-button')
    var additionalTablesContainer = document.querySelector(
      '.additional-table-container'
    )

    knowMoreButton.addEventListener('click', function () {
      knowMoreButton.style.display = 'none'
      additionalTablesContainer.style.display = 'block'
    })
  })
})
