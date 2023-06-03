    // JavaScript code
    
    // Sample data
    const data = [
      { location: 'Kuala Lumpur', pm25: 24, pm10: 32, aqi: 58, airQuality: 'Good' },
      { location: 'Penang', pm25: 38, pm10: 44, aqi: 92, airQuality: 'Moderate' },
      { location: 'Johor Bahru', pm25: 42, pm10: 56, aqi: 104, airQuality: 'Moderate' },
      { location: 'Kota Kinabalu', pm25: 58, pm10: 68, aqi: 150, airQuality: 'Unhealthy' }
    ];

    // Function to populate table with data
    function populateTable() {
      const table = document.getElementById('table');
      table.innerHTML = '';

      // Add table header
      const headerRow = document.createElement('tr');
      const headerColumns = ['Location', 'PM2.5', 'PM10', 'AQI', 'Air Quality'];
      headerColumns.forEach(column => {
        const th = document.createElement('th');
        th.textContent = column;
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);

      // Add table rows
      data.forEach(entry => {
        const row = document.createElement('tr');
        Object.values(entry).forEach(value => {
          const td = document.createElement('td');
          td.textContent = value;
          row.appendChild(td);
        });
        table.appendChild(row);
      });
    }

    // Function to animate table rows
    function animateTable() {
      const tableRows = document.querySelectorAll('#table tr');
      tableRows.forEach((row, index) => {
        if (index > 0) {
          row.style.opacity = 0;
          row.style.transform = 'translateY(50px)';
          row.style.transition = `opacity 500ms ease-in-out ${index * 100}ms, transform 500ms ease-in-out ${index * 100}ms`;
          setTimeout(() => {
            row.style.opacity = 1;
            row.style.transform = 'translateY(0)';
          }, index * 100);
        }
      });
    }

    // Run the animations after the page has loaded
    window.addEventListener('load', () => {
      populateTable();
      animateTable();
    });