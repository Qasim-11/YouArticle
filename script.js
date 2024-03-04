let List = document.getElementById("List")
let s1 = document.getElementById("s1")
let s3 = document.getElementById("s3")
let s1Width = s1.style.width;
let s3Width = s3.style.width;
function DisplayList() {

  if (List.style.display === "none" || List.style.display === "") {
    List.style.display = "block";
  } else {
    List.style.display = "none";
  }
  if (s1.style.width === "60%") {
    s1.style.width = s1Width;
    s3.style.width = s3Width;
  } else {
    s1.style.width = "60%";
    s3.style.width = "100%";
  }

}
  

// Liknks for my websites


  document.getElementById("website1").addEventListener("click", function() {
    window.location.href = " https://qasim-11.github.io/PersonalPage/";
  });

  document.getElementById("website2").addEventListener("click", function() {
    window.location.href = "https://qasim-11.github.io/ColorFliper/";
  });

  document.getElementById("website3").addEventListener("click", function() {
    window.location.href = "https://qasim-11.github.io/JavaScriptProject/";
  });


  // JavaScript to show loader animation on form submission
document.getElementById("videoForm").addEventListener("submit", function() {
  document.getElementById("loader").style.display = "block"; // Show loader
  document.getElementById("submitButton").style.display = "none"; // Hide submit button
  // Simulate processing (remove this setTimeout function in your actual implementation)
  setTimeout(function() {
      // After processing, hide loader and show submit button again
      document.getElementById("loader").style.display = "none";
      document.getElementById("submitButton").style.display = "block";
  }, 5000); // Simulated processing time (5 seconds)
});

