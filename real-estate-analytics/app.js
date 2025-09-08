// Application Data
const dashboardData = {
  "kpis": {
    "total_leads": 500,
    "conversion_rate": 16.0,
    "total_revenue": 13659644,
    "roi": 19.7,
    "avg_deal_size": 170746,
    "cost_per_lead": 75,
    "avg_pipeline_days": 85
  },
  "channel_performance": [
    {"channel": "Referrals", "total_leads": 59, "conversions": 18, "conversion_rate": 30.51, "revenue": 2914922},
    {"channel": "Organic Search", "total_leads": 73, "conversions": 20, "conversion_rate": 27.40, "revenue": 3036261},
    {"channel": "Email Marketing", "total_leads": 66, "conversions": 11, "conversion_rate": 16.67, "revenue": 1698513},
    {"channel": "Cold Calls", "total_leads": 55, "conversions": 8, "conversion_rate": 14.55, "revenue": 1509878},
    {"channel": "Google Ads", "total_leads": 72, "conversions": 10, "conversion_rate": 13.89, "revenue": 1817394},
    {"channel": "Instagram Ads", "total_leads": 52, "conversions": 6, "conversion_rate": 11.54, "revenue": 1241816},
    {"channel": "Facebook Ads", "total_leads": 67, "conversions": 5, "conversion_rate": 7.46, "revenue": 1090741},
    {"channel": "Direct Mail", "total_leads": 56, "conversions": 2, "conversion_rate": 3.57, "revenue": 350121}
  ],
  "monthly_trends": [
    {"month": "Mar 2025", "leads": 49, "conversions": 9, "conversion_rate": 18.4, "revenue": 1498499},
    {"month": "Apr 2025", "leads": 73, "conversions": 7, "conversion_rate": 9.6, "revenue": 1082705},
    {"month": "May 2025", "leads": 81, "conversions": 9, "conversion_rate": 11.1, "revenue": 1849401},
    {"month": "Jun 2025", "leads": 86, "conversions": 21, "conversion_rate": 24.4, "revenue": 3776797},
    {"month": "Jul 2025", "leads": 92, "conversions": 18, "conversion_rate": 19.6, "revenue": 2804143},
    {"month": "Aug 2025", "leads": 93, "conversions": 14, "conversion_rate": 15.1, "revenue": 2311286},
    {"month": "Sep 2025", "leads": 26, "conversions": 2, "conversion_rate": 7.7, "revenue": 336815}
  ],
  "property_revenue": [
    {"property_type": "Plot", "revenue": 3226728, "leads": 94, "conversions": 18, "percentage": 23.6},
    {"property_type": "Office Space", "revenue": 2609916, "leads": 78, "conversions": 14, "percentage": 19.1},
    {"property_type": "Commercial", "revenue": 2563902, "leads": 83, "conversions": 15, "percentage": 18.8},
    {"property_type": "Warehouse", "revenue": 2241865, "leads": 87, "conversions": 12, "percentage": 16.4},
    {"property_type": "Villa", "revenue": 1541224, "leads": 89, "conversions": 11, "percentage": 11.3},
    {"property_type": "Apartment", "revenue": 1476009, "leads": 69, "conversions": 10, "percentage": 10.8}
  ],
  "campaign_performance": [
    {"campaign": "Luxury Villas Mumbai", "type": "Google Ads", "cost": 156403, "leads": 1941, "cpl": 80.58, "roi": 31684.9, "status": "Active"},
    {"campaign": "Premium Plots Hyderabad", "type": "Google Ads", "cost": 115862, "leads": 1534, "cpl": 75.53, "roi": 33809.8, "status": "Active"},
    {"campaign": "Commercial Spaces Delhi", "type": "LinkedIn Ads", "cost": 101405, "leads": 1342, "cpl": 75.56, "roi": 33794.9, "status": "Active"},
    {"campaign": "Investment Properties", "type": "Display Ads", "cost": 89278, "leads": 1128, "cpl": 79.15, "roi": 32259.7, "status": "Active"},
    {"campaign": "Office Spaces Chennai", "type": "Facebook Ads", "cost": 81178, "leads": 1128, "cpl": 71.97, "roi": 35488.5, "status": "Paused"},
    {"campaign": "Affordable Homes Pune", "type": "Facebook Ads", "cost": 77766, "leads": 1220, "cpl": 63.74, "roi": 40080.2, "status": "Active"},
    {"campaign": "Student Housing Bangalore", "type": "Instagram Ads", "cost": 47684, "leads": 614, "cpl": 77.66, "roi": 32878.9, "status": "Active"},
    {"campaign": "Retirement Homes Goa", "type": "Email Marketing", "cost": 24248, "leads": 330, "cpl": 73.48, "roi": 34756.1, "status": "Completed"}
  ],
  "locations": [
    {"location": "Delhi NCR", "leads": 66, "conversions": 17, "conversion_rate": 25.8, "revenue": 2855517},
    {"location": "Hyderabad", "leads": 75, "conversions": 15, "conversion_rate": 20.0, "revenue": 2402327},
    {"location": "Chennai", "leads": 73, "conversions": 12, "conversion_rate": 16.4, "revenue": 2141831},
    {"location": "Bangalore", "leads": 70, "conversions": 11, "conversion_rate": 15.7, "revenue": 1919124},
    {"location": "Pune", "leads": 83, "conversions": 10, "conversion_rate": 12.0, "revenue": 1908028},
    {"location": "Ahmedabad", "leads": 67, "conversions": 8, "conversion_rate": 11.9, "revenue": 1404320},
    {"location": "Mumbai Central", "leads": 66, "conversions": 7, "conversion_rate": 10.6, "revenue": 1028496}
  ],
  "lead_scores": [
    {"score_range": "Very High (81-100)", "count": 165, "conversions": 30, "conversion_rate": 18.2, "percentage": 33.0},
    {"score_range": "Medium (31-60)", "count": 186, "conversions": 25, "conversion_rate": 13.4, "percentage": 37.2},
    {"score_range": "High (61-80)", "count": 115, "conversions": 22, "conversion_rate": 19.1, "percentage": 23.0},
    {"score_range": "Low (0-30)", "count": 34, "conversions": 3, "conversion_rate": 8.8, "percentage": 6.8}
  ],
  "insights": [
    "Referrals show the highest conversion rate at 30.5% - focus on referral program expansion",
    "June 2025 had the best performance with 24.4% conversion rate - analyze successful tactics",
    "Plot properties generate the highest revenue (₹32.3L) - prioritize plot marketing campaigns",
    "Delhi NCR shows strongest market potential with 25.8% conversion rate",
    "High-scoring leads (61+) convert at 18.6% vs 13.4% for medium scores"
  ]
};

