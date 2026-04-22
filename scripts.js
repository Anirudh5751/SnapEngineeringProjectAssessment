/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

document.addEventListener('DOMContentLoaded', () => {
  const allDatapoints = [
    // Robotics Datapoints
    {
      topic: "Robotics",
      datapoint: "Autonomous Navigation",
      description: "Navigation algorithms for underwater robots to operate autonomously in the ocean.",
      link: "ai-info.html?topic=robotics&datapoint=Autonomous%20Navigation"
    },
    {
      topic: "Robotics",
      datapoint: "Obstacle Avoidance",
      description: "Algorithms that help underwater robots avoid obstacles like rocks and marine life.",
      link: "ai-info.html?topic=robotics&datapoint=Obstacle%20Avoidance"
    },
    {
      topic: "Robotics",
      datapoint: "Data Collection and Analysis",
      description: "Algorithms to gather and analyze environmental data from the ocean.",
      link: "ai-info.html?topic=robotics&datapoint=Data%20Collection%20and%20Analysis"
    },
    {
      topic: "Robotics",
      datapoint: "Marine Species Identification",
      description: "AI-powered computer vision to identify marine species from underwater imagery.",
      link: "ai-info.html?topic=robotics&datapoint=Marine%20Species%20Identification"
    },
    {
      topic: "Robotics",
      datapoint: "Environmental Change Detection",
      description: "Monitors and detects changes in underwater ecosystems, tracking long-term ocean health.",
      link: "ai-info.html?topic=robotics&datapoint=Environmental%20Change%20Detection"
    },
    // Computer Vision Datapoints
    {
      topic: "Computer Vision",
      datapoint: "Image Classification",
      description: "Classifies underwater images into categories like fish, coral species, etc.",
      link: "ai-info.html?topic=computer-vision&datapoint=Image%20Classification"
    },
    {
      topic: "Computer Vision",
      datapoint: "Object Detection",
      description: "Detects objects in underwater images, such as fish, coral, and submerged objects.",
      link: "ai-info.html?topic=computer-vision&datapoint=Object%20Detection"
    },
    {
      topic: "Computer Vision",
      datapoint: "Real-time Object Tracking",
      description: "Tracks moving objects (e.g., fish, underwater robots) in real-time.",
      link: "ai-info.html?topic=computer-vision&datapoint=Real-time%20Object%20Tracking"
    },
    {
      topic: "Computer Vision",
      datapoint: "Scene Reconstruction",
      description: "Reconstructs 3D models of underwater environments from images captured by robots or drones.",
      link: "ai-info.html?topic=computer-vision&datapoint=Scene%20Reconstruction"
    },
    {
      topic: "Computer Vision",
      datapoint: "Pose Estimation",
      description: "Estimates the position and orientation of robots in underwater settings.",
      link: "ai-info.html?topic=computer-vision&datapoint=Pose%20Estimation"
    },
    // Machine Learning Datapoints
    {
      topic: "Machine Learning",
      datapoint: "Linear Regression",
      description: "Predicts stock prices based on historical data.",
      link: "ai-info.html?topic=machine-learning&datapoint=Linear%20Regression"
    },
    {
      topic: "Machine Learning",
      datapoint: "K-Means Clustering",
      description: "Groups financial data into clusters based on similarities.",
      link: "ai-info.html?topic=machine-learning&datapoint=K-Means%20Clustering"
    },
    {
      topic: "Machine Learning",
      datapoint: "Random Forest",
      description: "A decision-tree-based model for risk assessment and financial forecasting.",
      link: "ai-info.html?topic=machine-learning&datapoint=Random%20Forest"
    },
    {
      topic: "Machine Learning",
      datapoint: "Support Vector Machine",
      description: "A supervised machine learning model used for classification tasks in financial data analysis.",
      link: "ai-info.html?topic=machine-learning&datapoint=Support%20Vector%20Machine"
    },
    {
      topic: "Machine Learning",
      datapoint: "Neural Networks",
      description: "Deep learning models for predicting financial outcomes and trends.",
      link: "ai-info.html?topic=machine-learning&datapoint=Neural%20Networks"
    }
  ];

  
  function showSortPopup() {
    const modal = document.getElementById("sortModal");
    const sortList = document.getElementById("sortList");

    const topicSlugMap = {
      "Robotics": "robotics",
      "Computer Vision": "computer-vision",
      "Machine Learning": "machine-learning"
    };
    const topics = ["Robotics", "Computer Vision", "Machine Learning"];
    let html = '';

    topics.forEach(topic => {
      html += `<h3>${topic}</h3>`;
      allDatapoints.filter(item => item.topic === topic).forEach(item => {
        const topicSlug = topicSlugMap[item.topic];
        html += `<li><a href="ai-info.html?topic=${topicSlug}"><strong>${item.datapoint}</strong></a></li>`;
      });
    });

    sortList.innerHTML = html;
    modal.style.display = "block";
  }

  
  function closeSortPopup() {
    const modal = document.getElementById("sortModal");
    modal.style.display = "none";
  }

  
  function searchSubmit(event) {
    if (event.key === "Enter") {
      searchData();
    }
  }

  
  function searchData() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const modal = document.getElementById("sortModal");
    const listContainer = document.getElementById("sortList");

    const filteredList = allDatapoints.filter(item => {
      return item.datapoint.toLowerCase().includes(input);
    });

    listContainer.innerHTML = filteredList.map(item => `
      <li><a href="${item.link}"><strong>${item.datapoint}</strong></a> <em style="color:#888;">(${item.topic})</em></li>
    `).join('');

    
    modal.style.display = "block";
  }

  
  window.showSortPopup = showSortPopup;
  window.closeSortPopup = closeSortPopup;
  window.searchData = searchData;
  window.searchSubmit = searchSubmit;
});
