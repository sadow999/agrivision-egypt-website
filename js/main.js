// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Ownership Chart
const ownershipCtx = document.getElementById('ownershipChart').getContext('2d');
const ownershipChart = new Chart(ownershipCtx, {
    type: 'doughnut',
    data: {
        labels: ['Founders', 'Angel Investors', 'Employee Stock Option Pool'],
        datasets: [{
            data: [60, 25, 15],
            backgroundColor: [
                '#2e7d32',
                '#81c784',
                '#ff9800'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});

// Market Growth Chart
const marketGrowthCtx = document.getElementById('marketGrowthChart').getContext('2d');
const marketGrowthChart = new Chart(marketGrowthCtx, {
    type: 'line',
    data: {
        labels: ['2024', '2025', '2026', '2027', '2028', '2029', '2030'],
        datasets: [{
            label: 'Egyptian AgriTech Market (USD Billions)',
            data: [3.5, 4.2, 5.0, 5.6, 6.0, 6.1, 6.28],
            borderColor: '#2e7d32',
            backgroundColor: 'rgba(46, 125, 50, 0.1)',
            borderWidth: 3,
            tension: 0.3,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    callback: function(value) {
                        return '$' + value + 'B';
                    }
                }
            }
        }
    }
});

// AI Models Chart
const aiModelsCtx = document.getElementById('aiModelsChart').getContext('2d');
const aiModelsChart = new Chart(aiModelsCtx, {
    type: 'bar',
    data: {
        labels: ['Crop Health Analysis', 'Soil Moisture Prediction', 'Irrigation Optimization', 'Yield Prediction'],
        datasets: [{
            label: 'Performance Target',
            data: [94, 88, 95, 92],
            backgroundColor: '#2e7d32',
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                min: 80,
                max: 100,
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            }
        }
    }
});

// Funding Allocation Chart
const fundingAllocationCtx = document.getElementById('fundingAllocationChart').getContext('2d');
const fundingAllocationChart = new Chart(fundingAllocationCtx, {
    type: 'pie',
    data: {
        labels: ['Technology & Product Development', 'Operations & Hardware Inventory', 'Sales & Marketing', 'General & Administrative'],
        datasets: [{
            data: [40, 30, 20, 10],
            backgroundColor: [
                '#2e7d32',
                '#81c784',
                '#ff9800',
                '#795548'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});

// Financial Projections Chart
const financialCtx = document.createElement('canvas');
const financialSection = document.querySelector('#financials .row');
const financialCard = document.createElement('div');
financialCard.className = 'col-12 mt-4';
financialCard.setAttribute('data-aos', 'fade-up');

const financialCardInner = document.createElement('div');
financialCardInner.className = 'card feature-card';

const financialCardBody = document.createElement('div');
financialCardBody.className = 'card-body';

const financialTitle = document.createElement('h5');
financialTitle.innerHTML = '<i class="fas fa-chart-line me-2"></i> Revenue Projection (5 Years)';

financialCardBody.appendChild(financialTitle);
financialCardBody.appendChild(financialCtx);
financialCardInner.appendChild(financialCardBody);
financialCard.appendChild(financialCardInner);
financialSection.appendChild(financialCard);

const financialChart = new Chart(financialCtx, {
    type: 'line',
    data: {
        labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
        datasets: [{
            label: 'Revenue (USD Millions)',
            data: [1.8, 6.5, 15, 30, 50],
            borderColor: '#2e7d32',
            backgroundColor: 'rgba(46, 125, 50, 0.1)',
            borderWidth: 3,
            tension: 0.3,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return '$' + value + 'M';
                    }
                }
            }
        }
    }
});