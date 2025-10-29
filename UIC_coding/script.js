// Show/hide notifications for each button
let ticketBought = false;

function setButtonsDisabled(disabled) {
  document.getElementById("buyBtn").disabled = disabled;
  document.getElementById("redeemBtn").disabled = disabled;
}

function showSuccess() {
  hideNotifications();
  setButtonsDisabled(true);
  if (ticketBought) {
    document.getElementById("errorBuyNotif").style.display = "block";
    setTimeout(() => {
      hideNotifications();
      setButtonsDisabled(false);
    }, 3500);
    return;
  }
  document.getElementById("successNotif").style.display = "block";
  ticketBought = true;
  updateTicketStatus();
  setTimeout(() => {
    hideNotifications();
    setButtonsDisabled(false);
  }, 3500);
}
function showError() {
  hideNotifications();
  setButtonsDisabled(true);
  document.getElementById("errorNotif").style.display = "block";
  setTimeout(() => {
    hideNotifications();
    setButtonsDisabled(false);
  }, 3500);
}
function showBuyError() {
  hideNotifications();
  setButtonsDisabled(true);
  document.getElementById("errorBuyNotif").style.display = "block";
  setTimeout(() => {
    hideNotifications();
    setButtonsDisabled(false);
  }, 3500);
}
function showInfo() {
  hideNotifications();
  setButtonsDisabled(true);
  document.getElementById("infoNotif").style.display = "block";
  setTimeout(() => {
    hideNotifications();
    setButtonsDisabled(false);
  }, 4000);
}
function hideNotifications() {
  document.getElementById("successNotif").style.display = "none";
  document.getElementById("errorNotif").style.display = "none";
  document.getElementById("errorBuyNotif").style.display = "none";
  document.getElementById("infoNotif").style.display = "none";
}
function updateTicketStatus() {
  const status = document.getElementById("ticketStatus");
  if (ticketBought) {
    status.textContent = "You have a ticket.";
    status.style.color = "#47d16a";
  }
}
// Attach event listeners
window.onload = function () {
  document.getElementById("buyBtn").onclick = showSuccess;
  document.getElementById("redeemBtn").onclick = showError;
  document.getElementById("infoBtn").onclick = showInfo;
  updateTicketStatus();
};
