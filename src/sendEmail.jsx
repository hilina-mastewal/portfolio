const sendEmail = async (data) => {
  const response = await fetch('/.netlify/functions/sendEmail', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('An error occurred while sending the message.');
  }
};

export default sendEmail;