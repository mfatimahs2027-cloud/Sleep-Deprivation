// script.js
Chart.defaults.color = "#ffffff";
Chart.defaults.font.family = "Arial";

const gridColor = "rgba(255,255,255,0.15)";

new Chart(document.getElementById("sleepHoursChart"), {
  type: "bar",
  data: {
    labels: ["5 hours or less", "6 hours", "7 hours", "8+ hours"],
    datasets: [{
      label: "Percentage of Students",
      data: [42.6, 24.6, 18.9, 13.9],
      backgroundColor: ["#ff5a75", "#ffd166", "#4da3ff", "#58e6a8"],
      borderRadius: 12
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: value => value + "%"
        },
        grid: { color: gridColor }
      },
      x: {
        grid: { display: false }
      }
    }
  }
});

new Chart(document.getElementById("healthImpactChart"), {
  type: "doughnut",
  data: {
    labels: ["Not at all", "Slightly", "Moderately", "A lot"],
    datasets: [{
      data: [15.6, 32, 13.1, 39.3],
      backgroundColor: ["#58e6a8", "#4da3ff", "#ffd166", "#ff5a75"],
      borderColor: "#050b18",
      borderWidth: 4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom"
      }
    }
  }
});

new Chart(document.getElementById("illnessChart"), {
  type: "bar",
  data: {
    labels: ["Rarely", "1–2 times/year", "3–4 times/year", "Frequently"],
    datasets: [{
      label: "Percentage of Students",
      data: [22.1, 43, 27, 7.4],
      backgroundColor: ["#58e6a8", "#4da3ff", "#b36bff", "#ff5a75"],
      borderRadius: 12
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: value => value + "%"
        },
        grid: { color: gridColor }
      },
      x: {
        grid: { display: false }
      }
    }
  }
});

new Chart(document.getElementById("impactRadar"), {
  type: "radar",
  data: {
    labels: [
      "Memory",
      "Mood",
      "Immune Health",
      "Hormones",
      "Metabolism",
      "Academic Focus"
    ],
    datasets: [{
      label: "Impact Severity",
      data: [92, 88, 76, 82, 78, 90],
      backgroundColor: "rgba(94,230,255,0.2)",
      borderColor: "#5ee6ff",
      pointBackgroundColor: "#ffffff"
    }]
  },
  options: {
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        grid: { color: gridColor },
        angleLines: { color: gridColor },
        pointLabels: {
          color: "#ffffff"
        }
      }
    }
  }
});

function showSurveyResult() {
  const sleep = document.getElementById("q1").value;
  const health = document.getElementById("q2").value;
  const cause = document.getElementById("q3").value || "daily pressure";

  document.getElementById("surveyResult").innerHTML =
    `<b>Your Reflection:</b> You selected <b>${sleep}</b> and said lack of sleep affects your health <b>${health}</b>. If <b>${cause}</b> keeps you up, try changing one small habit tonight instead of trying to fix everything at once.`;
}

const motivationMessages = [
  "You are not lazy. You might just be exhausted.",
  "Rest is not weakness. Rest is recovery.",
  "Your worth is not measured by how late you stay awake.",
  "You do not need to destroy your health to prove you care.",
  "Better sleep can make tomorrow feel less impossible.",
  "Productivity without recovery is just burnout in disguise.",
  "A rested brain learns better than an exhausted one."
];

function newMotivation() {
  const randomMessage =
    motivationMessages[Math.floor(Math.random() * motivationMessages.length)];

  document.getElementById("motivationText").textContent = randomMessage;
}