// Chart instances
let charts = {};

// Utility Functions
function formatCurrency(amount) {
  if (amount >= 10000000) {
    return '₹' + (amount / 10000000).toFixed(1) + 'Cr';
  } else if (amount >= 100000) {
    return '₹' + (amount / 100000).toFixed(1) + 'L';
  } else {
    return '₹' + amount.toLocaleString();
  }
}

function formatNumber(num) {
  return num.toLocaleString();
}

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', function() {
  // Ensure loading overlay is hidden on start
  hideLoading();
  
  initializeKPIs();
  initializeCharts();
  initializeCampaignTable();
  initializeLocationsList();
  initializeInsights();
  setupEventListeners();
  updateLastUpdated();
  
  // Trigger KPI animations after a short delay
  setTimeout(() => {
    document.querySelectorAll('.kpi-card').forEach(card => {
      card.classList.add('animate-in');
    });
  }, 300);
});

// Initialize KPIs
function initializeKPIs() {
  const kpis = dashboardData.kpis;
  document.getElementById('totalLeads').textContent = formatNumber(kpis.total_leads);
  document.getElementById('conversionRate').textContent = kpis.conversion_rate + '%';
  document.getElementById('totalRevenue').textContent = formatCurrency(kpis.total_revenue);
  document.getElementById('roi').textContent = kpis.roi + 'x';
}

