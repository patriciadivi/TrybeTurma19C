function sum() {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const result = parseInt(value1) + parseInt(value2);
    const numbers = ['1234567890']
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
    
  }

  const sum = (value1, value2) => {
    try {
      verifyIsNumber(value1, value2);
      return document.getElementById('result').innerHTML = `Resultado: ${result}`;

    } catch (error) {
      throw error.message;
    }
  };

  window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
  }
