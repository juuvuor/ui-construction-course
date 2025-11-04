/**
 * Handles ticket purchase logic and UI updates
 * @returns {void}
 */

let ticketBought = false;
const NOTIFICATION_TIMEOUT = 4000;

function setButtonsDisabled(disabled) {
  document.getElementById("buyBtn").disabled = disabled;
  document.getElementById("redeemBtn").disabled = disabled;
}

function buyTicket() {
  hideNotifications();
  setButtonsDisabled(true);

  if (ticketBought) {
    document.getElementById("errorBuyNotif").style.display = "block";
    announceToScreenReader(
      "Error: You cannot buy another ticket. Please redeem your current ticket first."
    );
    setTimeout(() => {
      hideNotifications();
      setButtonsDisabled(false);
    }, NOTIFICATION_TIMEOUT);
    return;
  }

  document.getElementById("successNotif").style.display = "block";
  announceToScreenReader(
    "Ticket purchased successfully! Please redeem it at the inspector before buying another."
  );
  ticketBought = true;
  updateTicketStatus();
  setTimeout(() => {
    hideNotifications();
    setButtonsDisabled(false);
  }, NOTIFICATION_TIMEOUT);
}

function redeemTicket() {
  hideNotifications();
  setButtonsDisabled(true);

  // For this demo and assignment we only display an error notification.
  // In a real implementation redeeming would trigger the redemption flow (e.g. open a popup or call an API).
  if (ticketBought) {
    document.getElementById("errorNotif").style.display = "block";
    announceToScreenReader(
      "Error: You cannot redeem your ticket currently. Please see the inspector at the entrance."
    );
    setTimeout(() => {
      hideNotifications();
      setButtonsDisabled(false);
    }, NOTIFICATION_TIMEOUT);
  } else {
    document.getElementById("errorRedeemNotif").style.display = "block";
    announceToScreenReader(
      "Error: You don't have a ticket. Please buy a ticket first."
    );
    setTimeout(() => {
      hideNotifications();
      setButtonsDisabled(false);
    }, NOTIFICATION_TIMEOUT);
  }
}

function showBuyError() {
  hideNotifications();
  setButtonsDisabled(true);
  document.getElementById("errorBuyNotif").style.display = "block";
  setTimeout(() => {
    hideNotifications();
    setButtonsDisabled(false);
  }, NOTIFICATION_TIMEOUT);
}

function showInfo() {
  hideNotifications();
  setButtonsDisabled(true);
  document.getElementById("infoNotif").style.display = "block";
  announceToScreenReader(
    "You can only buy one ticket at a time. Please redeem your ticket before buying another."
  );
  setTimeout(() => {
    hideNotifications();
    setButtonsDisabled(false);
  }, NOTIFICATION_TIMEOUT);
}

function hideNotifications() {
  document.getElementById("successNotif").style.display = "none";
  document.getElementById("errorNotif").style.display = "none";
  document.getElementById("errorRedeemNotif").style.display = "none";
  document.getElementById("errorBuyNotif").style.display = "none";
  document.getElementById("infoNotif").style.display = "none";
}

/**
 * Announces message to screen readers
 * @param {string} message - Message to announce
 */
function announceToScreenReader(message) {
  const region = document.getElementById("notificationRegion");
  region.textContent = message;
  // Clear after a brief delay to allow screen readers to catch it
  setTimeout(() => {
    region.textContent = "";
  }, 1000);
}

function updateTicketStatus() {
  const status = document.getElementById("ticketStatus");
  const buyBtn = document.getElementById("buyBtn");
  const redeemBtn = document.getElementById("redeemBtn");

  if (ticketBought) {
    status.textContent = "You have a ticket.";
    status.style.color = "#47d16a";

    buyBtn.className = "buy-btn inactive";
    redeemBtn.className = "redeem-btn active";
  } else {
    status.textContent = "";

    buyBtn.className = "buy-btn active";
    redeemBtn.className = "redeem-btn inactive";
  }
}

/**
 * Handles keyboard navigation
 * @param {KeyboardEvent} event - The keyboard event
 */
function handleKeyPress(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    event.target.click();
  }
}

window.onload = function () {
  document.getElementById("buyBtn").onclick = buyTicket;
  document.getElementById("redeemBtn").onclick = redeemTicket;
  document.getElementById("infoBtn").onclick = showInfo;

  document.getElementById("buyBtn").onkeydown = handleKeyPress;
  document.getElementById("redeemBtn").onkeydown = handleKeyPress;
  document.getElementById("infoBtn").onkeydown = handleKeyPress;

  updateTicketStatus();
};
