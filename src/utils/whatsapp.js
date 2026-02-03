export const WHATSAPP_NUMBER = "917337752682";

export const sendWhatsAppMessage = (data, title = "New Form Submission") => {
  let message = `*${title}*\n\n`;

  for (const [key, value] of Object.entries(data)) {
    // Basic capitalization for keys
    const label = key.charAt(0).toUpperCase() + key.slice(1);
    
    // Skip empty values or internal flags
    if (value === "" || value === undefined || value === null || key === 'consent' || key === 'agree') continue;

    message += `*${label}*: ${value}\n`;
  }

  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  
  window.open(url, "_blank");
};