// Initialize Charts
function initializeCharts() {
  createChannelChart();
  createTrendsChart();
  createPropertyChart();
  createScoreChart();
}

// Channel Performance Chart
function createChannelChart() {
  const ctx = document.getElementById('channelChart').getContext('2d');
  const data = dashboardData.channel_performance;
  
  charts.channelChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(item => item.channel),
      datasets: [{
        label: 'Total Leads',
        data: data.map(item => item.total_leads),
        backgroundColor: '#1FB8CD',
        borderRadius: 4
      }, {
        label: 'Conversions',
        data: data.map(item => item.conversions),
        backgroundColor: '#FFC185',
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            afterBody: function(context) {
              if (context.length > 0) {
                const index = context[0].dataIndex;
                const item = data[index];
                return [
                  `Conversion Rate: ${item.conversion_rate.toFixed(1)}%`,
                  `Revenue: ${formatCurrency(item.revenue)}`
                ];
              }
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0,0,0,0.1)'
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      },
      onClick: function(event, elements) {
        if (elements.length > 0) {
          const index = elements[0].index;
          showChannelDetails(data[index]);
        }
      }
    }
  });
}

// Monthly Trends Chart
function createTrendsChart() {
  const ctx = document.getElementById('trendsChart').getContext('2d');
  const data = dashboardData.monthly_trends;
  
  charts.trendsChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map(item => item.month),
      datasets: [{
        label: 'Leads Generated',
        data: data.map(item => item.leads),
        borderColor: '#1FB8CD',
        backgroundColor: 'rgba(31, 184, 205, 0.1)',
        fill: true,
        tension: 0.4,
        yAxisID: 'y'
      }, {
        label: 'Conversion Rate (%)',
        data: data.map(item => item.conversion_rate),
        borderColor: '#B4413C',
        backgroundColor: 'rgba(180, 65, 60, 0.1)',
        fill: false,
        tension: 0.4,
        yAxisID: 'y1'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          grid: {
            display: false
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'Leads Generated'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'Conversion Rate (%)'
          },
          grid: {
            drawOnChartArea: false,
          },
        }
      }
    }
  });
}

// Property Revenue Chart
function createPropertyChart() {
  const ctx = document.getElementById('propertyChart').getContext('2d');
  const data = dashboardData.property_revenue;
  
  charts.propertyChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: data.map(item => item.property_type),
      datasets: [{
        data: data.map(item => item.revenue),
        backgroundColor: [
          '#1FB8CD',
          '#FFC185', 
          '#B4413C',
          '#ECEBD5',
          '#5D878F',
          '#DB4545'
        ],
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const item = data[context.dataIndex];
              return [
                `${context.label}: ${formatCurrency(context.parsed)}`,
                `Leads: ${item.leads}`,
                `Conversions: ${item.conversions}`,
                `Share: ${item.percentage}%`
              ];
            }
          }
        }
      }
    }
  });
}

