// utils/dateUtils.js (or inline)
function formatDateLabel(dateString) {
    const today = new Date();
    const trackDate = new Date(dateString);
    const diffTime = today.getTime() - trackDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
  
    return trackDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }
  