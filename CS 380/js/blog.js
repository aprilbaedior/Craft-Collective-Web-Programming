// Run when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Make all custom functions globally available to the HTML
  window.likePost = likePost;
  window.addComment = addComment;
  window.openShareOptions = openShareOptions;
  window.closeShareOptions = closeShareOptions;
  window.sendEmail = sendEmail;
});

// Function to like a post
function likePost(postId) {
  const countEl = document.getElementById(`likeCount-${postId}`);
  let count = parseInt(countEl.textContent);
  count++;
  countEl.textContent = count;
}

// Function to add a comment to a post
function addComment(postId) {
  const textarea = document.getElementById(`newComment-${postId}`);
  const commentText = textarea.value.trim();

  if (commentText === "") return;

  //create a new comment element
  const comment = document.createElement("div");
  comment.classList.add("comment");
  comment.innerHTML = `<strong>You:</strong> ${commentText}`;

  const commentSection = document.getElementById(`comments-${postId}`);
  commentSection.insertBefore(comment, textarea.parentElement);

  textarea.value = "";
}

//funtions to open nd close share window
function openShareOptions(postId) 
{
  const panel = document.getElementById("share-options");
  panel.style.display = "flex";

  //get the URL + dynamic title from post
  const pageUrl = window.location.href;
  const postTitle = document.querySelector(`#${postId}`).previousElementSibling.querySelector("h2").textContent;
  const postImage = document.querySelector(`#${postId} img`).src;

  // Update all share links
  document.getElementById("facebook-share").href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
  document.getElementById("twitter-share").href = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${postTitle}`;
  document.getElementById("whatsapp-share").href = `https://api.whatsapp.com/send?text=${postTitle} ${pageUrl}`;
  document.getElementById("linkedin-share").href = `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${postTitle}`;
  document.getElementById("reddit-share").href = `https://reddit.com/submit?url=${pageUrl}&title=${postTitle}`;
}

//close share options function
function closeShareOptions() 
{
  document.getElementById("share-options").style.display = "none";
}

//send fake email function
function sendEmail() 
{
  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();

  if (email) 
  {
    alert(`Pretending to send blog post to: ${email}`);
    emailInput.value = "";
    closeShareOptions();
  } 
  else 
  {
    alert("Please enter a valid email.");
  }
}

//scroll to top button functionality
function scrollToTop()
{
  window.scrollTo({ 
    top: 0,
    behavior: "smooth"
  });
}

//create the button element
window.onscroll = function () 
{
  const btn = document.getElementById("scrollTopBtn");
  if (!btn) return;

  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) 
  {
    btn.style.display = "block";
  } 
  else 
  {
    btn.style.display = "none";
  }
};


  