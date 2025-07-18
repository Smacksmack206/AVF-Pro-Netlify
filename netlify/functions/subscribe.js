exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { name, email } = JSON.parse(event.body);

    if (!name || !email) {
      return { statusCode: 400, body: JSON.stringify({ message: 'Name and email are required.' }) };
    }

    // In a real application, you would save this to a database.
    // For this example, we'll just log it.
    console.log(`New subscription: ${name} - ${email}`);

    return { statusCode: 200, body: JSON.stringify({ message: 'Subscription successful!' }) };
  } catch (error) {
    console.error('Subscription handling failed:', error.message);
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to handle subscription.' }) };
  }
};
