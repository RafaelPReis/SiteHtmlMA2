
    document.querySelectorAll('.toggle-result').forEach(button => {
        button.addEventListener('click', () => {
            const resultDiv = button.closest('tr').querySelector('.result');
            if (resultDiv.classList.contains('hidden')) {
                resultDiv.classList.remove('hidden');
                button.textContent = 'Esconder Resultado';
            } else {
                resultDiv.classList.add('hidden');
                button.textContent = 'Mostrar Resultado';
            }
        });
    });