// Lead Score Distribution Chart
function createScoreChart() {
  const ctx = document.getElementById('scoreChart').getContext('2d');
  const data = dashboardData.lead_scores;
  
  charts.scoreChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(item => item.score_range),
      datasets: [{
        label: 'Lead Count',
        data: data.map(item => item.count),
        backgroundColor: '#1FB8CD',
        borderRadius: 4
      }, {
        label: 'Conversions',
        data: data.map(item => item.conversions),
        backgroundColor: '#FFC185',
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            afterBody: function(context) {
              if (context.length > 0) {
                const index = context[0].dataIndex;
                const item = data[index];
                return [
                  `Conversion Rate: ${item.conversion_rate}%`,
                  `Percentage of Total: ${item.percentage}%`
                ];
              }
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Initialize Campaign Table
function initializeCampaignTable() {
  const tbody = document.getElementById('campaignTableBody');
  const campaigns = dashboardData.campaign_performance;
  
  tbody.innerHTML = '';
  campaigns.forEach(campaign => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${campaign.campaign}</td>
      <td>${campaign.type}</td>
      <td>${formatCurrency(campaign.cost)}</td>
      <td>${formatNumber(campaign.leads)}</td>
      <td>${campaign.roi.toLocaleString()}%</td>
      <td><span class="status-badge ${campaign.status.toLowerCase()}">${campaign.status}</span></td>
    `;
    tbody.appendChild(row);
  });
}

// Initialize Locations List
function initializeLocationsList() {
  const container = document.getElementById('locationsList');
  const locations = dashboardData.locations;
  
  container.innerHTML = '';
  locations.forEach((location, index) => {
    const item = document.createElement('div');
    item.className = 'location-item';
    item.innerHTML = `
      <div class="location-name">${location.location}</div>
      <div class="location-stats">
        <div class="location-metric">
          <div class="location-metric-value">${location.leads}</div>
          <div class="location-metric-label">Leads</div>
        </div>
        <div class="location-metric">
          <div class="location-metric-value">${location.conversion_rate}%</div>
          <div class="location-metric-label">Conv. Rate</div>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${Math.min(location.conversion_rate * 3, 100)}%"></div>
        </div>
      </div>
    `;
    container.appendChild(item);
  });
}

// Initialize Insights
function initializeInsights() {
  const container = document.getElementById('insightsList');
  const insights = dashboardData.insights;
  
  container.innerHTML = '';
  insights.forEach(insight => {
    const item = document.createElement('div');
    item.className = 'insight-item';
    item.innerHTML = `
      <div class="insight-icon">💡</div>
      <div class="insight-text">${insight}</div>
    `;
    container.appendChild(item);
  });
}

// Event Listeners
function setupEventListeners() {
  // Date filter buttons
  document.querySelectorAll('.date-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.date-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      updateDashboardData(this.dataset.period);
    });
  });
  
  // Campaign filter
  document.getElementById('campaignFilter').addEventListener('change', function() {
    filterCampaigns(this.value);
  });
}

// Update Dashboard Data (simulate different time periods)
function updateDashboardData(period) {
  showLoading();
  
  setTimeout(() => {
    // Simulate data changes based on period
    const multiplier = period === '30' ? 0.7 : period === '60' ? 0.9 : 1.0;
    
    // Update KPIs with simulated data
    const kpis = dashboardData.kpis;
    document.getElementById('totalLeads').textContent = formatNumber(Math.floor(kpis.total_leads * multiplier));
    document.getElementById('conversionRate').textContent = (kpis.conversion_rate * multiplier).toFixed(1) + '%';
    document.getElementById('totalRevenue').textContent = formatCurrency(Math.floor(kpis.total_revenue * multiplier));
    document.getElementById('roi').textContent = (kpis.roi * multiplier).toFixed(1) + 'x';
    
    hideLoading();
  }, 1500);
}

// Filter Campaigns
function filterCampaigns(status) {
  const tbody = document.getElementById('campaignTableBody');
  const campaigns = dashboardData.campaign_performance;
  
  const filteredCampaigns = status ? campaigns.filter(c => c.status === status) : campaigns;
  
  tbody.innerHTML = '';
  filteredCampaigns.forEach(campaign => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${campaign.campaign}</td>
      <td>${campaign.type}</td>
      <td>${formatCurrency(campaign.cost)}</td>
      <td>${formatNumber(campaign.leads)}</td>
      <td>${campaign.roi.toLocaleString()}%</td>
      <td><span class="status-badge ${campaign.status.toLowerCase()}">${campaign.status}</span></td>
    `;
    tbody.appendChild(row);
  });
}

// Sort Table
let sortDirection = {};
function sortTable(columnIndex) {
  const table = document.getElementById('campaignTable');
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  
  const isAscending = sortDirection[columnIndex] !== 'asc';
  sortDirection[columnIndex] = isAscending ? 'asc' : 'desc';
  
  rows.sort((a, b) => {
    const aVal = a.cells[columnIndex].textContent.trim();
    const bVal = b.cells[columnIndex].textContent.trim();
    
    // Handle numeric columns
    if (columnIndex === 2 || columnIndex === 3 || columnIndex === 4) {
      const aNum = parseFloat(aVal.replace(/[₹,%]/g, ''));
      const bNum = parseFloat(bVal.replace(/[₹,%]/g, ''));
      return isAscending ? aNum - bNum : bNum - aNum;
    }
    
    // Handle text columns
    return isAscending ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
  });
  
  rows.forEach(row => tbody.appendChild(row));
}

// Show Channel Details
function showChannelDetails(channelData) {
  const modal = document.getElementById('detailModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  modalTitle.textContent = `${channelData.channel} - Detailed Analytics`;
  modalBody.innerHTML = `
    <div style="display: grid; gap: 16px;">
      <div class="kpi-grid" style="grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));">
        <div class="card" style="padding: 16px; text-align: center;">
          <div style="font-size: 24px; font-weight: bold; color: var(--color-primary);">${channelData.total_leads}</div>
          <div style="font-size: 12px; color: var(--color-text-secondary);">Total Leads</div>
        </div>
        <div class="card" style="padding: 16px; text-align: center;">
          <div style="font-size: 24px; font-weight: bold; color: var(--color-success);">${channelData.conversions}</div>
          <div style="font-size: 12px; color: var(--color-text-secondary);">Conversions</div>
        </div>
        <div class="card" style="padding: 16px; text-align: center;">
          <div style="font-size: 24px; font-weight: bold; color: var(--color-warning);">${channelData.conversion_rate.toFixed(1)}%</div>
          <div style="font-size: 12px; color: var(--color-text-secondary);">Conversion Rate</div>
        </div>
        <div class="card" style="padding: 16px; text-align: center;">
          <div style="font-size: 24px; font-weight: bold; color: var(--color-info);">${formatCurrency(channelData.revenue)}</div>
          <div style="font-size: 12px; color: var(--color-text-secondary);">Total Revenue</div>
        </div>
      </div>
      <div class="insight-item">
        <div class="insight-icon">📊</div>
        <div class="insight-text">
          <strong>Performance Analysis:</strong> This channel generates ${channelData.total_leads} leads with a ${channelData.conversion_rate.toFixed(1)}% conversion rate, 
          contributing ${formatCurrency(channelData.revenue)} to total revenue. ${channelData.conversion_rate > 20 ? 'Excellent performance - consider scaling this channel.' : channelData.conversion_rate > 15 ? 'Good performance with room for optimization.' : 'Below average performance - review and optimize strategy.'}
        </div>
      </div>
    </div>
  `;
  
  modal.classList.add('show');
}

// Modal Functions
function closeModal() {
  document.getElementById('detailModal').classList.remove('show');
}

// Export Chart (Mock)
function exportChart(chartId) {
  showLoading();
  setTimeout(() => {
    alert(`Chart data exported successfully! (This is a demo feature)`);
    hideLoading();
  }, 1000);
}

// Refresh Data
function refreshData() {
  showLoading();
  setTimeout(() => {
    // Simulate real-time updates
    const randomMultiplier = 0.9 + Math.random() * 0.2; // 0.9 to 1.1
    const kpis = dashboardData.kpis;
    
    document.getElementById('totalLeads').textContent = formatNumber(Math.floor(kpis.total_leads * randomMultiplier));
    document.getElementById('conversionRate').textContent = (kpis.conversion_rate * randomMultiplier).toFixed(1) + '%';
    document.getElementById('totalRevenue').textContent = formatCurrency(Math.floor(kpis.total_revenue * randomMultiplier));
    document.getElementById('roi').textContent = (kpis.roi * randomMultiplier).toFixed(1) + 'x';
    
    updateLastUpdated();
    hideLoading();
  }, 2000);
}

// Loading Functions
function showLoading() {
  document.getElementById('loadingOverlay').classList.add('show');
}

function hideLoading() {
  document.getElementById('loadingOverlay').classList.remove('show');
}

// Update Last Updated Time
function updateLastUpdated() {
  const now = new Date();
  const formatted = now.toLocaleString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Kolkata'
  });
  document.getElementById('lastUpdated').textContent = formatted + ' IST';
}

// Click outside modal to close
document.addEventListener('click', function(event) {
  const modal = document.getElementById('detailModal');
  if (event.target === modal) {
    closeModal();
  }
});