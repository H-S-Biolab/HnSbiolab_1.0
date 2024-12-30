const API_URL =
  'https://217f-203-252-33-3.ngrok-free.app/weight/?_id=6698b647dcc2c3282d3fc0f0'; // Replace with your API URL

export const fetchWeightData = async () => {
  const API_URL =
    'https://217f-203-252-33-3.ngrok-free.app/weight/?_id=6698b647dcc2c3282d3fc0f0'; // Replace with your API URL
  try {
    const response = await fetch(
      'https://217f-203-252-33-3.ngrok-free.app/weight/?_id=6698b647dcc2c3282d3fc0f0',
    );
    const json = await response.json();
    if (json && Array.isArray(json.data)) {
      return json.data;
    } else {
      console.error('Received data is not in the expected format:', json);
      return [];
    }
  } catch (error) {
    console.error('Error fetching weight data:', error);
    return [];
  }
};

export const postWeightData = async (userId, date, weight) => {
  const API_URL =
    'https://217f-203-252-33-3.ngrok-free.app/weight/?_id=6698b647dcc2c3282d3fc0f0'; // Replace with your API URL
  try {
    // date를 YYYY-MM-DD 형식으로 변환
    const formattedDate = date.split('T')[0];

    const data = {date: formattedDate, weight};
    console.log(data);
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        _id: userId, // 사용자 ID를 헤더에 추가
      },
      body: JSON.stringify(data), // 본문에 날짜와 몸무게만 포함
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(`Failed to post weight data: ${errorResponse.message}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error posting weight data:', error);
    throw error;
  }
};
